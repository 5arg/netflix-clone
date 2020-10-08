import React from "react";
import { render } from "react-dom";
import App from "./App";
import { FirebaseProvider } from "./context/Firebase";
import { GlobalStyles } from "./global-styles";

render(
  <FirebaseProvider>
    <GlobalStyles />
    <App />
  </FirebaseProvider>,
  document.getElementById("root")
);
