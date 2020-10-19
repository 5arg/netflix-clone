import React from "react";
import { useSlides } from "../../context/SlidesContext";
import useContent from "../../hooks/useContent";
import selectionFilter from "../../utils/selectionFilter";
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
  const { slidesType, setFeaturedSlide, featuredSlide } = useSlides();
  const { series } = useContent("series");
  const { films } = useContent("films");
  const slides = selectionFilter({ series, films })[slidesType];

  return (
    <Group flexDirection="column">
      {slides.map((slideItem, index) => (
        <Container key={index}>
          <Title>{slideItem.title}</Title>
          <Entities>
            {slideItem.data.map((item: any) => (
              <Slide item={item} />
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
              </Content>
              <Group margin="30px 0" flexDirection="row" alignItems="center">
                <Maturity rating={featuredSlide.maturity}>
                  {featuredSlide.maturity < 12 ? "PG" : featuredSlide.maturity}
                </Maturity>
                <FeatureText fontWeight="bold">
                  {featuredSlide.genre.charAt(0).toUpperCase() +
                    featuredSlide.genre.slice(1)}
                </FeatureText>
              </Group>
            </Feature>
          ) : null}
        </Container>
      ))}
    </Group>
  );
}
