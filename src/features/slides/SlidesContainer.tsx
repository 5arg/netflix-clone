import Fuse from "fuse.js";
import React, { useState, useEffect } from "react";
import { useSlides } from "../../context/SlidesContext";
import useContent from "../../hooks/useContent";
import selectionFilter from "../../utils/selectionFilter";
import Player from "../player/Player";
import Slide from "./Slide";
import {
  Group,
  Container,
  Title,
  Entities,
  Feature,
  Content,
  FeatureTitle,
  FeatureText,
  FeatureClose,
  Maturity,
} from "./styles/slide";

export default function SlidesContainer() {
  const [showPlayer, setShowPlayer] = useState<boolean>(false);
  const {
    slidesType,
    setFeaturedSlide,
    featuredSlide,
    searchTerm,
  } = useSlides();
  const { series } = useContent("series");
  const { films } = useContent("films");
  const [slides, setSlides] = useState<{ title: string; data: any[] }[]>([]);

  useEffect(() => {
    if (searchTerm && searchTerm.length > 3) {
      setSlides((slides) =>
        new Fuse(slides, {
          keys: ["data.description", "data.title", "data.genre"],
        })
          .search(searchTerm)
          .map(({ item }) => item)
      );
    } else {
      setSlides(selectionFilter({ series, films })[slidesType]);
    }
  }, [series, films, slidesType, searchTerm]);

  useEffect(() => {
    setSlides(selectionFilter({ series, films })[slidesType]);
  }, [slidesType, series, films]);

  return (
    <Group flexDirection="column">
      {slides &&
        slides.map((slideItem: any, index: any) => (
          <Container key={index}>
            <Title>{slideItem.title}</Title>
            <Entities>
              {slideItem.data.map((item: any) => (
                <Slide item={item} key={item.title} />
              ))}
            </Entities>

            {featuredSlide !== null &&
            featuredSlide.genre === slideItem.title.toLowerCase() ? (
              <Feature
                src={`/images/${slidesType}/${featuredSlide.genre}/${featuredSlide.slug}/large.jpg`}
              >
                <Content>
                  <FeatureTitle>{featuredSlide.title}</FeatureTitle>
                  <FeatureText fontWeight="normal">
                    {featuredSlide.description}
                  </FeatureText>
                  <FeatureClose onClick={() => setFeaturedSlide(null)}>
                    <img src="/images/icons/close.png" alt="Close" />
                  </FeatureClose>
                  <Group
                    margin="30px 0"
                    flexDirection="row"
                    alignItems="center"
                  >
                    <Maturity rating={featuredSlide.maturity}>
                      {featuredSlide.maturity < 12
                        ? "PG"
                        : featuredSlide.maturity}
                    </Maturity>
                    <FeatureText fontWeight="bold">
                      {featuredSlide.genre.charAt(0).toUpperCase() +
                        featuredSlide.genre.slice(1)}
                    </FeatureText>
                  </Group>
                  <Player
                    showPlayer={showPlayer}
                    setShowPlayer={setShowPlayer}
                    src="videos/bunny.mp4"
                  />
                </Content>
              </Feature>
            ) : null}
          </Container>
        ))}
    </Group>
  );
}
