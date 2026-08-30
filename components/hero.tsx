"use client"
const Hero = () => {
  return (
    <section className="relative w-full">
      <img
        src="/hero.jpg"
        alt="Congregation gathered at a WOPIN event"
        width={1600}
        height={500}
        className="h-64 w-full object-cover md:h-80 lg:h-[28rem]"
      />

      {/* Light overlay so colored text stays readable */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
        <h1 className="font-serif text-3xl font-extrabold uppercase leading-tight tracking-wide text-[#8B4513] [text-shadow:_2px_2px_8px_rgb(255_255_255_/_60%)] sm:text-4xl md:text-5xl lg:text-6xl">
          2026: Our Year of Divine Mandate!
          <span className="mt-2 block text-2xl italic tracking-normal sm:text-3xl md:text-4xl lg:text-5xl">
            Luke 4:18-19
          </span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;