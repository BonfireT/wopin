import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";

export default function KnowJesusPersonally() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <section className="w-full bg-white px-6 py-16">
        <div className="mx-auto max-w-3xl">
          {/* Image floated left with text wrapping */}
          <div className="clear-both">
            <div className="relative float-left mr-6 mb-4 h-40 w-40 overflow-hidden border border-gray-300 sm:h-48 sm:w-48">
              <Image
                src="/know-jesus_orig.jpg"
                alt="Jesus, Do You Know Him?"
                fill
                sizes="192px"
                // className="object-cover"
              />
            </div>

            <div className="space-y-5 text-lg leading-relaxed text-gray-800">
              <p>
                A real Christian is someone who has made Jesus the Lord of
                his life and the No.1 priority.
              </p>

              <p>
                Why make Jesus your priority? Because Jesus made us his top
                priority he gave his life for us. And in exchange for our
                commitment to him, he gives us everything that really
                matters. We can&apos;t sit on the fence. Jesus himself says
                in the Bible that he will spit lukewarm or halfhearted
                followers out of his mouth! (Revelation 3:15-16).
              </p>
            </div>
          </div>

          {/* Remaining paragraphs, full width */}
          <div className="clear-both mt-6 space-y-5 text-lg leading-relaxed text-gray-800">
            <p>
              Not much room for complacency for any of us there. But why
              bother, you might say. Because we need saving. A drowning man
              would be stupid to say to the rescuer holding out a hand to
              save him, &ldquo;I&apos;ll think about putting all my trust in
              you one day&rdquo; or &ldquo;Well, I&apos;m not sure I need
              saving really, I don&apos;t know if I&apos;m going to drown or
              not, or I&apos;m not sure you are the real rescuer. I&apos;ll
              wait and see what other people say?&rdquo; But saving from
              what? Everyone has made mistakes and done wrong. All have
              sinned, says the Bible. God will not allow ANY sin into
              heaven, so people must be completely clean. But hang on a
              minute, you say, no one&apos;s perfect? So how can we ever get
              into heaven? And you&apos;re perfectly right, no one can get
              into heaven on their own merit. God does not work on a do the
              best you can basis. He doesn&apos;t weigh up our good works
              and bad works and see if the scales tip in the right
              direction. He demands that full and proper justice be done.
            </p>

            <p>
              No one in court could expect a judge to waive the sentence for
              any crime on the basis of the prisoner promising to do the
              best he can. The brilliant principle on which a holy yet
              merciful God operates is substitution. In the days of corporal
              punishment, identical twin boys attended a school in Glasgow.
              One had a weak heart, but few people knew about it. One day
              the ill twin kicked a ball through the window of the
              headmaster&apos;s office. The other twin bravely volunteered
              to go to the headmaster, taking his brother&apos;s place,
              because he knew the punishment would be severe. He received
              three painful whacks and on the third one the pain was so
              intense that he broke into tears.
            </p>

            <p>
              But he was glad because he knew he had saved his brother from
              it all. The boy became a substitute, taking his twin&apos;s
              punishment. This is what Jesus did when he died on the cross.
              He willingly allowed himself to be killed, so that we can
              live. But you must ask him to become your personal rescuer or
              Savior, otherwise the death of Christ cannot apply personally
              to you. Good medicine on a bedside table is no use to a dying
              man unless he takes it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900">
              How to become a Christian?
            </h2>

            <p>
              Following Jesus will change your life for ever, but the actual
              steps you take to begin are as easy as ABC. If you would like
              to know Jesus for yourself, be certain that your sins are
              forgiven and that one day you will go to heaven, follow these
              three easy steps, talking to God in your own words?
            </p>

            <p>
              <strong>A</strong> - Admit that you have done wrong. The Bible
              says, &ldquo;All have sinned and fall short of the glory of
              God&rdquo; (Romans 3:23).
            </p>

            <p>
              <strong>B</strong> - Believe that Jesus died so that you can be
              forgiven, and ask God to forgive you: &ldquo;God so loved the
              world that he gave his one and only Son, that whoever believes
              in him shall not perish but have eternal life&rdquo; (John
              3:16). &ldquo;If we confess our sins, he is faithful and just
              and will forgive us our sins&rdquo; (1 John 1:9).
            </p>

            <p>
              <strong>C</strong> - Commit yourself to living God&apos;s way
              from now on. Jesus said, &ldquo;Whoever follows me will never
              walk in darkness, but will have the light of life&rdquo; (John
              8:12). Following Jesus is not always an easy road, but
              it&apos;s the best decision you will ever make.
            </p>

            <p>
              In a humble prayer, ask Jesus to become your Savior today. You
              can follow these simple guidelines:
            </p>

            <blockquote className="border-l-4 border-[#8B4513] pl-4 italic text-gray-700">
              &ldquo;Lord Jesus, I need You. Thank You for dying on the cross
              for my sins. I open the door of my life and receive You as my
              Savior and Lord. Thank You for forgiving my sins and giving me
              eternal life. Take control of the throne of my life. Make me
              the kind of person You want me to be.&rdquo;
            </blockquote>

            <p>
              Does this prayer express the desire of your heart? If it does,
              I invite you to pray this prayer right now and Christ will
              come into your life, as He promised.
            </p>
          </div>

          {/* Downloadable tract */}
          <div className="mt-12 flex flex-col items-center border-t border-gray-200 pt-8 text-center">
            
              <a href="/know-jesus-personally-tract.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded bg-[#8B4513] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white transition-colors hover:bg-[#6f3610]"
            >
              Downloadable Tract
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}