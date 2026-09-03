"use client"
import { useState } from "react";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [aboutJesusOpen, setAboutJesusOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [ourLinksOpen, setOurLinksOpen] = useState(false);

  const aboutLinks = [
    { label: "About Us", href: "/about-us" },
    { label: "Our Founding President", href: "/founding-president" },
    { label: "Our Statement of Faith", href: "/statement-of-faith" },
  ];

  const aboutJesusLinks = [
    { label: "How to know Jesus personally", href: "/know-jesus-personally" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const ourLinks = [
    { label: "Our YouTube", href: "https://www.youtube.com/@womenofpurpose" },
    { label: "Our Facebook Page", href: "https://web.facebook.com/womenofpurposeinternationalnetwork/" },
    { label: "Tree of Life International Churches", href: "https://tolichurches.org/" },
    { label: "Our Facebook Group page", href: "https://web.facebook.com/groups/womenofpurposeint" },
  ];

  return (
    <header className="w-full sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center">
          <img src="/header2.jpg" alt="WOPIN Logo" className="h-10 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          

          <div
            className="relative"
            onMouseEnter={() => setAboutOpen(true)}
            onMouseLeave={() => setAboutOpen(false)}
          >
            <button className="text-sm font-medium text-gray-800 transition-colors hover:text-orange-600">
              About
            </button>

            {aboutOpen && (
              <div className="absolute left-0 top-full z-20 flex w-64 flex-col rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                {aboutLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-orange-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/conference"
            className="text-sm font-medium text-gray-800 transition-colors hover:text-orange-600"
          >
            Lagos Liquid Fire Conference 2027
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setAboutJesusOpen(true)}
            onMouseLeave={() => setAboutJesusOpen(false)}
          >
            <button className="text-sm font-medium text-gray-800 transition-colors hover:text-orange-600">
              About Jesus
            </button>

            {aboutJesusOpen && (
              <div className="absolute left-0 top-full z-20 flex w-64 flex-col rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                {aboutJesusLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.href}
                    className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-orange-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/bible-in-a-year"
            className="text-sm font-medium text-gray-800 transition-colors hover:text-orange-600"
          >
            Download Bible In A Year
          </Link>

          <div
            className="relative"
            onMouseEnter={() => setMoreOpen(true)}
            onMouseLeave={() => {
              setMoreOpen(false);
              setOurLinksOpen(false);
            }}
          >
            <button className="text-sm font-medium text-gray-800 transition-colors hover:text-orange-600">
              More...
            </button>

            {moreOpen && (
              <div className="absolute left-0 top-full z-20 flex w-56 flex-col rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                <div
                  className="relative"
                  onMouseEnter={() => setOurLinksOpen(true)}
                  onMouseLeave={() => setOurLinksOpen(false)}
                >
                  <button className="flex w-full items-center justify-between px-4 py-2 text-left text-sm text-gray-800 hover:bg-gray-50 hover:text-orange-600">
                    Our Links
                    <span>›</span>
                  </button>

                  {ourLinksOpen && (
                    <div className="absolute left-full top-0 z-30 flex w-64 flex-col rounded-md border border-gray-200 bg-white py-2 shadow-lg">
                      {ourLinks.map((link, index) => (
                        <a
                          key={index}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-orange-600"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>

                <Link
                  href="/prayer-ministry"
                  className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 hover:text-orange-600"
                >
                  Our Prayer Ministry
                </Link>
              </div>
            )}
          </div>
        </nav>

        <div className="flex items-center gap-4">

          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="flex flex-col gap-1 border-t border-gray-200 px-6 py-4 md:hidden">
    
          <button
            onClick={() => setAboutOpen(!aboutOpen)}
            className="flex items-center justify-between py-2 text-left text-sm font-medium text-gray-800"
          >
            About
            <span>{aboutOpen ? "▲" : "▼"}</span>
          </button>
          {aboutOpen && (
            <div className="ml-4 flex flex-col gap-1">
              {aboutLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="py-2 text-sm text-gray-700 hover:text-orange-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/conference"
            className="py-2 text-sm font-medium text-gray-800 hover:text-orange-600"
          >
            Lagos Liquid Fire Conference 2027
          </Link>

          <button
            onClick={() => setAboutJesusOpen(!aboutJesusOpen)}
            className="flex items-center justify-between py-2 text-left text-sm font-medium text-gray-800"
          >
            About Jesus
            <span>{aboutJesusOpen ? "▲" : "▼"}</span>
          </button>
          {aboutJesusOpen && (
            <div className="ml-4 flex flex-col gap-1">
              {aboutJesusLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="py-2 text-sm text-gray-700 hover:text-orange-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          )}

          <Link
            href="/bible-in-a-year"
            className="py-2 text-sm font-medium text-gray-800 hover:text-orange-600"
          >
            Download Bible In A Year
          </Link>

          <button
            onClick={() => setMoreOpen(!moreOpen)}
            className="flex items-center justify-between py-2 text-left text-sm font-medium text-gray-800"
          >
            More...
            <span>{moreOpen ? "▲" : "▼"}</span>
          </button>
          {moreOpen && (
            <div className="ml-4 flex flex-col gap-1">
              <button
                onClick={() => setOurLinksOpen(!ourLinksOpen)}
                className="flex items-center justify-between py-2 text-left text-sm text-gray-800 hover:text-orange-600"
              >
                Our Links
                <span>{ourLinksOpen ? "▲" : "▼"}</span>
              </button>
              {ourLinksOpen && (
                <div className="ml-4 flex flex-col gap-1">
                  {ourLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-2 text-sm text-gray-700 hover:text-orange-600"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              <Link
                href="/prayer-ministry"
                className="py-2 text-sm text-gray-800 hover:text-orange-600"
              >
                Our Prayer Ministry
              </Link>
            </div>
          )}
        </nav>
      )}
    </header>
  );
};

export default Header;