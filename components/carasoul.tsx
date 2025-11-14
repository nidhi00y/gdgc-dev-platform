"use client";

import { NextPage } from "next";
import { Card } from "./ui/card";
import { useState, useEffect, useRef, useCallback } from "react";
import carouselArrow from "../app/assets/carouselArrow.svg";
import Image from "next/image";

interface Props {
  list: Array<string>;
}

const Carasoul: NextPage<Props> = ({ list }) => {
  const colors: Array<string> = ["#FF6A66", "#FDD568", "#28D781", "#69A6FC"];
  const [active, setActive] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(5);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const prevSlide = useCallback(() => {
    setActive((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  }, [list.length]);

  const nextSlide = useCallback(() => {
    setActive((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  }, [list.length]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setCardsPerView(5);
      else if (window.innerWidth >= 768) setCardsPerView(3);
      else setCardsPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [nextSlide]);

  // ⏱️ Auto-scroll every 3s
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      nextSlide();
    }, 2000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [list.length, nextSlide]);

  const handleMouseEnter = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(nextSlide, 2000);
  };

  const extendedList = [...list, ...list, ...list];
  const middleIndex = Math.floor(extendedList.length / 3);

  return (
    <div
      className="relative flex justify-center items-center w-full select-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        onClick={prevSlide}
        className="absolute -left-[4%] z-10 hover:brightness-80 w-[10%]"
      >
        <Image src={carouselArrow} alt="left" />
      </button>

      <div className="overflow-hidden w-[90vw]">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${
              ((active + middleIndex) * 100) / cardsPerView
            }%)`,
          }}
        >
          {extendedList.map((d, i) => {
            const realIndex =
              (i - active + extendedList.length) % extendedList.length;
            const centerIndex = Math.floor(cardsPerView / 2);
            const offset = (i - (active + middleIndex)) % extendedList.length;
            const absOffset = Math.abs(offset % list.length);

            return (
              <div
                key={i}
                className="flex-shrink-0 p-2 transition-transform duration-500"
                style={{
                  width: `${100 / cardsPerView}%`,
                  transform: `scale(${absOffset === centerIndex ? 1 : 0.8})`,
                  opacity: 1,
                }}
              >
                <Card className="flex justify-center items-center p-2 bg-white h-[50vh]">
                  <Card
                    style={{ backgroundColor: colors[i % colors.length] }}
                    className="w-full h-full font-bold text-black border-black border-4 text-4xl flex justify-center items-center pb-[20%]"
                  >
                    {d}
                  </Card>
                </Card>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={nextSlide}
        className="absolute -right-[4%] z-10 rotate-180 hover:brightness-80 w-[10%]"
      >
        <Image src={carouselArrow} alt="right" />
      </button>
    </div>
  );
};

export default Carasoul;
