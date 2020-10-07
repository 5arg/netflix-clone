import React from "react";
import { Container, Title, SubTitle } from "./styles/feature";

type FeaturePropsType = {
  title: string;
  subTitle: string;
  children: React.ReactNode;
};

export default function Feature({
  title,
  subTitle,
  children,
}: FeaturePropsType) {
  return (
    <Container>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      {children}
    </Container>
  );
}
