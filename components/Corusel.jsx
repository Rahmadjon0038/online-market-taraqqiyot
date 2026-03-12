'use client'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React from "react";
import Slider from "react-slick";
import { ArrowRight } from "lucide-react";

var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

const Corusel = () => {

    const corusel = [
        {
            id: 1,
            brandName: "Online market",
            title: "Bolalar uchun chegirmalar",
            deck: "Bolalar kiyimlari arzon narxlarda har hil turdagi ",
            bgimg: "https://www.rollingstone.com/wp-content/uploads/2024/01/Best-Sites-for-Womenswear-15-Gap-1.jpg?w=1581&h=1054&crop=1"
        },
        {
            id: 2,
            brandName: "Online market",
            title: "Bolalar uchun chegirmalar",
            deck: "Bolalar kiyimlari arzon narxlarda har hil turdagi ",
            bgimg: "https://secrets-of-dream-interpretation.com/wp-content/uploads/2023/05/%D8%AA%D9%81%D8%B3%D9%8A%D8%B1-%D8%B1%D8%A4%D9%8A%D8%A9-%D9%85%D9%84%D8%A7%D8%A8%D8%B3-%D8%A7%D9%84%D8%A3%D8%B7%D9%81%D8%A7%D9%84-%D9%81%D9%8A-%D8%A7%D9%84%D9%85%D9%86%D8%A7%D9%85-%D9%84%D8%A5%D8%A8%D9%86-%D8%B3%D9%8A%D8%B1%D9%8A%D9%86.jpg"
        },
    ]

    return (
        <div className="mt-12">
            <Slider {...settings}>
                {
                    corusel?.map((item) => (
                        <div>
                            <div key={item.id} className="p-12 coruselCard rounded-xl min-h-[500px]">
                                <img src={item.bgimg} alt="img" className=" absolute top-0 left-0 w-full z-[-1]" />
                                <p className="text-white">{item.brandName.toUpperCase()}</p>
                                <h1 className="text-7xl font-bold text-white mt-12">{item.title}</h1>
                                <p className="text-white text-2xl mt-6">{item.deck}</p>
                                <button className="flex gap-3 items-center mt-12 bg-white p-4 rounded-xl font-bold">Hozirpoq o'rish <ArrowRight /></button>
                            </div>

                        </div>
                    ))
                }

            </Slider>
        </div>
    );
}

export default Corusel