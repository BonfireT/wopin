import Image from "next/image";
import { MapPin } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function Conference() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Title banner */}
      <section className="w-full bg-[#8B0000] px-6 py-16 text-center">
        <h1 className="text-4xl font-extrabold text-[#c98a4b] sm:text-5xl">
          Lagos Liquid Fire Conference 2027
        </h1>
      </section>

      {/* Flyer image */}
      <section className="flex w-full justify-center bg-white px-6 pt-12">
        <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden">
          <Image
            src="/liquid.jpg"
            alt="Liquid Fire Conference 2027 - Theme Ephphatha, Matthew 18:18"
            fill
            sizes="(max-width: 768px) 100vw, 448px"
            className="object-cover"
          />
        </div>
      </section>

      {/* Location, description, and ticket button */}
      <section className="flex flex-col items-center bg-white px-6 pb-12 pt-6 text-center">
        <div className="flex items-center gap-1 text-sm font-semibold text-gray-800">
          <MapPin size={16} className="text-red-600" />
          The Oriental Hotels, Lekki - Lagos.
        </div>

        <p className="mt-3 max-w-lg text-sm text-[#8B4513]">
          Join us for our life changing annual conference in Lagos, Nigeria.
          Lagos Liquid Fire Conference 2027.
        </p>

        
         <a href="https://www.eventbrite.com/e/women-of-purpose-international-network-liquid-fire-conference-2027-tickets-1556733685359"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-gray-400 px-4 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-100"
        >
          Buy Tickets
        </a>
      </section>

      <Footer />
    </div>
  );
}