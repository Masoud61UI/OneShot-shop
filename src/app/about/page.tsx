import ContentSec from "@/components/aboutSections/ContentSec";
import HeaderSec from "@/components/aboutSections/HeaderSec";
import StateSec from "@/components/aboutSections/StateSec";
import Container from "@/components/container/Container";

export default function page() {
  return (
    <Container>
      <HeaderSec />
      <StateSec />
      <ContentSec />
    </Container>
  );
}
