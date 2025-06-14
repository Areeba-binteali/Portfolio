import HeroSection from "@/components/hero_section";
import Image from "next/image";

export default function Home() {
  return (
    <div className="main container home">
      <HeroSection title={<>
        Crafting <span className="auraA">Web Experiences</span> That Inspire
      </>} subTitle="Hi, I'm Areeba — a passionate Frontend & WordPress Developer turning ideas into interactive, user-friendly websites." />
    </div>
  );
}
