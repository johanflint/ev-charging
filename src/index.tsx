import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { App } from "./App";
import { networks } from "./data.ts";

let container = document.getElementById("app")!;
let root = createRoot(container)
root.render(
  <StrictMode>
    <App networks={networks} />
  </StrictMode>
);
