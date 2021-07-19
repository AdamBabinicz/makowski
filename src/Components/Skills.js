import React from "react";
import styled from "styled-components";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ProgressBar from "./ProgressBar";

function Skills() {
  return (
    <SkillsStyled>
      <Title title={"Aukcje"} span={"aukcje"} />
      <InnerLayout>
        <div className="skills">
          <ProgressBar
            title={"Dzieci i zwierzęta (Jardin d’acclimatation, 1928)"}
            width={"70%"}
            text={"3 800 000 zł"}
          />
          <ProgressBar
            title={"Latawce (Les cerfs-volants, 1928)"}
            width={"35%"}
            text={"1 900 000 zł"}
          />
          <ProgressBar
            title={"Grupa dzieci z koszykiem owoców, 1925"}
            width={"30%"}
            text={"1 100 000 zł"}
          />
          <ProgressBar
            title={
              "Dziewczynka z kapeluszem i kwiatami (Jeune fille au chapeau et fleurs, 1925)"
            }
            width={"27%"}
            text={"850 000 zł"}
          />
          <ProgressBar
            title={"Siedząca dziewczyna z warkoczykami (Petite Fille, 1909)"}
            width={"25%"}
            text={"700 000 zł"}
          />
          <ProgressBar
            title={"Rodzinka (La petite famille, 1929)"}
            width={"15%"}
            text={"300 000 zł"}
          />
          <ProgressBar
            title={"Chłopiec z ptaszkami (Petit garçon, 1927)"}
            width={"13%"}
            text={"250 000 zł"}
          />
          <ProgressBar
            title={"Pejzaż z Normandii, 1926-27"}
            width={"7%"}
            text={"95 000 zł"}
          />
        </div>
      </InnerLayout>
    </SkillsStyled>
  );
}

const SkillsStyled = styled.section`
  .skills {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-row-gap: 2rem;
    grid-column-gap: 3rem;

    @media screen and (max-width: 678px) {
      grid-template-columns: 1fr;
    }
  }
`;

export default Skills;
