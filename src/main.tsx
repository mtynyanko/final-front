import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";

import store from "./redux/store.ts";

import App from "./app";
import { StrictMode } from "react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
