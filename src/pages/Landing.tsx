import React from "react";
import FAQContainer from "../features/faq/FAQContainer";
import Feature from "../features/feature/Feature";
import Footer from "../features/footer/Footer";
import Header from "../features/header/Header";
import JumbotronContainer from "../features/jumbotron/JumbotronContainer";
import OptForm from "../features/opt-form/OptForm";

export default function LandingPage() {
  return (
    <>
      <Header>
        <Feature
          title="Unlimited movies, TV shows, and more."
          subTitle="Watch anywhere. Cancel anytime."
        >
          <OptForm />
        </Feature>
      </Header>
      <JumbotronContainer />
      <FAQContainer />
      <Footer />
    </>
  );
}
