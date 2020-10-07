import React from "react";
import FAQContainer from "../../features/faq/FAQContainer";
import Footer from "../../features/footer/Footer";
import JumbotronContainer from "../../features//jumbotron/JumbotronContainer";

export default function LandingPage() {
  return (
    <>
      <JumbotronContainer />
      <FAQContainer />
      <Footer />
    </>
  );
}
