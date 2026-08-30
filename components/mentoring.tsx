import Image from "next/image";

const Mentoring = () => {
  return (
    <section className="bg-white px-6 py-16 dark:bg-black">
      <div className="mx-auto flex max-w-5xl flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
        {/* Text */}
        <p className="max-w-sm text-lg font-bold leading-snug text-gray-500">
          Raising up a Network of Women, passionate about Jesus and
          conforming into His image and fulfilling His purpose in their
          sphere of influence (Esther 4:14b)
        </p>

        {/* Image */}
        <div className="relative h-56 w-full max-w-md overflow-hidden md:h-64">
          <Image
            src="/mentorship.jpg"
            alt="Women writing at a WOPIN mentoring event"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Become a member button */}
      <div className="mx-auto mt-10 max-w-5xl">
        
          <a href="/contact-us"
          className="inline-block rounded border border-gray-400 px-4 py-2 text-xs font-bold uppercase tracking-wide text-gray-700 transition-colors hover:bg-gray-100"
        >
          Become a Member
        </a>
      </div>

      {/* Bottom heading */}
      <h2 className="mx-auto mt-16 max-w-5xl text-3xl font-extrabold text-gray-700 sm:text-4xl">
        Mentoring WOMEN is our mandate!
      </h2>
    </section>
  );
};

export default Mentoring;