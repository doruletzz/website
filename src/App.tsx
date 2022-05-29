import LandingPage from "./pages/landing/LandingPage";
import NavBar from "./components/navbar/NavBar";

import styles from "./App.module.scss";
import { useAppSelector } from "./features/app/hooks";
import { Container } from "react-bootstrap";
import { ThemeType } from "./types/theme";

import { Routes, Route, Navigate } from "react-router-dom";
import BlogPost from "./components/blog/BlogPost";

function App() {
  const { type } = useAppSelector((state) => state.theme);

  return (
    <div className={styles[`theme__${ThemeType[type]}`]}>
      <div className={styles.background}>
        <Container>
          <NavBar />
          <Routes>
            <Route path="/home" element={<LandingPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Routes>
        </Container>
      </div>
    </div>
  );
}

export default App;
