'use client'
import React, { ReactNode } from 'react'
import Slider  from "react-slick"
import "slick-carousel/slick/slick.css"
import "./slick.css"


function Slide({vertical,web,children}:{vertical?:boolean,web?:string,children:ReactNode}) {
    const settings = {
        dots: true,
        infinite: true,
        autoplay : true,
        autoplaySpeed : 3000,
        slidesToShow: 1,
        slidesToScroll: 1,
        dotsClass: "button__bar",
        arrows: false,
        vertical : vertical
    }
    return (
        <div className={`w-full -z-30 ${web}`}>
            <Slider {...settings} className="">
                {children}
            </Slider>
        </div>
    )
}

export default Slide