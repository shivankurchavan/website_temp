import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image from "../assets/about_image.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={Image} title="Our Services" btn="hide" />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
