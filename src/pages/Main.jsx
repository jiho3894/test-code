import Slider from "react-slick";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  let settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
  };
  return (
    <React.Fragment>
      <div className="w-full flex flex-col items-center">
        <div className="w-[80%] h-80 bg-slate-500">
          <Slider {...settings}>
            <div className="h-72 bg-green-500">
              <span>1</span>
            </div>
            <div className="h-72 bg-yellow-500">
              <span>2</span>
            </div>
            <div className="h-72 bg-red-500">
              <span>3</span>
            </div>
          </Slider>
        </div>
        <div className="w-32 h-14 mt-4 flex justify-center items-center bg-gray-400">
          <Link to="/roomList">000 시작하기</Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Main;
