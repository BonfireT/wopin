import Header from "@/components/header";
import Hero from "@/components/hero";
import Founder from "@/components/founder";
import Mission from "@/components/mission";
import Podcast from "@/components/podcast";
import Mentoring from "@/components/mentoring";
import ThreeFoldCord from "@/components/three-fold-cord";
import VideoSection from "@/components/video-section";
import Footer from "@/components/footer";
import OurHistory from "@/components/our-history";
import Gallery from "@/components/gallery";
export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 font-sans dark:bg-black">
      <Header />
      <Hero />
      <Founder />
      <Mission />
      <Podcast />
      <Mentoring />
      <ThreeFoldCord />
      <VideoSection />
      <Footer />
    </div>
  );
}