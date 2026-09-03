const Mission = () => {
  return (
    <section className="flex flex-col items-center bg-zinc-50 px-12 py-12 text-center dark:bg-black">
      {/* Top divider */}
      <div className="mb-8 h-px w-24 bg-gray-300" />

      {/* Heading */}
      <h2 className="text-3xl font-extrabold leading-tight text-[#8B0000] sm:text-4xl md:text-5xl px-8">
        Welcome to Women of Purpose International Network (W.O.P.I.N)
      </h2>

      {/* Mission statement */}
      <p className="mt-8 max-w-3xl text-xl italic leading-relaxed text-[#8B0000] sm:text-2xl">
        Our Mission: &ldquo;Women advancing God&apos;s Kingdom by serving Him
        in their sphere of influence&rdquo;
      </p>

      {/* Bottom divider */}
      <div className="mt-10 h-px w-full max-w-4xl bg-gray-300" />

      {/* Ticket CTA */}
      <div className="mt-8 flex flex-col items-center gap-4">
        
          <a href="https://www.eventbrite.com/e/women-of-purpose-international-network-liquid-fire-conference-2027-tickets-1556733685359"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded border border-gray-400 px-4 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-100"
        >
          Buy Tickets
        </a>

        <p className="text-2xl text-gray-800 sm:text-3xl">
          Book your free ticket to our 2027, Liquid Fire Conference
        </p>

        {/* Conference title */}
        <h3 className="text-3xl font-extrabold text-[#8B0000] sm:text-4xl">
          Lagos Liquid Fire Conference 2027
        </h3>
      </div>

      {/* Divider before welcome letter */}
      <div className="mt-10 h-px w-full max-w-4xl bg-gray-300" />

      {/* Welcome letter */}
      <div className="mt-8 max-w-3xl space-y-5 text-left text-lg leading-relaxed text-gray-800">
        <h4 className="text-xl font-bold sm:text-2xl">
          Welcome to the website of Women of Purpose International Network
          (W.O.P.I.N)
        </h4>

        <p>
          My name is Rev Stella Ebegbuna and I am the Founding President of
          Women of Purpose International Network (WOPIN).
        </p>

        <p>
          Thanks for visiting our website and seeking to know more about what
          we do. We are a Christian organization committed to reaching,
          raising, discipling and releasing women into their God given
          purpose. It is my privilege to welcome you to our website,
          introduce you to Jesus and help unwrap the gift that God has placed
          in you for His service.
        </p>

        <p>
          We will be glad to answer your written questions or speak with you
          at one of our meetings. Please feel free to contact us for more
          information via our{" "}
          
            <a href="https://www.wopin.org/contact-us.html"
            className="font-semibold underline hover:text-[#8B0000]"
          >
            contact us page
          </a>
          .
        </p>

        <p>
          May the LORD whom you seek guide and establish you into what He
          has purposed for your life in Jesus name.
        </p>

        <p>Remain Blessed.</p>

        <div>
          <p>His Handmaiden,</p>
          <p className="mt-4">Stella Ebegbuna (Rev)</p>
          <p className="text-sm text-gray-600">
            (Founding President Women of Purpose International Network)
          </p>
        </div>

        <p>Do go through our website and learn more about us.</p>
      </div>
    </section>
  );
};

export default Mission;