import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../features/app/hooks";
import { setTheme } from "../../features/theme/slice";
import { ThemeType, ITheme } from "../../types/theme";

import styles from "./NavBar.module.scss";

const NavBar = () => {
  const { type } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  return (
    <div className={styles[`theme__${ThemeType[type]}`]}>
      <Navbar className={styles.navbar} fixed="top" expand="sm">
        <Container className={styles.container}>
          <Navbar.Brand as={Link} to="/home" className={styles.brand}>
            dor-
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link as={Link} to="/about" className={styles.navlink}>
                about
              </Nav.Link>

              <Nav.Link as={Link} to="/works" className={styles.navlink}>
                works
              </Nav.Link>

              <Nav.Link as={Link} to="/blog" className={styles.navlink}>
                blog
              </Nav.Link>

              <Nav.Link
                onClick={() => {
                  dispatch(
                    setTheme(
                      (type.valueOf() + 1) % (Object.keys(ThemeType).length / 2)
                    )
                  );
                }}
                className={styles.navlink}
              >
                {ThemeType[type]}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
