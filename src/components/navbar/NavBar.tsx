import { Container, Nav, Navbar, Row, Col } from 'react-bootstrap';
import { FaCloudSun, FaSun } from 'react-icons/fa';
import { Link, Navigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../features/app/hooks';
import { setTheme } from '../../features/theme/slice';
import { ThemeType } from '../../types/theme';

import LightIcon from '../../assets/light-icon.svg?component';
import BlogIcon from '../../assets/blog.svg?component';
import ResumeIcon from '../../assets/resume.svg?component';
import ProjectIcon from '../../assets/projects.svg?component';
import DarkIcon from '../../assets/dark-icon.svg?component';

import styles from './NavBar.module.scss';

const NavBar = () => {
  const { type } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  return (
    <div className={styles[`theme__${ThemeType[type]}`]}>
      <Navbar fixed='top' className={styles.navbar}>
        <Container className={styles.container}>
          <Navbar.Brand as={Link} to='/home' className={styles.brand}>
            dor-
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              target='_blank'
              href={'http://resume.dorletz.com'}
              className={styles.navlink}>
              <ResumeIcon className={styles.icon} />
              <a className={styles.text}>resume</a>
            </Nav.Link>

            <Nav.Link as={Link} to='/works' className={styles.navlink}>
              <ProjectIcon className={styles.icon} />
              <a className={styles.text}>works</a>
            </Nav.Link>

            <Nav.Link as={Link} to='/blog' className={styles.navlink}>
              <span>
                <BlogIcon className={styles.icon} />
                <a className={styles.text}>blog</a>
              </span>
            </Nav.Link>

            <Nav.Link
              onClick={() => {
                dispatch(
                  setTheme(
                    (type.valueOf() + 1) % (Object.keys(ThemeType).length / 2)
                  )
                );
              }}
              className={styles.navlink}>
              <span>
                <a className={styles.text}>{ThemeType[type]}</a>
                {type === ThemeType.default ? (
                  <LightIcon className={styles.theme_icon} />
                ) : (
                  <DarkIcon className={styles.theme_icon} />
                )}
              </span>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
