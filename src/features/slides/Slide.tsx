import React from "react";
import { useSlides } from "../../context/SlidesContext";
import { Item, Image, Meta, SubTitle, Text } from "./styles/slide";

type SlidePropsType = {
  item: any;
};

export default function Slide({ item }: SlidePropsType) {
  const { slidesType, setFeaturedSlide } = useSlides();
  return (
    <Item key={item.id} onClick={() => setFeaturedSlide(item)}>
      <Image
        src={`/images/${slidesType}/${item.genre}/${item.slug}/small.jpg`}
      />
      <Meta>
        <SubTitle>{item.title}</SubTitle>
        <Text>{item.description}</Text>
      </Meta>
    </Item>
  );
}
