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
      <section className="w-full bg-[#f5ede4] px-6 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-10 sm:grid-cols-2">
          {/* Column 1: Reading plan PDFs */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-bold text-gray-900">
              Bible Reading Plans
            </h3>

            <div className="mt-6 flex flex-col gap-4">
              
                <a href="/pdf/bible-in-52-weeks.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
              >
                Download: Bible in 52 Weeks
              </a>

              
                <a href="/pdf/bible-in-90-days.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
              >
                Download: Bible in 90 Days
              </a>

              
                <a href="/pdf/navigators-bible-reading-plan.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded border border-gray-400 px-4 py-2 text-sm font-semibold text-gray-800 transition-colors hover:bg-gray-100"
              >
                Download: Navigators Bible Reading Plan
              </a>
            </div>
          </div>

          {/* Column 2: Prayer */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-lg font-bold text-gray-900">
              We rule through prayer
            </h3>

            <div className="relative mt-4 h-56 w-full max-w-xs overflow-hidden rounded">
              <Image
                src="/pray.jpg"
                alt="Woman praying"
                fill
                sizes="(max-width: 640px) 100vw, 320px"
                className="object-contain"
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
                src="/rev.jpg"
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