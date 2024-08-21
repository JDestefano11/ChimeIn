import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AppContextProvider from "./context/AppContext.jsx";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </HashRouter>
);
