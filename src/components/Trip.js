import "./TripStyles.css";
import "./TripData";
import TripData from "./TripData";
import trip1 from "../assets/fire.jpg";
import trip2 from "../assets/water.jpg";
import trip3 from "../assets/earth.jpg";
import trip4 from "../assets/wind.jpg";
import trip5 from "../assets/sky.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Our Products</h1>
      <p>We are inspired from the from the 5 elements of our nature. Choose the one which suits you the best and itll will help you manifest your destiny.</p>
      <div className="tripcard">
        <TripData
          image={trip1}
          heading="Fire"
          text="Inspired from the fire itself, it gives the sense of power and leadership." 
        />
        <TripData
          image={trip2}
          heading="Water"
          text="Fluid and calm like water. you handle every situation with cool."
        />
        <TripData
          image={trip3}
          heading="Earth"
          text="Sybolises prosperity and progress, portrays your growth element."
        />
        <TripData
          image={trip4}
          heading="Air"
          text="Essential to humankind, you behold the power to colab and become distructive or saviour"
        />
        <TripData
          image={trip5}
          heading="Akasa"
          text="infinite as the akasa, you give hope to those in need and become their lightbearer."
        />
        
      </div>
    </div>
  );
}

export default Trip;
