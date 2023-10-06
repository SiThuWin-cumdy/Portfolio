import AboutMeComponent from "@/components/AboutMe";
import HomeComponent from "@/components/Home";
import ContactMeComponent from "@/components/ContactMe";

export default function Home() {
  return (
    <>
      <section id="home">
        <HomeComponent />
      </section>
      <section id="aboutme">
        <AboutMeComponent />
      </section>
      <section id="contactme">
        <ContactMeComponent />
      </section>
    </>
  );
}
