import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import GeorgeHarrison from "./GeorgeHarisson";
import JohnLennon from "./JohnLennon";
import PaulMcCartney from "./PaulMcCartney";
import RingoStarr from "./RingoStarr";

export default function IntegrantesRolagem() {
  interface ArrowProps {
    onClick: () => void;
  }

  const NextArrow = ({ onClick }: ArrowProps) => {
    return (
      <div className="arrowNext" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }: ArrowProps) => {
    return (
      <div className="arrowPrev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  }; 

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <NextArrow onClick={() => NextArrow} />,
    prevArrow: <PrevArrow onClick={() => PrevArrow} />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 0.334,
        }
      }
    ] 
  };

  return (
    <div className="Integrantes">
      <Slider {...settings}>
        <div className="slider John">
          <JohnLennon />
        </div>
        <div className="slider Paul">
          <PaulMcCartney />
        </div>
        <div className="slider Ringo">
          <RingoStarr />
        </div>
        <div className="slider George">
          <GeorgeHarrison />
        </div>
      </Slider>
    </div>
  );
}
