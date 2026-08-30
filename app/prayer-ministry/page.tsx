import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const prayerPoints = [
  "The Global body of Christ",
  "We pray for the nations and world leaders.",
  "We pray effectiveness of Missionaries and people in called into the five-fold ministry.",
  "Christian marriages.",
  "Youths.",
  "Widows and Orphans.",
];

export default function PrayerMinistry() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Background photo with heading and inset image */}
      <section className="relative flex h-[500px] w-full items-start justify-center overflow-hidden sm:h-[560px]">
        <Image
          src="/prayer.jpg"
          alt="Congregation praying together"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="relative z-10 flex flex-col items-center px-6 pt-8">
          <h1 className="text-center text-2xl font-extrabold text-white drop-shadow-lg sm:text-3xl md:text-4xl">
            We know the power of prayer
          </h1>

          {/* Inset photo with caption */}
          <div className="relative mt-6 h-72 w-72 overflow-hidden shadow-2xl sm:h-80 sm:w-80">
            <Image
              src="/prayer1.jpg"
              alt="Women praying together at a WOPIN meeting"
              fill
              sizes="320px"
              className="object-cover"
            />

            <div className="absolute inset-0 flex items-center justify-center bg-black/20 px-4">
              <p className="text-center text-xl font-light text-white drop-shadow-md">
                Friday Weekly Praying and Fasting
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prayer focus section */}
      <section className="w-full bg-[#2b3436] px-6 py-16 text-center">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-xl font-bold text-white sm:text-2xl">
            Join us for our weekly fasting and prayers
          </h2>

          <div className="mx-auto mt-4 h-px w-24 bg-gray-500" />

          <p className="mt-6 text-lg text-gray-200">
            We rule through praying, fasting and obeying God&apos;s word! The
            meetings are held in our respective centres and online.
          </p>

          <p className="mt-4 text-lg font-semibold text-gray-200">
            We pray for:
          </p>

          <ol className="mx-auto mt-4 max-w-xl list-decimal space-y-2 pl-6 text-left text-amber-200">
            {prayerPoints.map((point, index) => (
              <li key={index} className="text-center">
                {point}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Footer />
    </div>
  );
}