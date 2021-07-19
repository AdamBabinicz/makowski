import React from "react";
import styled from "styled-components";
import { InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import ReviewItem from "./ReviewItem";

function ReviewsSection() {
  return (
    <ReviewsStyled>
      <Title title="Opinie" span={"opinie"} />
      <InnerLayout>
        <div className="reviews">
          <ReviewItem
            text={
              "Było w nim coś z niewinnego dziecka – jakaś świeżość, niewinność, a jednocześnie to był bardzo wykształcony człowiek. (Marcel Gromaire)"
            }
          />
          <ReviewItem
            text={
              "Makowski, prawdziwy talent malarski, jego kolor, to sama wrażliwość. (Guillaume Apollinaire)"
            }
          />
          <ReviewItem
            text={
              "Makowski sprowadza człowieka do brył i figur, ale pozostawia mu jego duszę. (Mieczysław Wallis)"
            }
          />
          <ReviewItem
            text={
              "O obrazach Tadeusza Makowskiego poeci piszą wiersze. Nie dziwię się temu. Każdy z jego obrazów jest bowiem jak wiersz, tyle w nim czystej poezji, czystego liryzmu i wzruszenia. (Ignacy Witz)"
            }
          />
          <ReviewItem
            text={
              "Jego płótna żyją przede wszystkim dziwnym światłem, które ożywia, światłem tajemniczym, feerycznym, świadczącym o mądrej technice, precyzyjnym warsztacie, o pracowitych i owocnych rozmyślaniach malarza nad wszystkimi środkami i możliwościami, nad wiecznym cudem koloru. (Roger Brielle)"
            }
          />
          <ReviewItem
            text={
              "Malarstwo Makowskiego – to dokument doskonałego zespolenia „europejskości” z polskością, to szkoła niezawodna artystycznego sumienia. (Juliusz Starzyński)"
            }
          />
          <ReviewItem
            text={
              "Pewno nie umiał bić się o swoje miejsce, nawet trudno mu było chyba z ludźmi obcować. Był pochłonięty swoim widzeniem świata, swoją poezją kameralną, której i dla której do śmierci szukał wyrazu. (Józef Czapski)"
            }
          />
          <ReviewItem
            text={
              "Zgeometryzowane formy postaci, przypominających wyciosane z drewna kukiełki, umiał nasycić ekspresją spojrzeń i gestów jak najbardziej ludzkich. Figurki Makowskiego zbudowane z kul, stożków, ostrosłupów i sześcioboków urzekają wdziękiem i poetyckim czarem. (Przemysław Trzeciak)"
            }
          />
        </div>
      </InnerLayout>
    </ReviewsStyled>
  );
}

const ReviewsStyled = styled.section`
  .reviews {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    grid-column-gap: 1rem;
    grid-row-gap: 1.8rem;
    width: 100%;
  }
`;

export default ReviewsSection;
