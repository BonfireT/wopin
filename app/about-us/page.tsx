"use client"
import Image from "next/image";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, Printer } from "lucide-react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import OrganizationalStructure from "@/components/organizational-structure";
import OurHistory from "@/components/our-history";
import Gallery from "@/components/gallery";

export default function AboutUs() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero section with background image */}
      <section className="relative h-64 w-full md:h-80 lg:h-96">
        <Image
          src="/congregation.jpg"
          alt="Congregation gathered at a WOPIN event"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30" />

        {/* Video + Heading, stacked and centered on the image */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-4 px-6">
          <div className="aspect-video w-full max-w-sm overflow-hidden rounded-lg shadow-2xl sm:max-w-md">
            <iframe
              className="h-full w-full"
              src="https://www.youtube.com/embed/aJJWtB4oIW0"
              title="Welcome to Women Of Purpose International Network"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>

          <h1 className="text-3xl font-extrabold text-red-500 drop-shadow-lg sm:text-4xl">
            About us
          </h1>
        </div>
      </section>

      {/* Social icons bar */}
      <div className="flex w-full items-center justify-center gap-6 bg-[#1a0f0a] py-6">
        
          <a href="https://facebook.com/womenofpurposeinternationalnetwork"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-white transition-colors hover:text-orange-400"
        >
          <FaFacebook size={18} />
        </a>

        
          <a href="https://twitter.com/womenofpurpose"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter)"
          className="text-white transition-colors hover:text-orange-400"
        >
          <FaXTwitter size={18} />
        </a>

        
          <a href="https://www.instagram.com/Womenofpurposeintnetwork"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="text-white transition-colors hover:text-orange-400"
        >
          <FaInstagram size={18} />
        </a>

        
          <a href="https://youtube.com/@womenofpurpose"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="text-white transition-colors hover:text-orange-400"
        >
          <FaYoutube size={18} />
        </a>

        
          <a href="mailto:info@wopin.org"
          aria-label="Email"
          className="text-white transition-colors hover:text-orange-400"
        >
          <Mail size={18} />
        </a>

        <button
          onClick={() => window.print()}
          aria-label="Print"
          className="text-white transition-colors hover:text-orange-400"
        >
          <Printer size={18} />
        </button>
      </div>

      <OrganizationalStructure />

      <OurHistory />

      <Gallery />

      <Footer />
    </div>
  );
}