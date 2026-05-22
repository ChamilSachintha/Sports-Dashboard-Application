import HeroImg from "../assets/Hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center text-left">

      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HeroImg}
          alt="Hero"
          className="w-full h-full object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
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