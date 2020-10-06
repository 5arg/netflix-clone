import React from "react";
import FAQContainer from "./accordion/FAQContainer";
import Footer from "./footer/Footer";
import JumbotronContainer from "./jumbotron/JumbotronContainer";

export default function LandingPage() {
  return (
    <>
      <JumbotronContainer />
      <FAQContainer />
      <Footer />
    </>
  );
}
