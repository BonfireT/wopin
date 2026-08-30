"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import { Play, Pause, ChevronLeft, ChevronRight } from "lucide-react";

// Add each image path here, one by one.
// Make sure each file actually exists in your public/gallery folder with this exact name.
const images = [
  "/gallery/photo-1.jpg",
  "/gallery/photo-2.jpg",
  "/gallery/photo-3.jpg",
  "/gallery/photo-4.jpg",
  "/gallery/photo-5.jpg",
  "/gallery/photo-6.jpg",
  "/gallery/photo-7.jpg",
  "/gallery/photo-8.jpg",
  "/gallery/photo-9.jpg",
  "/gallery/photo-10.jpg",
  "/gallery/photo-11.jpg",
  "/gallery/photo-12.jpg",
  "/gallery/photo-13.jpg",
  "/gallery/photo-14.jpg",
  "/gallery/photo-15.jpg",
  "/gallery/photo-16.jpg",
];

const Gallery = () => {
  const [current, setCurrent] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="w-full bg-[#3d2a0f] px-6 py-12">
      <div className="mx-auto max-w-4xl">
        {/* Main image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-md">
          <Image
            src={images[current]}
            alt={`WOPIN USA Conference with Rev Stella Ebegbuna - photo ${current + 1}`}
            fill
            className="object-cover"
          />

          {/* Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute left-4 top-4 flex items-center gap-1 rounded bg-black/70 px-3 py-1 text-sm font-semibold text-white hover:bg-black/90"
          >
            {isPlaying ? (
              <>
                <Pause size={14} /> Pause
              </>
            ) : (
              <>
                <Play size={14} /> Play
              </>
            )}
          </button>

          {/* Prev arrow */}
          <button
            onClick={goToPrev}
            aria-label="Previous image"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next arrow */}
          <button
            onClick={goToNext}
            aria-label="Next image"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
          >
            <ChevronRight size={20} />
          </button>

          {/* Caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-white">
            WOPIN USA Conference with Rev Stella Ebegbuna
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="mt-3 flex gap-2 overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-black/30 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-orange-400">
          {images.map((img, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`relative h-10 w-14 flex-shrink-0 overflow-hidden rounded ${
                index === current ? "ring-2 ring-orange-400" : "opacity-70"
              }`}
            >
              <Image src={img} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;