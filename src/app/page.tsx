import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Premise } from "@/components/Premise";
import { Overview } from "@/components/Overview";
import { FeatureEngine } from "@/components/FeatureEngine";
import { DialectMap } from "@/components/DialectMap";
import { Timeline } from "@/components/Timeline";
import { ZhaoSection } from "@/components/ZhaoSection";
import { Geography } from "@/components/Geography";
import { Culture } from "@/components/Culture";
import { ComparisonEngine } from "@/components/ComparisonEngine";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Overview />
        <FeatureEngine />
        <DialectMap />
        <Timeline />
        <ZhaoSection />
        <Geography />
        <Culture />
        <ComparisonEngine />
        <Premise />
      </main>
      <Footer />
    </>
  );
}
