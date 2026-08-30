import Image from "next/image";

const aims = [
  "To reach women with the good news of Jesus Christ.",
  "To raise up women from every nation with a primary aim of reaching others with the gospel of the Lord Jesus.",
  "To help women fulfill their God given purpose.",
  "To minister to the spiritual, physical and psychological needs of women.",
  "To encourage women to walk in the power of the Holy Spirit.",
  "To raise up praying women who knows what it means to fast, pray and wait in the Lord at all times. Women who rule through prayer.",
  "To equip, disciple and mentor women for ministry.",
  "To minister healing, deliverance and counseling to women in need.",
  "To help raise strong marriages and homes based on the Word of God.",
  "To educate and rehabilitate underprivileged women.",
];

const OurHistory = () => {
  return (
    <section className="w-full bg-[#3d2a0f] px-6 py-16">
      <div className="mx-auto max-w-3xl">
        {/* Logo + Heading */}
        <div className="flex items-start gap-4">
          <div className="relative h-14 w-14 flex-shrink-0 overflow-hidden">
            <Image
              src="/header2.jpg"
              alt="WOPIN Logo"
              fill
              className="object-cover"
            />
          </div>

          <div>
            <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
              Our History
            </h2>
            <p className="mt-2 text-justify leading-relaxed text-gray-200">
              Women of Purpose International Network (WOPIN) is a registered
              non-profit Christian organization. The organization was started
              in 1999 by Rev Stella Ebegbuna. Due to the volume of
              appointments for counseling that Rev Stella, was getting and
              invitations from different places coming her to speak to
              women, she prayed about what to do and the Lord Jesus put a
              burden and a vision in her heart to raise up women who will
              help to raise up and mentor other women.
            </p>
          </div>
        </div>

        {/* Remaining history paragraphs */}
        <div className="mt-6 space-y-6 leading-relaxed text-gray-200">
          <p>
            She shared the vision with her husband and then with members of
            the church where she congregation. The first breakfast meeting
            of Women of Purpose was held in Lagos, Nigeria in March 1999. It
            was a huge success and several women indicated their desire to
            be a part of the vision.
          </p>

          <p>
            The name was changed to Women of Purpose International network
            in 2006 due to the fact that other women ministries were known
            by the previous name. Since then the organization has spread and
            WOPIN members are now in several nations.
          </p>

          <p>
            With over 20 years experience in Christian service; Rev Stella is
            a seasoned handmaiden of the Lord Jesus with a strong passion for
            prayer, reaching the unsaved, raising up leaders, and mentoring
            women from every sphere of life. She delights in seeing people
            reach their full potential in God and believes strongly that
            everyone is valuable.
          </p>

          <p>
            Rev Stella Ebegbuna is also the Vice President of Firebrand
            International Gospel Missions and Vice President of Tree of Life
            International Churches. She along with her husband, Apostle John
            Ebegbuna has apostolic oversight over several churches which they
            have planted call over Africa.
          </p>
        </div>

        {/* Our Name */}
        <h2 className="mt-12 text-2xl font-extrabold text-white sm:text-3xl">
          Our Name
        </h2>
        <div className="mt-6 space-y-6 leading-relaxed text-gray-200">
          <p>
            The name Women of Purpose International Network reflects the
            purpose of this international, interdenominational Women&apos;s
            organization.
          </p>

          <p>
            A Woman of Purpose is a woman who has a new birth relationship
            with Jesus and through this relationship she is able to find her
            true identity and worth. A Woman who because of who she is in
            Christ is committed to her God given mandate.
          </p>

          <p>
            The name of the ministry is taken from the story of Esther.
            &ldquo;......who knoweth thou art come to the kingdom for such a
            time as this.&rdquo; (Esther 4:14) Esther was a Jewess (A child
            of God based on covenant relationship) in a strange land. She got
            to the highest post obtainable to a woman in her days (married to
            the king of Babylon), a woman of prayer and action. She was ready
            to risk all to fulfill her God given goal and objective. She
            allowed herself to be used of the Lord to turn around the
            captivity of His people.
          </p>

          <p>
            Secondly, the word &lsquo;Network&rsquo; reflects our basic
            organizational structure. We are women of many cultures, races
            and denominations joined together by our commitment to a
            specific purpose. Networking brings the Body of Christ together,
            breaking down barriers of denominations, racism, economics, etc.
            The body, working together with all of its different members,
            with the local churches leading the way, creates a synergy that
            can accomplish outreach and discipleship effectively in each of
            our communities.
          </p>

          <p>
            Praying together, fellow-shipping with one another, encouraging
            each other, and sharing resources provides a strong basis for
            cooperative outreach. As the Body of Christ comes together to
            accomplish the Great Commission, God blesses our unity (John
            17).
          </p>

          <p>
            The Women of Purpose International Network membership is open to
            women of eighteen years and above.
          </p>
        </div>

        {/* Aims and Objectives */}
        <h2 className="mt-12 text-2xl font-extrabold text-white sm:text-3xl">
          Our Aims and Objectives
        </h2>
        <ul className="mt-6 list-disc space-y-3 pl-6 leading-relaxed text-gray-200">
          {aims.map((aim, index) => (
            <li key={index}>{aim}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default OurHistory;