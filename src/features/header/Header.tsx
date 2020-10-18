import React, { ReactElement, ReactNode } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Background, Logo, Container, ButtonLink } from "./styles/header";
import * as ROUTES from "../../constants/routes";
import logo from "../../logo.svg";
import { ProfileType } from "../../pages/Browse";
import { SlidesProvider } from "../../context/SlidesContext";
import BrowseHeader from "./BrowseHeader";

type HeaderPropsType = {
  children?: ReactNode;
  hasBackground?: boolean;
  src?: string;
  user?: ProfileType;
};

export default function Header({
  children,
  hasBackground = true,
  src,
  user,
}: HeaderPropsType): ReactElement {
  const location = useLocation();

  return hasBackground ? (
    <Background
      dontShowOnSmallViewPort={location.pathname === ROUTES.BROWSE}
      src={src}
    >
      {location.pathname === ROUTES.HOME && (
        <Container>
          <Logo src={logo} alt="Netflix" />
          <ButtonLink to={ROUTES.SIGN_IN}>Sign In</ButtonLink>
        </Container>
      )}
      {location.pathname === ROUTES.BROWSE && (
        <SlidesProvider>
          <BrowseHeader user={user} children={children} />
        </SlidesProvider>
      )}
    </Background>
  ) : (
    <>
      <Container>
        <RouterLink to={ROUTES.HOME}>
          <Logo src={logo} alt="Netflix" />
        </RouterLink>
      </Container>
      {children}
    </>
  );
}
