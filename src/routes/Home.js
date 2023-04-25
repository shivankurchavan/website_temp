import Destination from "../components/Destination";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import image from "../assets/home.jpg";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={image}
        title="Your Clothing Your Choice"
        text="Choose Your Own Design"
        btnText="Clothing Plan"
        url="/"
        btn="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
