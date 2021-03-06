import React from "react";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders the Footer with populated data", () => {
    const { getByText } = render(<Footer />);

    expect(getByText("Questions? Contact us.")).toBeTruthy();
    expect(getByText("FAQ")).toBeTruthy();
    expect(getByText("Investor Relations")).toBeTruthy();
    expect(getByText("Ways to Watch")).toBeTruthy();
    expect(getByText("Corporate Information")).toBeTruthy();
    expect(getByText("Netflix Originals")).toBeTruthy();
  });
});
