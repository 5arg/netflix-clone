import React from "react";
import { Background, Logo, Container, ButtonLink } from "./styles/header";
import * as ROUTES from "../../constants/routes";
import logo from "../../logo.svg";
import OptForm from "../opt-form/OptForm";
import Feature from "../feature/Feature";

export default function Header({ hasBackground = true }) {
  return hasBackground ? (
    <Background dontShowOnSmallViewPort={true}>
      <Container>
        <Logo src={logo} alt="Netflix" />
        <ButtonLink to={ROUTES.SIGN_IN}>Sign In</ButtonLink>
      </Container>
      <Feature
        title="Unlimited movies, TV shows, and more."
        subTitle="Watch anywhere. Cancel anytime."
      >
        <OptForm />
      </Feature>
    </Background>
  ) : (
    <Container>
      <Logo />
      <ButtonLink to={ROUTES.HOME} />
    </Container>
  );
}
