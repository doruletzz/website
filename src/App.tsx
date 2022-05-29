import LandingPage from "./pages/landing/LandingPage";
import NavBar from "./components/navbar/NavBar";

import styles from "./App.module.scss";
import { useAppSelector } from "./features/app/hooks";
import { Container } from "react-bootstrap";
import { ThemeType } from "./types/theme";

import { Routes, Route } from "react-router-dom";

function App() {
  const { type } = useAppSelector((state) => state.theme);

  return (
    <div className={styles[`theme__${ThemeType[type]}`]}>
      <div className={styles.background}>
        <Container>
          <NavBar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
