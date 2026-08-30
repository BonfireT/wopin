"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const slides = [
  { id: 1, src: "/rev stella1.jpg", alt: "Rev Stella Ebegbuna photo 1" },
  { id: 2, src: "/rev stella2.jpg", alt: "Rev Stella Ebegbuna photo 2" },
  { id: 3, src: "/rev stella3.jpg", alt: "Rev Stella Ebegbuna photo 3" },
  { id: 4, src: "/rev stella4.jpg", alt: "Rev Stella Ebegbuna photo 4" },
  { id: 5, src: "/rev stella5.jpg", alt: "Rev Stella Ebegbuna photo 5" },
  { id: 6, src: "/rev stella6.jpg", alt: "Rev Stella Ebegbuna photo 6" },
];

export default function FoundingPresident() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play interval switching every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />

      {/* 1. Top Wide Banner Image */}
      <div className="relative h-80 w-full md:h-[480px] lg:h-[560px]">
        <Image
          src="/founder2.jpg"
          alt="Rev Stella Ebegbuna ministering"
          fill
          className="object-cover object-[center_25%]"
          priority
        />
      </div>

      {/* 2. Title & Name Section */}
      <div className="flex flex-col items-center justify-center px-6 pt-12 pb-6 text-center">
        <h1 className="text-3xl font-normal text-gray-900 sm:text-4xl">
          Rev Stella Ebegbuna
        </h1>
        <h2 className="mt-2 text-3xl font-normal text-gray-900 sm:text-4xl">
          (Our Founding President)
        </h2>
      </div>

      {/* 3. Image Carousel Section */}
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center px-4 pb-12">
        {/* Main Image Display Box */}
        <div className="relative flex w-full items-center justify-center overflow-hidden rounded-lg shadow-lg">
          <img
            src={slides[currentIndex].src}
            alt={slides[currentIndex].alt}
            className="h-auto max-h-[75vh] w-full object-contain"
          />

          {/* Backward Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous image"
            className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-black/60 p-3 text-2xl text-white transition-colors hover:bg-black/80 focus:outline-none"
          >
            &#10094;
          </button>

          {/* Forward Button */}
          <button
            onClick={handleNext}
            aria-label="Next image"
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-black/60 p-3 text-2xl text-white transition-colors hover:bg-black/80 focus:outline-none"
          >
            &#10095;
          </button>
        </div>

        {/* 6 Thumbnail Selector Buttons */}
        <div className="mt-4 grid grid-cols-6 gap-2 sm:gap-4">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              onClick={() => setCurrentIndex(index)}
              className={`relative h-16 w-16 overflow-hidden rounded-md border-2 transition-all sm:h-20 sm:w-20 ${
                index === currentIndex
                  ? "border-amber-500 opacity-100 ring-2 ring-amber-500/50"
                  : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </section>

      {/* 4. YouTube Video & Biography Section */}
      <section className="mx-auto flex w-full max-w-4xl flex-col items-center px-6 pb-20">
        {/* Embedded Responsive YouTube Video */}
        <div className="w-full max-w-xl overflow-hidden rounded-md shadow-md">
          <div className="relative aspect-video w-full">
            <iframe
              src="https://www.youtube.com/embed/SX-9X1rmx9M"
              title="Rev Stella Ebegbuna (President, Women of Purpose International Network)"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute top-0 left-0 h-full w-full border-0"
            ></iframe>
          </div>
        </div>

        {/* Stylish Font Biography Block (Exact 6 Paragraph Split) */}
        <div className="mt-12 w-full max-w-2xl space-y-8 font-serif text-left text-lg leading-relaxed text-gray-800 md:text-xl">
          {/* Paragraph 1 */}
          <p>
            With over 30 years experience in full time Christian Service; Rev
            Stella Ebegbuna is a seasoned and anointed handmaiden of the Lord
            Jesus. She received a specific call from the LORD Jesus to prepare
            the bride of Christ for His second coming, mentor women for ministry
            and to gather in the final harvest. She is always excited about
            meeting new people, impacting lives and bringing transformation
            into dark regions.
          </p>

          {/* Paragraph 2 */}
          <p>Her husband calls her “The Woman of Purpose”</p>

          {/* Paragraph 3 */}
          <p>
            She is a spiritual warrior who has chosen to walk with Jesus no
            matter what it will cost. Committed to seeing people reached,
            discipled and mentored for ministry, Rev Stella is always seeking
            out people who are hungry to find their purpose in God.
          </p>

          {/* Paragraph 4 */}
          <p>
            Happily married to Apostle John Ebegbuna they are continuously
            looking for means of fulfilling the great commission. Women of
            Purpose International Network was started in 1999 by Rev Stella
            Ebegbuna. The Lord Jesus put a vision in her heart to elevate and
            encourage women to move into His purpose for their lives. The first
            meeting of Women of Purpose was held in Lagos, Nigeria in March
            1999.
          </p>

          {/* Paragraph 5 */}
          <p>
            She is also the Vice president of Firebrand International Gospel
            Missions, Vice president of Tree of Life International Churches and
            the Founding President of Women of Purpose International Network.
            She is an experienced church planter and a sought after
            international conference speaker. As happy speaking to one person as
            she is speaking to thousands. Her passion is to prepare the church
            for the second coming of Jesus. A woman of prayer who mentors many
            people in her quest to see Jesus manifest in people.
          </p>

          {/* Paragraph 6 */}
          <p>
            Her ministry is a Holy of Holies ministry with a strong word from the
            LORD, a strong hunger for righteousness which is confirmed with
            signs, wonders and miracles.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}