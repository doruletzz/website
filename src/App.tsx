import { useState } from "react";
import logo from "./logo.svg";

import { Provider } from "react-redux";
import LandingPage from "./pages/landing/LandingPage";

function App() {
  return (
    <div>
      <LandingPage />
    </div>
  );
}

export default App;
