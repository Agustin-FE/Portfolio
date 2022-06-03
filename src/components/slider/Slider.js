import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";
import movies from "../../media/tmbd.png"
import guitar from "../../media/guitar.png"
import app from "../../media/match.png"

const Slider = () => {
  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <h2>Mis proyectos</h2>
      </div>

      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={movies}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={guitar}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={app}
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

    </div>

  );
};

export default Slider;
