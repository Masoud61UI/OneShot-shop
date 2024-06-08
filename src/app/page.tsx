import Container from "@/components/container/Container";
import HomeBanner from "@/components/homeSections/HomeBanner";
import HomeHeader from "@/components/homeSections/HomeHeader";
import BestSellers from "@/components/homeSections/BestSellers";
import OurFeature from "@/components/homeSections/OurFeature";
import LatestProducts from "@/components/homeSections/LatestProducts";
import AboutUs from "@/components/homeSections/AboutUs";

export default async function Home() {
  return (
    <main>
      <Container>
        <section>
          <div className="text-[#fff] pt-6">
            <HomeHeader />
            <OurFeature />
          </div>
        </section>

        <section>
          <BestSellers />
        </section>

        <section>
          <HomeBanner />
        </section>

        <section>
          <LatestProducts />
        </section>

        <section>
          <AboutUs />
        </section>
      </Container>
    </main>
  );
}
