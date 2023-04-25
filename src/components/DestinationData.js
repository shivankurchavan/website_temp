import { Component } from "react";
import mountain1 from "../assets/about_image.jpg";
import mountain2 from "../assets/home.jpg";
import mountain3 from "../assets/about_image.jpg";
import mountain4 from "../assets/home.jpg";
import "./DestinationStyles.css";

class DestionationData extends Component {
  render() {
    return (
      <div className={this.props.className}>
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img alt="img" src={this.props.img1} />
          <img alt="img" src={this.props.img2} />
        </div>
      </div>
    );
  }
}

export default DestionationData;
