import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const Lorem = () => {
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
    <div className="rounded w-full ">
      <Slider
        {...settings}
        className=" h-[300px]">
        <div>
          <img
            className="w-full rounded object-cover h-[280px]"
            src="/assets/images/ux-LoremSprint.png"
            alt="Slide 1"
          />
        </div>

        <div>
          <video
            className="h-full rounded object-center h-[280px] bg-black"
            controls
            controlsList="nodownload  noremoteplayback">
            <source
              src="/assets/videos/lorem app.mp4"
              type="video/mp4"
              className="w-full h-[280px] object-cover rounded"
            />
          </video>
        </div>

        <div>
          <img
            className="rounded object-cover h-[280px]"
            src="/assets/images/Lorem-mockup.jpg"
            alt="Slide 1"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Lorem;
