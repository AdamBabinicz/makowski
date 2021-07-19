import React from "react";
import { InnerLayout } from "../styles/Layouts";
import styled from "styled-components";
import Title from "./Title";
import ServiceCard from "./ServiceCard";
import img1 from "../img/9.jpg";
import img2 from "../img/8.jpg";
import img3 from "../img/13.jpg";
import img4 from "../img/12.jpg";
import img5 from "../img/10.jpg";
import img6 from "../img/5.jpg";

function ServicesSection() {
  return (
    <InnerLayout>
      <ServicesSectionStyled>
        <Title title={"Styl"} span={"styl"} />
        <div className="services">
          <ServiceCard
            image={img1}
            title={"Kwiaty przed chatą - 1900"}
            paragraph={"We wczesnych pracach był wierny swoim nauczycielom."}
          />
          <div className="mid-card">
            <ServiceCard
              image={img2}
              title={"Most na Sekwanie - 1913"}
              paragraph={
                "W Paryżu malował początkowo pod wrażeniem fresków P. C. Puvis de Chavannes'a. Poznawszy grupę kubistów z Montparnasse'u, uległ ich wpływowi."
              }
            />
          </div>
          <ServiceCard
            image={img3}
            title={"Krajobraz z Bretanii - 1914"}
            paragraph={
              "Zaproszony przez W. Ślewińskiego, spędził okres wojny w Bretanii, dokąd później wracał kilkakrotnie. Od tego czasu datuje się jego odejście od kubizmu i zwrot ku studiom z natury."
            }
          />
          <ServiceCard
            image={img4}
            title={"Zagroda w Keranquernat - 1917"}
            paragraph={
              "Malował pejzaże ze sztafażem w duchu naiwnego realizmu i podobnie stylizowane kompozycje figuralne."
            }
          />
          <ServiceCard
            image={img5}
            title={"Zima - 1918"}
            paragraph={
              "Wykorzystując i przetwarzając w poetyckiej wyobraźni wpływy dawnego malarstwa niderlandzkiego i holenderskiego, kubizmu, polskiej sztuki ludowej i współczesnych naiwnych realistów, wypracował indywidualny styl metaforyczny, emanujący lirycznym nastrojem."
            }
          />
          <ServiceCard
            image={img6}
            title={"Troje dzieci przed drogowskazem - 1930"}
            paragraph={
              "Częstym tematem jego obrazów były dzieci w scenach z życia wiejskiego, teatralnych, maskaradowych i karnawałowych, w prymitywizowanej i częściowo geometryzowanej formie. Uprawiał również grafikę (m.in. drzeworytnicze ilustracje książkowe)."
            }
          />
        </div>
      </ServicesSectionStyled>
    </InnerLayout>
  );
}

const ServicesSectionStyled = styled.section`
  .services {
    margin-top: 5rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    grid-gap: 1rem;

    @media screen and (max-width: 1000px) {
      flex-direction: column;
    }
    @media screen and (max-width: 950px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 650px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default ServicesSection;
