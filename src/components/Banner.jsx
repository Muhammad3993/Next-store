import Slider from "react-slick";
// carusel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// router dom
import { Link } from "react-router-dom";

import { TfiAngleRight, TfiAngleLeft } from 'react-icons/tfi'

const Banner = ({ data, height }) => {
  const settings = {
    customPaging: function () {
      return (
        <div className="banner_dot"></div>
      );
    },
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  return (
    <div className="container banner" style={{ height: height }}> 
      <Slider {...settings} className="banner_main">
        {
          data.length !== 0 ?
            data.map(slide => (
              <Link to='/' key={slide.id} className="banner_slide">
                <div className="bg_banner">
                  <img src={slide.preview} alt="" className="banner_img" />
                </div>
                <h1>{slide.title}</h1>
                <p>{slide.subtitle}</p>
              </Link>
            ))
            :
            <h1>no data</h1>
        }
      </Slider>
    </div>
  )
}

export default Banner;

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='banner_arrow banner_arrow_right'
      onClick={onClick}
    >
      <TfiAngleRight />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className='banner_arrow banner_arrow_left'
      onClick={onClick}
    >
      <TfiAngleLeft />
    </div>
  );
}