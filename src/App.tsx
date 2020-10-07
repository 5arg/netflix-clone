import React from "react";
import { GlobalStyles } from "./global-styles";
import "normalize.css";
import LandingPage from "./pages/landing/LandingPage";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <LandingPage />
    </>
  );
}
