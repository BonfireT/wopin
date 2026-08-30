import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function BibleInAYear() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero banner */}
      <section className="relative h-64 w-full md:h-80 lg:h-96">
        <Image
          src="/bible2.jpg"
          alt="Open Bible with a red ribbon bookmark"
          fill
          sizes="100vw"
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <h1 className="text-center text-3xl font-extrabold text-white drop-shadow-lg sm:text-4xl md:text-5xl">
            Read the bible in a year with us
          </h1>
        </div>
      </section>

      {/* Welcome text */}
      <section className="flex flex-col items-center bg-white px-6 py-16 text-center">
        <p className="text-sm font-semibold text-gray-700">
          Welcome to <span className="text-orange-600">WOPIN</span>{" "}
          <span className="text-red-700">READ THE BIBLE IN A YEAR</span>!
        </p>

        <p className="mt-4 max-w-2xl text-xl font-extrabold italic leading-relaxed text-gray-900 sm:text-2xl">
          As we read through our bibles, depend on the Holy Spirit and pray
          we will see transformation in our lives.
        </p>
      </section>

      {/* Reading plans + prayer section */}
      <section className="w-full bg-white px-6 py-12">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 sm:grid-cols-3">
          {/* Column 1: 52 weeks */}
          <div className="flex flex-col items-center text-center">
            <div className="relative h-40 w-full max-w-xs overflow-hidden rounded">
              <Image
                src="/reading-52-weeks-photo.jpg"
                alt="Reading the Bible in the morning"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
              />
            </div>

            <h3 className="mt-4 text-lg font-bold text-gray-900">
              Read through the bible in 52 weeks
            </h3>

            
              <a href="/pdfs/bible-in-52-weeks.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 text-sm text-gray-500 hover:text-orange-600"
            >
              Download Bible in 52 weeks
            </a>

            <div className="relative mt-4 h-64 w-full max-w-xs overflow-hidden rounded border border-gray-300">
              <Image
                src="/reading-52-weeks-plan.jpg"
                alt="52 week Bible reading plan preview"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Column 2: 90 days */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-bold text-gray-900">
              Read through the bible in 90 days
            </h3>

            
              <a href="/download-bible-in-a-year"
              className="mt-2 text-sm font-semibold text-blue-700 underline hover:text-orange-600"
            >
              Download Bible In A Year
            </a>
            <p className="text-sm text-gray-500">Bible in 90 days</p>

            <div className="relative mt-4 h-80 w-full max-w-xs overflow-hidden rounded border border-gray-300">
              <Image
                src="/reading-90-days-plan.jpg"
                alt="90 day Bible reading plan preview"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
              />
            </div>

            
              <a href="/pdfs/bible-in-90-days.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-block rounded bg-red-600 p-1 text-white"
              aria-label="Download 90 day Bible reading plan PDF"
            >
              PDF
            </a>
          </div>

          {/* Column 3: Prayer */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-bold text-gray-900">
              We rule through prayer
            </h3>

            <div className="relative mt-4 h-56 w-full max-w-xs overflow-hidden rounded">
              <Image
                src="/prayer-1.jpg"
                alt="Woman praying"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
              />
            </div>

            
              <a href="/prayer-ministry"
              className="mt-4 text-sm font-semibold text-blue-700 underline hover:text-orange-600"
            >
              Our Prayer Ministry
            </a>
            <p className="text-sm text-gray-500">Friday fasting and prayers</p>

            <div className="relative mt-4 h-56 w-full max-w-xs overflow-hidden rounded">
              <Image
                src="/prayer-2.jpg"
                alt="Rev Stella Ebegbuna ministering with a microphone"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}