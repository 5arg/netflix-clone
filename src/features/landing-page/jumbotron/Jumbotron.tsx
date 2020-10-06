import React from "react";
import {
  Inner,
  Container,
  Pane,
  Title,
  SubTitle,
  Image,
  Item,
} from "./styles/jumbotron";
import jumboData from "../../../fixtures/jumbo.json";

export default function Jumbotron() {
  return (
    <Container>
      {jumboData.map((item, index) => (
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
      ))}
    </Container>
  );
}
