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
    <div className="w-full rounded w-full bg-black">
      <Slider
        {...settings}
        className=" h-[300px]">
        <div>
          <video
            controls
            muted
            controlsList
            className="rounded max-w-[440px] h-[300px] ">
            <source
              src="/assets/videos/craftsvillageApp.mp4"
              className="w-full object-cover "
            />
          </video>
        </div>
        <div>
          <video
            controls
            muted
            controlsList
            className="max-w-[440px] 
             h-[300px] rounded">
            <source
              src="/assets/videos/craftsvillageApp.mp4"
              className="w-full object-cover"
            />
          </video>
        </div>
      </Slider>
    </div>
  );
};

export default Craftsvillage;
