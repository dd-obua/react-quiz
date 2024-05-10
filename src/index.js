import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./components/App";
import "./css/styles.css";
import { QuizProvider } from "./contexts/QuizContext";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <QuizProvider>
      <App />
    </QuizProvider>
  </StrictMode>
);
