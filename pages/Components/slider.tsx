import React, { Component, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import Slider from 'react-slick';
interface cssClassType {
    label: string;
    details: string;
    button: string;
}
const Sliderpage = () => {
    const [cssClass, setCssClass] = useState<cssClassType>({
        label: 'animate__animated animate__fadeInDown',
        details: 'animate__animated animate__slideInUp',
        button: 'animate__animated  animate__zoomIn',
    })
    const sliderImage = [
        {
            image: '/images/slide-01.jpg',
            label: 'Women Collection 2018',
            details: 'NEW SEASON'
        },
        {
            image: '/images/slide-02.jpg',
            label: 'Men New-Season',
            details: 'Jackets & Coats'
        },
        {
            image: '/images/slide-03.jpg',
            label: 'Men Collection 2018',
            details: 'New arrivals',
        }
    ];
    const handleAfterChange = (currentIndex: number) => {
        switch (currentIndex) {
            case 0:
                setCssClass({
                    label: 'animate__animated animate__fadeInDown',
                    details: 'animate__animated animate__fadeInBottomRight',
                    button: 'animate__animated  animate__zoomIn',
                })
                break;
            case 1:
                setCssClass({
                    label: 'animate__animated animate__rotateInDownLeft',
                    details: 'animate__animated animate__bounceInRight',
                    button: 'animate__animated  animate__zoomInUp'
                })
                break;
            case 2:
                setCssClass({
                    label: 'animate__animated animate__flipInX',
                    details: 'animate__animated animate__fadeInUpBig',
                    button: 'animate__animated  animate__jackInTheBox'
                })
        }
    };
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        afterChange: handleAfterChange,
        autoplay: true,
        autoplaySpeed: 7000,
        fade: true,
        pauseOnHover: false,
    };

    return (
            <Slider {...settings}>
                {
                    sliderImage.map((data, idx) => (
                        <div key={idx} className={`w-full h-screen relative`} >
                            <div className="w-full h-full relative flex justify-center ">
                                <Image src={data.image} alt="" fill className="object-cover" />
                                <div className="space-y-5 px-10 max-w-full h-full w-[80rem] absolute flex flex-col justify-center items-start">
                                    <span className={`${cssClass.label} text-2xl delay-[9000ms] duration-300`} style={{
                                        animationDelay: '1s'
                                    }}>{data.label}</span>
                                    <h3 className={`${cssClass.details} text-6xl delay-[4000ms] duration-300`}
                                        style={{
                                            animationDelay: '2s'
                                        }}>{data.details}</h3>
                                    <button className={`duration-300 delay-[3000ms] px-5 py-2 bg-blue-200 rounded-full  text-md text-white font-semibold ${cssClass.button}`}
                                        style={{
                                            animationDelay: '3s'
                                        }}>SHOP NOW</button>
                                </div>
                            </div>
                        </div>))
                }
            </Slider>
    )
}
export default Sliderpage