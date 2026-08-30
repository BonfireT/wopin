import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

const beliefs = [
  "The Bible is the inspired and only infallible and authoritative Word of God (2 Timothy 3:16).",
  "There is one true God, eternally existent in three persons: God the Father, God the Son, and God the Holy Spirit (Deuteronomy 6:4; Matthew 28:19).",
  "In the deity of our Lord Jesus Christ, in His virgin birth, in His sinless life, in His miracles, in His vicarious and atoning death, in His bodily resurrection, in His ascension to the right hand of the Father, in His personal, future return to the earth in power and glory to rule for a thousand years (John 1:1; Matthew 1:18; Matthew 28:5-6; Revelation 20:4).",
  "We believe that the Bible is the Word of God, fully inspired and written under the inspiration of the Holy Spirit and is our rule of faith and practice.",
  "That all men everywhere are lost and face the judgments of God, and need to come to a saving knowledge of Jesus Christ through His shed blood on the cross.",
  "In the Blessed Hope, the soon return of Christ to receive His bride at His coming (Titus 2:13).",
  "Regeneration by the Holy Spirit is absolutely essential to personal salvation (Titus 3:5).",
  "We believe in Divine Healing of the human body provided through the redemptive work of Christ on the Cross in answer to believing prayer (1 Peter 2:24).",
  "The Baptism of the Holy Spirit, is given to believers who ask for it, with all the evidence manifested in the book of Acts (Acts 2:4).",
  "The Church of Jesus Christ is the universal, spiritual body of believers from every tribe, tongue, kindred and race of peoples, and is in dwelt by God through the Holy Spirit and divinely empowered to fulfill the Great Commission on earth (Ephesians 1:20-23; 1 Corinthians 12:12-14; Colossians 1:18-19; Revelation 5:9).",
  "In the sanctifying power of the Holy Spirit by whose indwelling the Christian is enabled to live a holy life (Galatians 5:16-25).",
  "In the resurrection and final judgment of both the saved and the lost, the first to everlasting life and the second to everlasting damnation (Revelation 20:11-15).",
  "In the new heavens and the new earth and the holy Jerusalem, the city of God, descending out of heaven and filled with God's glory (Revelation 21:1-2, 10).",
  "In using every modern means of communication available to us to spread the Gospel of Jesus Christ throughout the world.",
];

export default function StatementOfFaith() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="w-full bg-[#e3cfc0] px-6 py-16">
        <div className="mx-auto max-w-5xl">
          {/* Image + Heading */}
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
            <div className="relative h-56 w-full max-w-md overflow-hidden md:h-64">
              <Image
                src="/congrega.jpg"
                alt="Congregation raising hands in worship"
                fill
                sizes="(max-width: 768px) 100vw, 448px"
                className="object-cover"
              />
            </div>

            <h1 className="text-4xl font-extrabold uppercase leading-tight text-white sm:text-5xl">
              Our Statement of Faith
            </h1>
          </div>

          {/* Intro paragraph */}
          <p className="mt-10 text-lg font-bold uppercase leading-relaxed tracking-wide text-[#8B4513]">
            Women of Purpose International Network Foundational Truths,
            explains our theology and are a statement of faith - they are
            powerful, non-negotiable and guide all we say and do.
          </p>

          <p className="mt-8 text-lg font-bold uppercase tracking-wide text-[#8B4513]">
            What we believe:
          </p>

          {/* Beliefs list */}
          <ul className="mt-6 list-disc space-y-4 pl-6 text-base uppercase leading-relaxed tracking-wide text-[#8B4513]">
            {beliefs.map((belief, index) => (
              <li key={index}>{belief}</li>
            ))}
          </ul>
        </div>
      </section>

      <Footer />
    </div>
  );
}