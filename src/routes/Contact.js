import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Image from "../assets/about_image.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={Image} title="Contact" btn="hide" />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
