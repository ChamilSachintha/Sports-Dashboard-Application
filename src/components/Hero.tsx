import { useState } from "react";
import HeroImg from "../assets/Hero.jpg";

export default function HeroSection() {
  
  const slides = [HeroImg, HeroImg, HeroImg];

  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative w-full h-[80vh] flex items-center text-left overflow-hidden">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={slides[current]}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2
        w-12 h-12 rounded-full bg-black/50 hover:bg-black/70
        text-white flex items-center justify-center transition"
      >
        ❮
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2
        w-12 h-12 rounded-full bg-black/50 hover:bg-black/70
        text-white flex items-center justify-center transition"
      >
        ❯
      </button>

   
      <div className="relative z-10 text-white px-6 max-w-3xl mx-32">

        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
          ICC Cricket World Cup 2025
        </h1>

        <p className="mt-4 text-base md:text-xl text-gray-200">
          India vs Australia - Final Showdown
        </p>

        <button className="mt-6 bg-emerald-500 hover:bg-emerald-600 text-white font-bold px-6 py-3 rounded-xl transition">
          Watch Now
        </button>

      </div>

    </section>
  );
}