import React, { ReactElement, ReactNode } from "react";
import { Background, Logo, Container, ButtonLink } from "./styles/header";
import * as ROUTES from "../../constants/routes";
import logo from "../../logo.svg";
import { useLocation } from "react-router-dom";

type HeaderPropsType = {
  children?: ReactNode;
  hasBackground?: boolean;
};

export default function Header({
  children,
  hasBackground = true,
}: HeaderPropsType): ReactElement {
  const location = useLocation();
  return hasBackground ? (
    <Background dontShowOnSmallViewPort={true}>
      <Container>
        <Logo src={logo} alt="Netflix" />
        {location.pathname === ROUTES.HOME && (
          <ButtonLink to={ROUTES.SIGN_IN}>Sign In</ButtonLink>
        )}
      </Container>
      {children}
    </Background>
  ) : (
    <Container>
      <Logo />
      <ButtonLink to={ROUTES.HOME} />
    </Container>
  );
}
