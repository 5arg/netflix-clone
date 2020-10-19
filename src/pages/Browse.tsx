import React, { useEffect, useState } from "react";
import { SlidesProvider } from "../context/SlidesContext";
import Footer from "../features/footer/Footer";
import Header from "../features/header/Header";
import Loading from "../features/loading/Loading";
import ProfilesContainer from "../features/profiles/ProfilesContainer";
import SlidesContainer from "../features/slides/SlidesContainer";

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
          <SlidesProvider>
            <Header src="joker1" user={selectedProfile} />
            <SlidesContainer />
            <Footer />
          </SlidesProvider>
        )
      ) : (
        <Header hasBackground={false}>
          <ProfilesContainer setSelectedProfile={setSelectedProfile} />
        </Header>
      )}
    </>
  );
}
