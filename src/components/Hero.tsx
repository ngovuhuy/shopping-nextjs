'use client'
import React from 'react'
import Slide from './Slide';
import Slider from "react-slick";

const Hero = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    pauseOnHover: false,
    slidesToScroll: 1
  };

  const slideData = [
    {
      id: 0,
      img: "/banner4.jpg",
      title: "Sản phẩm đang thịnh hành",
      mainTitle: "Hàng mới nhất dành cho phụ nữ",
      price: "$20",
    },
    {
      id: 1,
      img: "/banner2.jpg",
      title: "Sản phẩm đang thịnh hành",
      mainTitle: "Hàng mới nhất dành cho phụ nữ",
      price: "$20",
    },
    {
      id: 2,
      img: "/banner3.jpg",
      title: "Sản phẩm đang thịnh hành",
      mainTitle: "Hàng mới nhất dành cho phụ nữ",
      price: "$20",
    },
  ];

  return (
    <div>
      <div className="container pt-6 lg:pt-0 overflow-hidden">
        <Slider {...settings}>
          {slideData.map((item) => (
            <Slide
              key={item.id}
              img={item.img}
              title={item.title}
              mainTitle={item.mainTitle}
              price={item.price}
            />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
