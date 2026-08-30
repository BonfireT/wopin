"use client"
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire this up once the newsletter platform is decided
    console.log("Subscribe submitted:", { email, agreed });
  };

  return (
    <footer className="w-full bg-zinc-50 dark:bg-black">
      {/* Divider */}
      <div className="mx-auto h-px w-full max-w-3xl bg-gray-200" />

      {/* Main footer content */}
      <div className="border-t border-gray-200">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-10 px-6 py-12 sm:grid-cols-2">
          {/* Nav links */}
          <nav className="flex flex-col gap-3 text-gray-800">
            <a href="/about-us" className="hover:text-[#8B4513]">
              About Us
            </a>
            <a href="/founding-president" className="hover:text-[#8B4513]">
              Our President
            </a>
            <a href="/statement-of-faith" className="hover:text-[#8B4513]">
              Our Statement of Faith
            </a>
            <a href="/contact-us" className=" hover:text-[#8B4513]">
              Become a Member
            </a>
            <a href="/contact-us" className="hover:text-[#8B4513]">
              Contact Us
            </a>
            <a href="/bible-in-a-year" className="hover:text-[#8B4513]">
              Read the Bible in a Year
            </a>
          </nav>

          {/* Newsletter form */}
          <div>
            <h3 className="text-lg font-bold text-gray-900">
              Subscribe for our Newsletter
            </h3>
            <p className="mt-1 text-sm italic text-red-700">
              * Indicates required field
            </p>

            <form onSubmit={handleSubscribe} className="mt-4 flex flex-col gap-4">
              <div>
                <label htmlFor="email" className="text-xs text-gray-700">
                  Email <span className="text-red-700">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 w-full border-b border-gray-400 bg-transparent pb-1 text-sm focus:border-[#8B4513] focus:outline-none"
                />
              </div>

              <label className="flex items-start gap-2 text-xs text-gray-700">
                <input
                  type="checkbox"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  required
                  className="mt-0.5"
                />
                I agree to receiving marketing and promotional materials{" "}
                <span className="text-red-700">*</span>
              </label>

              <button
                type="submit"
                className="w-fit rounded bg-[#8B4513] px-4 py-2 text-xs font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#6f3610]"
              >
                Subscribe to Newsletter
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-2 px-6 pb-8 text-xs text-gray-600 sm:flex-row sm:items-center">
          <p>© 2026 Women of Purpose International Network</p>
          <p>
            Proudly powered by{" "}
            <span className="font-semibold underline">Undecided</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;