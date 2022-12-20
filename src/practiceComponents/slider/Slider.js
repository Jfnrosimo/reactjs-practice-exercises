//Import css
import "./Slider.css";

//Import hooks
import { useState } from "react";

import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
    console.log(process.env.PUBLIC_URL);
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  return (
    <div className="py-5 border border-slate-500 m-2">
      <h1 className="text-center text-3xl font-semibold">Slider</h1>
      <div className="container-slider">
        {dataSlider.map((obj, index) => {
          return (
            <div
              className={
                slideIndex === index + 1 ? "slide active-anim" : "slide"
              }
              key={obj.id}
            >
              <img
                src={process.env.PUBLIC_URL + ` /images/img${index + 1}.jpg`}
                alt={`slideshow`}
              />
            </div>
          );
        })}
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
      </div>
    </div>
  );
};

export default Slider;
