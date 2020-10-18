import React, { useState, createContext, useContext, ReactNode } from "react";

type State = {
  slidesType: "series" | "films";
  setSlidesType: (slidesType: "series" | "films") => void;
  featuredSlideId: string | null;
  setFeaturedSlideId: (featuredSlideId: string | null) => void;
};

const SlidesContext = createContext<State | undefined>(undefined);

type SlidesProviderTypeProps = {
  children: ReactNode;
};

const SlidesProvider = ({ children }: SlidesProviderTypeProps) => {
  const [state, setState] = useState<State>({
    slidesType: "series",
    setSlidesType,
    featuredSlideId: null,
    setFeaturedSlideId,
  });

  function setSlidesType(slidesType: "series" | "films") {
    setState((old) => ({ ...old, slidesType }));
  }

  function setFeaturedSlideId(featuredSlideId: string | null) {
    setState((old) => ({ ...old, featuredSlideId }));
  }
  return (
    <SlidesContext.Provider value={state}>{children}</SlidesContext.Provider>
  );
};

function useSlides() {
  const context = useContext(SlidesContext);
  if (context === undefined) {
    throw new Error("useSlides must be used within a SlidesProvider");
  }
  return context;
}

export { SlidesProvider, useSlides };
