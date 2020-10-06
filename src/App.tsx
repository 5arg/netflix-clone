import React from "react";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import LandingPage from "./features/landing-page/LandingPage";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <LandingPage />
    </>
  );
}
