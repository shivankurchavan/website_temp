import mountain1 from "../assets/about_image.jpg";
import mountain2 from "../assets/home.jpg";
import mountain3 from "../assets/about_image.jpg";
import mountain4 from "../assets/home.jpg";
import "./DestinationStyles.css";
import DestionationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Clothings</h1>
      <p>Description</p>
      <DestionationData
        className="first-des"
        heading="blah blah blah"
        text="lah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah bla "
        img1={mountain1}
        img2={mountain2}
      />
      <DestionationData
        className="first-des-reverse"
        heading="blah blah blah"
        text="lah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah blah blah blah blah more blah bla "
        img1={mountain3}
        img2={mountain4}
      />
    </div>
  );
};

export default Destination;
