'use client'
import React from 'react'
import products from '@/constants/collection'
import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Week = () => {
 
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };
  
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    slidesToShow: 4,
    speed: 1000,
    focusOnSelect: false,
    arrows:false
  };
  return (
    <main className=" px-10 mb-16 flex flex-col gap-5 font-Beatrice-Deck-Trial tracking-relaxed leading-12">
      <section className="flex justify-between items-end my-5 ">
        <div className="flex items-center gap-0">
          <h1 className="font-Beatrice-Deck-Trial font-extrabold text-6xl tracking-relaxed leading-12  text-start ">
            NEW <br />
            THIS WEEK
          </h1>
          <span className=" font-Beatrice-Deck-Trial font-extrabold text-6xl tracking-relaxed leading-12 text-blue-1000">
            ({products.length})
          </span>
        </div>
        <Link href="/" className="text-gray-500 hover:text-gray-700">
          See All
        </Link>
      </section>
      <section className="ml-10 ">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {products.map((data, index) => (
            <li key={index} className="mx-4">
              <Image
                src={data.path}
                alt={"product"}
                width={260}
                height={300}
                className="border boder-2 border-gray-400"
              />

              <p className="text-xs font-medium  text-gray-400">
                {data.name}
                <br />
              </p>
              <div className="flex  justify-between">
                <div className="flex justify-between ">
                  <p className="font-medium text-x w-1/2">{data.Details}</p>
                  <p>{data.price}$</p>
                </div>
              </div>
            </li>
          ))}
        </Slider>
      </section>
      <section className="flex gap-5 justify-center">
        <button
          className="border-gray-1000 border-2 px-6 py-3  text-gray-1000 hover:text-black hover:border-black"
          onClick={previous}
        >
          {" "}
          &#60;{" "}
        </button>
        <button
          className="border-gray-1000 border-2 px-6 py-3 text-gray-1000 hover:text-black hover:border-black"
          onClick={next}
        >
          {" "}
          &#62;{" "}
        </button>
      </section>
    </main>
  );
}

export default Week;