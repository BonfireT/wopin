import Image from "next/image";

const VideoSection = () => {
  return (
    <section className="relative w-full py-16">
      {/* Background image */}
      <Image
        src="/women.jpg"
        alt=""
        fill
        className="object-cover"
      />

      {/* Overlay for contrast */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Video */}
      <div className="relative z-10 mx-auto flex max-w-3xl justify-center px-6">
        <div className="aspect-video w-full max-w-xl overflow-hidden rounded-lg shadow-2xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/SX-9X1rmx9M"
            title="Rev Stella Ebegbuna - Women of Purpose International Network"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;