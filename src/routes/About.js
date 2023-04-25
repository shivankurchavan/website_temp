import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImage from "../assets/about_image.jpg";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImage}
        title="About us "
        btnCLass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
