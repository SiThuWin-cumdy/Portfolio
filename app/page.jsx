import AboutMeComponent from "@/components/AboutMe";
import HomeComponent from "@/components/Home";

export default function Home() {
  return (
    <>
      <section>
        <HomeComponent />
      </section>

      <section>
        <AboutMeComponent />
      </section>
    </>
  );
}
