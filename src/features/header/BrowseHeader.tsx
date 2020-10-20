import React, { useState, ChangeEvent } from "react";
import { useFirebase } from "../../context/Firebase";
import { useSlides } from "../../context/SlidesContext";
import { ProfileType } from "../../pages/Browse";
import {
  Container,
  Group,
  Logo,
  Search,
  SearchIcon,
  SearchInput,
  Profile,
  Picture,
  Dropdown,
  FeatureCallOut,
  PlayButton,
  Link,
  Feature,
  Text,
} from "./styles/header";
import logo from "../../logo.svg";

type BrowseHeaderPropsType = {
  user?: ProfileType;
};

export default function BrowseHeader({ user }: BrowseHeaderPropsType) {
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const { slidesType, setSlidesType, searchTerm, setSearchTerm } = useSlides();
  const { firebase } = useFirebase();

  const onSearchTermChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(target.value);
  };

  return (
    <>
      <Container>
        <Group>
          <Logo src={logo} alt="Netflix" />
          <Link
            onClick={() => setSlidesType("series")}
            active={slidesType === "series"}
          >
            Series
          </Link>
          <Link
            onClick={() => setSlidesType("films")}
            active={slidesType === "films"}
          >
            Films
          </Link>
        </Group>
        {user && (
          <Group>
            <Search>
              <SearchIcon onClick={() => setSearchActive((old) => !old)}>
                <img src="/images/icons/search.png" alt="Search" />
              </SearchIcon>
              <SearchInput
                active={searchActive}
                value={searchTerm || ""}
                onChange={onSearchTermChange}
                placeholder="Search films and series"
              />
            </Search>
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
          Forever alone in a crowd, failed comedian Arhur Fleck seeks connection
          as he walks the streets of Gotham City. Arthur wears two masks -- the
          one he paints for his day job as a clown, and the guise he projects in
          a futile attempt to feel like he's part of the world around him.
        </Text>
        <PlayButton>Play</PlayButton>
      </Feature>
    </>
  );
}
