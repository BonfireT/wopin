"use client"
import { useState } from "react";
import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function ContactUs() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this up to an email service or backend once decided
    console.log("Contact form submitted:", { firstName, lastName, email, comment });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="w-full bg-[#e3cfc0] px-6 py-16">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-start">
          {/* Image + Heading */}
          <div>
            <div className="relative h-56 w-full overflow-hidden rounded-md sm:h-64">
              <Image
                src="/contact.jpg"
                alt="WOPIN members gathering after a conference"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h1 className="text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Contact Us
            </h1>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="md:col-span-2 mt-4 max-w-xl space-y-6">
            <p className="text-sm font-semibold italic text-red-700">
              * Indicates required field
            </p>

            <div>
              <label className="text-sm font-semibold text-gray-900">
                Name <span className="text-red-700">*</span>
              </label>
              <div className="mt-2 grid grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border-b-2 border-gray-500 bg-transparent pb-1 text-gray-900 placeholder-gray-600 focus:border-[#8B4513] focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last"
                    required
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border-b-2 border-gray-500 bg-transparent pb-1 text-gray-900 placeholder-gray-600 focus:border-[#8B4513] focus:outline-none"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="email" className="text-sm font-semibold text-gray-900">
                Email <span className="text-red-700">*</span>
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full border-b-2 border-gray-500 bg-transparent pb-1 text-gray-900 focus:border-[#8B4513] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="comment" className="text-sm font-semibold text-gray-900">
                Comment <span className="text-red-700">*</span>
              </label>
              <textarea
                id="comment"
                required
                rows={5}
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="mt-2 w-full rounded border-2 border-gray-500 bg-transparent p-3 text-gray-900 focus:border-[#8B4513] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="rounded bg-[#8B4513] px-6 py-2 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#6f3610]"
            >
              Submit
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}