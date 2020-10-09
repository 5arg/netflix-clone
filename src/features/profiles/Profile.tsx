import React from "react";
import Firebase from "firebase";
import { Item, Picture, Name } from "./styles/profiles";

interface ProfileTypeProps {
  user: Firebase.User;
  setSelectedProfile: ({
    profile: { displayName, photoURL },
  }: {
    profile: {
      displayName: string;
      photoURL: string;
    };
  }) => void;
}

export default function Profile({
  user,
  setSelectedProfile,
}: ProfileTypeProps) {
  return (
    <Item
      onClick={() =>
        user.displayName &&
        user.photoURL &&
        setSelectedProfile({
          profile: {
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
        })
      }
    >
      <Picture
        src={
          user.photoURL
            ? `/images/users/${user.photoURL}.png`
            : `/images/misc/loading.gif`
        }
      />
      <Name>{user.displayName}</Name>
    </Item>
  );
}
