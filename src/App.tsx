import styled from "styled-components";
import Card from "./components/Card/Card";
import Navbar from "./components/Navbar/Navbar";
import PlanetData from "./assets/planetsdata.json";

import Selector from "./components/Selector/Selector";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

import { PlanetDataType, Planets } from "./types";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Section = styled.section`
  width: 85%;
  margin: 5em auto;

  @media (max-width: 768px) {
    width: 95%;
  }
`;

const Grid = styled.div<{ grid?: string }>`
  gap: 1.75em;
  display: grid;
  grid-template-columns: ${(props) =>
    props.grid ? props.grid : "repeat(4, 1fr)"};
  width: 100%;
  box-sizing: border-box;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const Info = styled.div`
  line-height: 1.5em;
  font-weight: 300;
  margin: 1.5em 0;
`;

const SelectorDiv = styled.div`
  margin-top: 2em;

  @media (max-width: 768px) {
    display: none;
  }
`;

function App() {
  const hash = useLocation();
  const swiperRef = useRef<SwiperRef>(null);
  const [displayPlanet, setDisplayPlanet] = useState<PlanetDataType | null>(
    null
  );

  useEffect(() => {
    const planet = hash.pathname.slice(1) as Planets;
    if (planet) {
      setDisplayPlanet(PlanetData[planet] as PlanetDataType);
    } else {
      setDisplayPlanet(PlanetData.mercury as PlanetDataType);
    }
  }, [hash]);

  useEffect(() => {
    console.log(displayPlanet);
  }, [displayPlanet]);

  return (
    <div className="App">
      <Navbar />
      <Section>
        <Grid grid="2fr 1fr" style={{ minHeight: "80vh" }}>
          <Swiper slidesPerView={1} ref={swiperRef} className="mySwiper">
            <SwiperSlide>
              <img
                src={`/planets/${displayPlanet?.name.toLowerCase()}.svg`}
                alt={`${displayPlanet?.name}`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/planets/${displayPlanet?.name.toLowerCase()}-core.svg`}
                alt={`${displayPlanet?.name}-core`}
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={`/planets/${displayPlanet?.name.toLowerCase()}-inner.svg`}
                alt={`${displayPlanet?.name}-inner`}
              />
            </SwiperSlide>
          </Swiper>
          <div>
            <h1 style={{ fontSize: "4em" }}>{displayPlanet?.name}</h1>
            <Info>{displayPlanet?.Content}</Info>
            <span>Source : Wikipedia</span>
            <SelectorDiv>
              <Selector
                clickHandler={() => swiperRef.current?.swiper.slideTo(0)}
                id="01"
                label="Overview"
                active={swiperRef.current?.swiper.activeIndex === 0}
              />
              <Selector
                clickHandler={() => swiperRef.current?.swiper.slideTo(1)}
                id="02"
                label="Internal Structure"
                active={swiperRef.current?.swiper.activeIndex === 1}
              />
              <Selector
                clickHandler={() => swiperRef.current?.swiper.slideTo(2)}
                id="03"
                label="Surface Geology"
                active={swiperRef.current?.swiper.activeIndex === 2}
              />
            </SelectorDiv>
          </div>
        </Grid>
        <Grid>
          <Card label="ROTATION TIME" value="58.6 DAYS" />
          <Card label="REVOLUTION TIME" value="87.97 DAYS" />
          <Card label="RADIUS" value="2,439.7 DAYS" />
          <Card label="AVERAGE TEMP." value="430°C" />
        </Grid>
      </Section>
    </div>
  );
}

export default App;
