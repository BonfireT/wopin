const OrganizationalStructure = () => {
  return (
    <section className="w-full bg-[#1a0f0a] px-6 py-16">
      {/* Video */}
      <div className="mx-auto flex max-w-3xl justify-center">
        <div className="aspect-video w-full overflow-hidden rounded-lg shadow-2xl">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/XsTYYTejV_4"
            title="Women of Purpose International Network Liquid Fire Conference 2025 Season 1"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </div>

      {/* Organizational structure text */}
      <div className="mx-auto mt-12 max-w-3xl text-center">
        <h2 className="text-2xl font-extrabold uppercase tracking-wide text-white sm:text-3xl">
          Our Organizational Structure
        </h2>

        <p className="mt-8 text-lg font-semibold uppercase tracking-wide text-orange-400">
          Founding President
        </p>
        <p className="mt-2 text-xl italic text-gray-300">
          Rev (Mrs.) Stella Ebegbuna
        </p>

        <p className="mt-10 text-lg font-bold uppercase tracking-wide text-orange-400">
          The International Board
        </p>
        <p className="mt-2 text-gray-300">
          The ministry is governed by an International Board of 7 persons
        </p>

        <p className="mt-10 text-lg font-bold uppercase tracking-wide text-orange-400">
          The Regional Board
        </p>
        <p className="mt-2 text-gray-300">
          The regional boards are responsible for the different continents
          where women of Purpose International operates. They are answerable
          to the International Board.
        </p>

        <p className="mt-10 text-lg font-bold uppercase tracking-wide text-orange-400">
          The National Board
        </p>
        <p className="mt-2 text-gray-300">
          The national board oversee women of purpose in the nations where
          they are and come under the care of the national board.
        </p>

        <p className="mt-10 text-lg font-bold uppercase tracking-wide text-orange-400">
          The Chapters
        </p>
        <p className="mt-2 text-gray-300">
          The Chapters of women of purpose International Network are under
          the care and oversight of the national board. The coordinator of
          the local Women of Purpose International Network Chapter must:
        </p>

        <ol className="mx-auto mt-4 max-w-xl list-decimal space-y-2 text-left text-gray-300">
          <li>
            Be a born again, Bible believing, Spirit filled woman of vision
            and purpose with a good report.
          </li>
          <li>She must be committed to the organizational mission and purpose.</li>
        </ol>

        <p className="mt-6 text-gray-300">
          Other local chapter officers are a deputy coordinator, secretary,
          treasurer and leaders of various ministry outreaches.
        </p>
      </div>
    </section>
  );
};

export default OrganizationalStructure;