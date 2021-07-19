import styled from "styled-components";
import { MainLayout } from "../styles/Layouts";
import Title from "../Components/Title";
import ImageSection from "../Components/ImageSection";
import ServicesSection from "../Components/ServicesSection";
import ReviewsSection from "../Components/ReviewsSection";

function AboutPage() {
  return (
    <MainLayout>
      <AboutStyled>
        <Title title={"Tadé"} span={"Tadé"} />
        <ImageSection />
        <ServicesSection />
        <ReviewsSection />
      </AboutStyled>
    </MainLayout>
  );
}

const AboutStyled = styled.section`
  @media screen and (max-width: 1000px) {
  }
`;

export default AboutPage;
