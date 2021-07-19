import React from "react";
import { MainLayout, InnerLayout } from "../styles/Layouts";
import Title from "./Title";
import styled from "styled-components";
import SmallTitle from "./SmallTitle";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Crop54Icon from "@material-ui/icons/Crop54";
import ResumeItem from "./ResumeItem";

function Resume() {
  const briefcase = <AccountBalanceIcon />;
  const school = <Crop54Icon />;
  return (
    <ResumeStyled>
      <Title title={"Zarys"} span={"zarys"} />
      <InnerLayout>
        <div className="small-title">
          <SmallTitle icon={briefcase} title={"Sztuka i pieniądze"} />
        </div>
        <div className="resume-content">
          <ResumeItem
            year={"2021"}
            title={"Malarz, w którego warto zainwestować"}
            subTitle={"www.opcje24h.pl"}
            text={
              "Ceny obrazów Tadeusza Makowskiego wahają się od kilkuset tysięcy do miliona złotych. Najdroższym sprzedanym dziełem artysty był obraz pod tytułem „Przechadzka”, za który zapłacono w 2004 roku 1,1 miliona złotych. Pozostałe dzieła, które cieszyły się dużą popularnością na aukcjach to między innymi „Kominek” (795 tysięcy złotych), „Powrót ze spaceru” (500 tysięcy złotych) oraz „Mali bracia” (320 tysięcy złotych). Obrazy Makowskiego można podziwiać w zbiorach Muzeum Narodowego w Krakowie, Warszawie i Poznaniu oraz w Muzeum Śląskim w Katowicach, natomiast zakup wybranych dzieł umożliwiają co jakiś czas największe polskie domy aukcyjne, takie jak Polswiss Art lub Agra-Art."
            }
            text1={
              "Sztuka zawsze była ściśle powiązana z elitami świata. Ludzka potrzeba artystycznego spojrzenia na nasz świat zawsze była, jest i będzie jednym z fundamentów społeczeństwa kulturalnego. Ludzie kochają sztukę bo w niej odnajdujemy wartości, które są bliskie każdemu z nas. Sympatyzujemy z nonkonformizmem i odwagą podążania niezbadanymi ścieżkami, a może nawet wbrew trendom sztuki współczesnej. Dlatego wspieramy i inwestujemy w sztukę i to nie tylko dlatego, że jest to bardzo ciekawa i mądra inwestycja z interesującymi zwrotami."
            }
          />
          <ResumeItem
            year={"2016"}
            title={"Tadeusz Makowski na polskim rynku aukcyjnym"}
            subTitle={"www.antyki-polska.x25.pl"}
            text={
              "W ciągu ostatnich 20 lat na polskim rynku aukcyjnym sprzedano ponad 150 dzieł artysty, najczęściej osiągane ceny licytacji wahają się od 10 000 do 50 000 zł, ale co ciekawe niemal tyle samo sprzedano obiektów w cenie powyżej 100 000 zł. Najwięcej prac Tadeusza Makowskiego sprzedawano w okresie 1996 - 2004 – łącznie 87, ale już w 2005 roku tylko jedną. Od końca pierwszej dekady XXI wieku, liczba sprzedanych obrazów systematycznie rośnie i osiągają one średnio dość wysokie ceny, wydaje się jednak że ilość dostępnych na polskim rynku obrazów wyczerpuje się. Można też przypuszczać, że obliczone na dłuższy czas inwestycje w sztukę hamują na razie pojawianie się tych samych dzieł po raz kolejny. Pewien wyjątek stanowią: „Dzieci z lampionem i chorągiewką” (1930), trzykrotnie licytowane w domu aukcyjnym Agra Art, gdzie osiągały kolejno 177 000 zł (1998), 195 000 zł (1999) i 470 000 zł (2011). Stopa zwrotu pomiędzy drugą i ostatnią sprzedażą to ponad 150% w przeciągu 12 lat!"
            }
          />
          <ResumeItem
            year={"2014"}
            title={"Rynek sztuki pod lupą: Tadeusz Makowski"}
            subTitle={"www.rynekisztuka.pl"}
            text={
              "Wartość rocznej sprzedaży prac Makowskiego podlegała w badanym okresie znaczącym wahaniom. Na początku lat 90. wynosiła średnio około 200 tys. złotych, by w 1997 urosnąć do niemal 400 tys. złotych, a już w 1998 do 1,912 mln złotych. Potem w latach 1999-2000 sprzedaż znów wróciła do poziomu kilkuset tysięcy złotych rocznie. Absolutnie rekordowe okazały się jednak lata 2001-2004, kiedy zawarto transakcje za łączną kwotę 6,373 mln złotych. Przez cztery kolejne lata wartość rynku przekraczała znacząco milion złotych, a w roku 2003 zanotowano rekordową sprzedaż – 1,925 mln złotych. Kolejne lata to znów całkowita wartość rocznych transakcji na poziomie kilkuset tysięcy. Wyjątkiem, głównie za prawą dwóch bardzo drogich prac (patrz tabela „Najdroższe prace”) sprzedanych na jednej aukcji w Agrze okazał się rok 2011 z wynikiem 1,446 mln złotych. Łączna wartość prac Tadeusza Makowskiego na aukcjach w latach 1991-2013 wynosiła 14,5 mln złotych."
            }
          />
        </div>
        <div className="small-title u-small-title-margin">
          <SmallTitle icon={school} title={"Mało znane obrazy"} />
        </div>
        <div className="resume-content ">
          <ResumeItem
            year={"2017"}
            title={"Anemony w zielonym wazonie (1916)"}
            subTitle={
              "Galeria Malarstwa Polskiego Muzeum Okręgowego w Rzeszowie"
            }
            text={
              "Obraz „Anemony w zielonym wazonie” jest średniej wielkości; jego boki bez ramy to 44,5 cm na 36,5 cm i jest sygnowany. Oprawiony jest w stylową, ozdobną ramę pochodzącą z epoki (rama została wymieniona przez poprzedniego właściciela). Kosztował 125 tys. zł, z czego 96 tys. zł pochodziło ze środków ministra Kultury i Dziedzictwa Narodowego, a 29 tys. zł z budżetu Województwa Podkarpackiego. Został zakupiony od osoby prywatnej."
            }
          />
          <ResumeItem
            year={"2011"}
            title={"Wnętrze (1929)"}
            subTitle={"Galeria Domu Aukcyjnego Agra-Art"}
            text={
              "Według Anny Prugar, byłej starszej kustosz zbiorów sztuki współczesnej w warszawskim Muzeum Narodowym, wśród zaprezentowanych obrazów największą wartość ma 'Wnętrze', które przedstawia troje dzieci w chłopskiej chacie skąpo oświetlonej światłem sączącym się z niewielkiego okna. Obraz dobrze oddaje twórcze poszukiwania Makowskiego, który w tym czasie przechodził od miękkich form i łagodnych linii do geometryzującego, schematyzującego stylu - podkreśliła Prugar. Cena wywoławcza 'Wnętrza' wynosiła 550 tys. zł."
            }
          />
          <ResumeItem
            year={"2011"}
            title={"Piastunka z małym Jacques'em (1922)"}
            subTitle={"Galeria Domu Aukcyjnego Agra-Art"}
            text={
              "Jak powiedział Paul Stephane Manier, datę powstania 'Piastunki z małym Jacques'em' można określić z dokładnością do dnia, ponieważ trzymanym przez piastunkę dzieckiem jest liczący półtora roku syn Stephane'a Maniera, a ojciec obecnego właściciela obrazów. Cena wywoławcza wynosiła w 2011 r. - 200 tys. zł."
            }
          />
        </div>
      </InnerLayout>
    </ResumeStyled>
  );
}

const ResumeStyled = styled.section`
  .small-title {
    padding-bottom: 3rem;
  }
  .u-small-title-margin {
    margin-top: 4rem;
  }
  .resume-content {
    border-left: 2px solid var(--border-color);
  }
`;

export default Resume;
