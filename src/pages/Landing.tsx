import React from "react";
import FAQContainer from "../features/faq/FAQContainer";
import Footer from "../features/footer/Footer";
import Header from "../features/header/Header";
import JumbotronContainer from "../features/jumbotron/JumbotronContainer";

export default function LandingPage() {
  return (
    <>
      <Header />
      <JumbotronContainer />
      <FAQContainer />
      <Footer />
    </>
  );
}
