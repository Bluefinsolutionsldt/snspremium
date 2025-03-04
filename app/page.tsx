import Landing from "@/components/landing/Landing";
import SubLanding from "@/components/landing/SubLanding";
import NextSub from "@/components/landing/NextSub";
import Pricing from "@/components/landing/Pricing";
import Banner from "@/components/landing/Banner";
export default function Home() {
  return (
    <main>
      <Landing />
      <SubLanding />
      <NextSub />
      <Pricing />
      <Banner />
    </main>
  );
}
