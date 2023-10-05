import AboutMeComponent from "@/components/AboutMe";
import HomeComponent from "@/components/Home";

export default function Home() {
  return (
    <>
      <section id="home">
        <HomeComponent />
      </section>

      <section id="aboutme">
        <AboutMeComponent />
      </section>
    </>
  );
}
