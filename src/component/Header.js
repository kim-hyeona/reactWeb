import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./web.css"

import { Pagination , Navigation , Autoplay } from "swiper";

function Header(props) {

   
    const swiperData = [
        {id:1,txt1:"welcome to the New World",txt2:"트렌드를 선도하는 기업",txt3:"성공적인 비즈니스를 실현해 드립니다",slideClass:"Slide1"},
        {id:2,txt1:"welcome to the New World",txt2:"트렌드를 선도하는 기업",txt3:"성공적인 비즈니스를 실현해 드립니다",slideClass:"Slide2"},
        {id:3,txt1:"welcome to the New World",txt2:"트렌드를 선도하는 기업",txt3:"성공적인 비즈니스를 실현해 드립니다", slideClass:"Slide3"},
    ]

    return (
        <Swiper
          pagination={{
          type: "fraction",
        }}
        autoplay={{
             delay: 2000, 
                }}  
        loop={true}
        style={{hight:"700px"}} pagination={true}  modules={[Pagination , Autoplay, Navigation]} className="mySwiper">
        {swiperData.map((slide)=><SwiperSlide className={slide.slideClass}>
            <div className="txtbox"><p>{slide.txt1}</p><h2>{slide.txt2}</h2><p>{slide.txt3}</p></div>
            </SwiperSlide>)}

      </Swiper>

    );
}

export default Header;