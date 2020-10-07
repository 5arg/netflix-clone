import React from "react";
import jumboData from "../../fixtures/jumbo.json";
import Jumbotron from "./Jumbotron";
import { Container } from "./styles/jumbotron";

export default function JumbotronContainer() {
  return (
    <Container>
      {jumboData.map((item, index) => (
        <Jumbotron key={index} item={item} />
      ))}
    </Container>
  );
}
