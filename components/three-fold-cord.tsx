import Image from "next/image";

const items = [
  {
    icon: "/praying.jpg",
    title: "OUR MISSION",
    description:
      "Raising up a Network of Women, passionate about Jesus and conforming into His image and fulfilling His purpose in their sphere of influence Esther 4:14",
  },
  {
    icon: "/amazing.jpg",
    title: "SALVATION THROUGH JESUS",
    description:
      "We are committed to fulfiling the great commission and seeing women of every nation come to Jesus!",
  },
  {
    icon: "/globe_orig.jpg",
    title: "DIFFERENT NATIONS BUT SAME VISION",
    description:
      "We are women who pray and fast. We rule through praying, fasting and obeying God's word!",
  },
];

const ThreeFoldCord = () => {
  return (
    <section className="relative w-full py-16">
      {/* Background image */}
      <Image src="/forest2.jpg" alt="" fill className="object-cover" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-2xl font-bold uppercase text-white sm:text-3xl">
          Our 3 fold cord
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-3">
          {items.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative h-40 w-full max-w-xs overflow-hidden rounded-lg shadow-lg sm:h-48">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-5 text-base font-bold uppercase tracking-wide text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-gray-200">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeFoldCord;