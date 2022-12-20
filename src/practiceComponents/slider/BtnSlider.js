//Import css
import "./Slider.css";

//Import accessories
import { AiFillCaretLeft } from "react-icons/ai";
import { AiFillCaretRight } from "react-icons/ai";

const BtnSlider = ({ direction, moveSlide }) => {
  // console.log(direction, moveSlide);
  return (
    <button
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      onClick={moveSlide}
    >
      {direction === "next" ? <AiFillCaretRight /> : <AiFillCaretLeft />}
    </button>
  );
};

export default BtnSlider;
