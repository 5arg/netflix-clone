import React, { useState } from "react";
import { Container, Inner, Title } from "./styles/faq";
import faqData from "../../../fixtures/faq.json";
import FAQ from "./FAQ";

export default function FAQContainer() {
  const [toggledID, setToggledID] = useState<number | null>();
  return (
    <Container>
      <Inner>
        <Title>Frequently Asked Question</Title>
        {faqData.map((item, index) => (
          <FAQ
            key={index}
            item={item}
            setToggledID={setToggledID}
            toggled={item.id === toggledID}
          />
        ))}
      </Inner>
    </Container>
  );
}
