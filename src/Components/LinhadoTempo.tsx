import Slider from "react-slick";
import Primeiro from "./Primeiro";
import Segundo from "./Segundo";
import Terceiro from "./Terceiro";

export default function LinhaDoTempo() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
/*     autoplay: true, */
    autoplaySpeed: 10000,
    pauseOnHover: false,
    arrows: false,
     responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        }
      },
    ] 
  };

  return (
    <div>
      <Slider {...settings} className="Testete">
        <Primeiro />
        <Segundo />
        <Terceiro />
      </Slider>
    </div>
  );
}

