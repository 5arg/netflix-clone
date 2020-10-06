import React from "react";
import { Inner, Pane, Title, SubTitle, Image, Item } from "./styles/jumbotron";

type JumbotronPropsType = {
  index: number;
  item: {
    direction: string;
    title: string;
    subTitle: string;
    image: string;
    alt: string;
  };
};

export default function Jumbotron({ index, item }: JumbotronPropsType) {
  return (
    <Item key={index}>
      <Inner direction={item.direction}>
        <Pane>
          <Title>{item.title}</Title>
          <SubTitle>{item.subTitle}</SubTitle>
        </Pane>
        <Pane>
          <Image src={item.image} alt={item.alt} />
        </Pane>
      </Inner>
    </Item>
  );
}
