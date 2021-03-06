import React, { useState, createContext, useContext, ReactNode } from "react";

type State = {
  slidesType: "series" | "films";
  setSlidesType: (slidesType: "series" | "films") => void;
  featuredSlide: any | null;
  setFeaturedSlide: (featuredSlide: any | null) => void;
  searchTerm: string | null;
  setSearchTerm: (searchTerm: string | null) => void;
};

const SlidesContext = createContext<State | undefined>(undefined);

type SlidesProviderTypeProps = {
  children: ReactNode;
};

const SlidesProvider = ({ children }: SlidesProviderTypeProps) => {
  const [state, setState] = useState<State>({
    slidesType: "series",
    setSlidesType,
    featuredSlide: null,
    setFeaturedSlide,
    searchTerm: null,
    setSearchTerm,
  });

  function setSlidesType(slidesType: "series" | "films") {
    setState((old) => ({ ...old, slidesType, featuredSlide: null }));
  }

  function setFeaturedSlide(featuredSlide: any | null) {
    setState((old) => ({ ...old, featuredSlide }));
  }

  function setSearchTerm(searchTerm: string | null) {
    setState((old) => ({ ...old, searchTerm }));
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
