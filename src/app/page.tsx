import Container from "@/components/container/Container";
import HomeHeader from "@/components/homeHeader/HomeHeader";
import OurFeature from "@/components/ourFeature/OurFeature";

export default async function Home() {

  return (
    <main>
      <Container>
        <section>
          <div className="text-[#fff] pt-6">
            <HomeHeader/>
            <OurFeature/>
          </div>
        </section>
      </Container>
    </main>
  );
}
