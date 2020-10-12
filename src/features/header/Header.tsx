import React, { ReactElement, ReactNode, useState } from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Background,
  Logo,
  Container,
  ButtonLink,
  Feature,
  FeatureCallOut,
  Text,
  Link,
  Group,
  Profile,
  Picture,
  Dropdown,
} from "./styles/header";
import * as ROUTES from "../../constants/routes";
import logo from "../../logo.svg";
import { ProfileType } from "../../pages/Browse";
import { useFirebase } from "../../context/Firebase";

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
  const [activeLink, setActiveLink] = useState<"series" | "films">("series");
  const location = useLocation();
  const { firebase } = useFirebase();
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
        <>
          <Container>
            <Group>
              <Logo src={logo} alt="Netflix" />
              <Link
                onClick={() => setActiveLink("series")}
                active={activeLink === "series"}
              >
                Series
              </Link>
              <Link
                onClick={() => setActiveLink("films")}
                active={activeLink === "films"}
              >
                Films
              </Link>
            </Group>
            {user && (
              <Group>
                <Profile>
                  <Picture src={`/images/users/${user.profile.photoURL}.png`} />
                  <Dropdown>
                    <Group>
                      <Picture
                        src={`/images/users/${user.profile.photoURL}.png`}
                      ></Picture>
                      <Link active={false}>{user.profile.displayName}</Link>
                    </Group>
                    <Group>
                      <Link
                        active={false}
                        onClick={() => firebase.auth().signOut()}
                      >
                        Sign Out
                      </Link>
                    </Group>
                  </Dropdown>
                </Profile>
              </Group>
            )}
          </Container>
          <Feature>
            <FeatureCallOut>Watch Joker Now</FeatureCallOut>
            <Text>
              Forever alone in a crowd, failed comedian Arhur Fleck seeks
              connection as he walks the streets of Gotham City. Arthur wears
              two masks -- the one he paints for his day job as a clown, and the
              guise he projects in a futile attempt to feel like he's part of
              the world around him.
            </Text>
          </Feature>
        </>
      )}
      {children}
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
