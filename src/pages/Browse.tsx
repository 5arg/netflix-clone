import React, { useEffect, useState } from "react";
import Header from "../features/header/Header";
import Loading from "../features/loading/Loading";
import ProfilesContainer from "../features/profiles/ProfilesContainer";

export type ProfileType = {
  profile: {
    displayName: string;
    photoURL: string;
  };
};

export default function Browse() {
  const [selectedProfile, setSelectedProfile] = useState<ProfileType | null>();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [selectedProfile]);

  return (
    <>
      {selectedProfile ? (
        loading ? (
          <Header hasBackground={false}>
            <Loading src={selectedProfile.profile.photoURL} />
          </Header>
        ) : (
          <Header src="joker1" user={selectedProfile}>
            <p>slides</p>
          </Header>
        )
      ) : (
        <Header hasBackground={false}>
          <ProfilesContainer setSelectedProfile={setSelectedProfile} />
        </Header>
      )}
    </>
  );
}
