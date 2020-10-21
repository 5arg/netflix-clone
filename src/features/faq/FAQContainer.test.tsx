import React from "react";
import { render, fireEvent, wait } from "@testing-library/react";
import FAQContainer from "./FAQContainer";

describe("FAQContainer", () => {
  it("renders the FAQContainer with populated data", () => {
    const { getByText } = render(<FAQContainer />);

    expect(getByText("Frequently Asked Questions")).toBeTruthy();
    expect(getByText("What is Netflix?")).toBeTruthy();
    expect(getByText("How much does Netflix cost?")).toBeTruthy();
    expect(getByText("Where can I watch?")).toBeTruthy();
    expect(getByText("How do I cancel?")).toBeTruthy();
    expect(getByText("What can I watch on Netflix?")).toBeTruthy();
  });

  it("opens and closes the FAQContainer component", async () => {
    const { queryByText, findByText, getByText, debug } = render(
      <FAQContainer />
    );

    const whatIsNetflixBodyText =
      "Netflix is a streaming service that offers a wide variety of award-winning TV programmes, films, anime, documentaries and more – on thousands of internet-connected devices. You can watch as much as you want, whenever you want, without a single advert – all for one low monthly price. There's always something new to discover, and new TV programmes and films are added every week!";

    expect(queryByText(whatIsNetflixBodyText)).toBeFalsy();
    fireEvent.click(getByText("What is Netflix?"));
    let bodyText;
    await wait(() => {
      bodyText = getByText(whatIsNetflixBodyText);
    });
    expect(bodyText).toBeTruthy();
    fireEvent.click(getByText("What is Netflix?"));
    await wait(() => {
      bodyText = queryByText(whatIsNetflixBodyText);
    });
    expect(bodyText).toBeFalsy();
  });
});
