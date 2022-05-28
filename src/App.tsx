import LandingPage from "./pages/landing/LandingPage";
import NavBar from "./components/navbar/NavBar";

import styles from "./App.module.scss";
import { useAppSelector } from "./features/app/hooks";
import { Container } from "react-bootstrap";
import { ThemeType } from "./types/theme";

function App() {
  const { type } = useAppSelector((state) => state.theme);

  return (
    <div className={styles[`theme__${ThemeType[type]}`]}>
      <div className={styles.background}>
        <Container>
          <NavBar />
          <LandingPage />
        </Container>
      </div>
    </div>
  );
}

export default App;
