import { createRoot } from "react-dom/client";
import App from "./App/App.tsx";
import store from "./redux/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
