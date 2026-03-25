import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import { TempoDevtools } from "tempo-devtools";
TempoDevtools.init();

const basename = import.meta.env.BASE_URL;

// Add this to help with debugging SEO issues
if (typeof window !== "undefined") {
  window.addEventListener("load", () => {
    console.log("SEO Debug: Document title is", document.title);
    console.log(
      "SEO Debug: Meta description is",
      document
        .querySelector('meta[name="description"]')
        ?.getAttribute("content"),
    );
  });
}

import { ThemeProvider } from "./contexts/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <HelmetProvider>
        <BrowserRouter basename={basename}>
          <App />
        </BrowserRouter>
      </HelmetProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
