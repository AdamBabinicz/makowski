import React, { useState } from "react";
import styled from "styled-components";
import resume from "../img/2.png";
import PrimaryButton from "./PrimaryButton";
import Popup from "./Popup";
import img1 from "../img/16.jpg";

function ImageSection() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [state] = useState({
    title:
      "Sztuka daje mi radość i zapomnienie, zresztą tak było od samego początku.",
    img: img1,
    p: "Tadeusz Makowski jest jednym z najwybitniejszych artstów polskich 1 połowy XX wieku. Był malarzem, grafikiem i rysownikiem. W latach 1903-08 uczył się w Akademii krakowskiej u Józefa Unierzyskiego, Józefa Mehoffera i Jana Stanisławskiego; jednocześnie studiował filologię na Uniwersytecie Jagiellońskiem. W roku 1908, przez Monachium, wyjechał do Paryża, gdzie zamieszkał na stałe.",
    em: "https://niezlasztuka.net/o-sztuce/tadeusz-makowski-o-sobie-samym",
  });
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="resume image" />
      </div>
      <div className="right-content">
        <h4>
          1882 <span> - 1932</span>
        </h4>
        <p className="paragraph">
          Stopniowo moją sztuką zbliżałem się do tego, co ciekawi mnie
          najbardziej. Bo „zagadnieniem malarskim wiecznym jest forma,
          światłocień, barwa i jej harmonia, układ formy, czyli kompozycja, rytm
          linii i kształtów, płaszczyzny i ich stosunek do siebie, materia
          malarska i jej bogactwo, i inne z tym związane wartości.” A gdybym
          mógł powiedzieć coś artystom, którzy przyjdą po mnie to rzekłbym: „Nie
          bójcie się wszelkich tajemnic. Życie malarza jest życiem męczącym. Nie
          oczekujcie lekkich przyjemności. Poświęćcie wasze życie. Tam gdzie nie
          sięga wiedza innych – tam malarz staje się twórcą.”
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Imię i nazwisko</p>
            <p>Długość życia</p>
            <p>Narodowość </p>
            <p>Język </p>
            <p>Miejsca pobytu</p>
            <p>Profesja</p>
          </div>
          <div className="info">
            <p>: Józef Tadeusz Makowski</p>
            <p>: 50 lat</p>
            <p>: polska </p>
            <p>: polski, francuski </p>
            <p>: Oświęcim, Kraków, Paryż</p>
            <p>: malarz</p>
          </div>
        </div>

        <button onClick={() => setButtonPopup(true)}>
          <PrimaryButton title={"Więcej"} />
        </button>
      </div>
      <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
        <h3>{state.title}</h3>
        <br />
        <img src={state.img} alt="..." /> <br />
        <p>{state.p}</p>
        <br />
        <em>{state.em}</em>
        <br />
      </Popup>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 95%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    button {
      border: none;
    }
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;

export default ImageSection;
