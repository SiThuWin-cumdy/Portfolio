"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

// Minimal helpers
function setCookie(name, value, days = 365) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; path=/; expires=${expires}`;
}
function getCookie(name) {
  return document.cookie.split(";").map(c=>c.trim()).find(c=>c.startsWith(name+"="))?.split("=")[1];
}
function generateCid() {
  // simple uuid v4-ish
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

export default function AnalyticsHandler() {
  const pathname = usePathname();
  const [consent, setConsent] = useState(undefined); // undefined until we read localStorage after mount
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const [mounted, setMounted] = useState(false);

  // ensure we have a persistent client id for Measurement Protocol and read consent after mount
  useEffect(() => {
    // Read preference from localStorage first, then fallback to cookie
    let stored = null;
    try {
      stored = localStorage.getItem("cookie_consent");
    } catch (e) {
      stored = null;
    }

    if (!stored) {
      try {
        const c = getCookie('cookie_consent');
        if (c) stored = decodeURIComponent(c);
      } catch (e) {
        // ignore
      }
    }

    setConsent(stored);
    setMounted(true);

    let cid = getCookie('ga_cid');
    if (!cid) {
      cid = generateCid();
      setCookie('ga_cid', cid, 365 * 2);
    }
  }, []);

  // load gtag script only when consent granted
  useEffect(() => {
    if (consent !== 'granted') return;
    // dynamically add gtag if not already present
    if (typeof window !== 'undefined' && GA_MEASUREMENT_ID && !window.gtagInitialized) {
      const s = document.createElement('script');
      s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      s.async = true;
      document.head.appendChild(s);

      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);} // eslint-disable-line no-unused-vars
      window.gtag = function(){window.dataLayer.push(arguments)};
      window.gtagInitialized = true;
      window.gtag('js', new Date());
      window.gtag('config', GA_MEASUREMENT_ID);

      // If server-side measurement endpoint is configured, also fire an initial pageview
      triggerServerPageview(pathname);
    }
  }, [consent, GA_MEASUREMENT_ID]);

  // on SPA route change, send client gtag event (if enabled) and server-side pageview
  useEffect(() => {
    if (!pathname) return;
    const cid = getCookie('ga_cid') ? decodeURIComponent(getCookie('ga_cid')) : null;

    if (consent === 'granted' && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'page_view', { page_path: pathname, page_location: window.location.href });
    }

    // server-side fallback (Measurement Protocol)
    triggerServerPageview(pathname, cid);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  async function triggerServerPageview(path, clientId) {
    try {
      await fetch('/api/track', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ path, client_id: clientId }),
      });
    } catch (e) {
      // fail silently
      console.error('Server-side analytics failed', e);
    }
  }

  function acceptAll() {
    try { localStorage.setItem('cookie_consent', 'granted'); } catch (e) {}
    try { setCookie('cookie_consent', 'granted', 365); } catch (e) {}
    setConsent('granted');
  }
  function rejectAll() {
    try { localStorage.setItem('cookie_consent', 'denied'); } catch (e) {}
    try { setCookie('cookie_consent', 'denied', 365); } catch (e) {}
    setConsent('denied');
  }

  // Don't render anything until we've checked storage (prevents flash and repeated banner)
  if (!mounted) return null;

  if (consent === 'granted' || consent === 'denied') {
    return null; // nothing to render once preference chosen
  }

  // Minimal banner UI
  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-8 md:bottom-8 z-50">
      <div className="bg-white p-4 rounded-md shadow-md text-sm text-gray-800 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="mb-3 md:mb-0">
          This site uses cookies for analytics to improve the site experience. Do you accept analytics cookies?
        </div>
        <div className="flex gap-2">
          <button onClick={rejectAll} className="px-4 py-2 rounded-md border border-gray-300">Decline</button>
          <button onClick={acceptAll} className="px-4 py-2 rounded-md bg-indigo-600 text-white">Accept</button>
        </div>
      </div>
    </div>
  );
}
