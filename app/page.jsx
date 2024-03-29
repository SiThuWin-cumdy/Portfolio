import AboutMeComponent from "@/components/AboutMe";
import HomeComponent from "@/components/Home";
import ContactMeComponent from "@/components/ContactMe";
import ServicesComponent from "@/components/Services";
import BlogComponent from "@/components/Blog";

export default function Home() {
  return (
    <>
      <section id="home">
        <HomeComponent />
      </section>
      <section id="aboutme">
        <AboutMeComponent />
      </section>
      <section id="services">
        <ServicesComponent />
      </section>
      <section id="blogs">
        <BlogComponent />
      </section>
      <section id="contactme">
        <ContactMeComponent />
      </section>
    </>
  );
}
