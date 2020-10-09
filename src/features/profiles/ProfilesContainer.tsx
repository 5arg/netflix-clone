import React from "react";
import Profile from "./Profile";
import { Container, Title, List } from "./styles/profiles";
import useAuthListener from "../../hooks/useAuthListener";

type ProfilesContainerTypeProps = {
  setSelectedProfile: ({
    profile: { displayName, photoURL },
  }: {
    profile: {
      displayName: string;
      photoURL: string;
    };
  }) => void;
};

export default function ProfilesContainer({
  setSelectedProfile,
}: ProfilesContainerTypeProps) {
  const { user } = useAuthListener();
  return (
    <Container>
      <Title>Who's watching?</Title>
      <List>
        {user &&
          [user].map((item, index) => (
            <Profile
              key={index}
              user={item}
              setSelectedProfile={setSelectedProfile}
            />
          ))}
      </List>
    </Container>
  );
}
