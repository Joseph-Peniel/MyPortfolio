import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Craftsvillage = () => {
  // Slick slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite scroll
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at once
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="carousel-container rounded">
      <Slider {...settings} >
     
      
        <div>
          <video controls muted controlsList className=" rounded h-full object-center">
            <source src="/assets/videos/craftsvillageApp.mp4"/>
          </video>
        </div>
        <div>
          <video controls muted controlsList className=" rounded ">
            <source src="/assets/videos/craftsvillageApp.mp4"/>
          </video>
        </div>
        
      </Slider>
    </div>
  );
};

export default Craftsvillage;
