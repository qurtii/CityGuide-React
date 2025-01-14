import logo from "../img/header_logo.svg";
import burger from "../img/burger.svg";

import { Link, useLocation } from "react-router-dom";

import styles from "../styles/header.module.scss";
import { useEffect, useRef, useState } from "react";

export function Header() {
  const location = useLocation();
  const [backgroundColor, setBackgroundColor] = useState("#000");
  const [homeDisplay, setHomeDisplay] = useState("none");
  const [visitDisplay, setVisitDisplay] = useState("block");
  const [firstButton, setFirstButton] = useState("КОНТАКТЫ");

  const [openBurger, setOpenBurger] = useState("none");

  useEffect(() => {
    if (location.pathname === "/") {
      setBackgroundColor("rgba(0, 0, 0, 0.66)");
      setHomeDisplay("none");
      setVisitDisplay("block");
    }
    if (location.pathname === "/contact") {
      setBackgroundColor("#111111");
      setHomeDisplay("none");
      setVisitDisplay("block");
      setFirstButton("ГЛАВНАЯ");
    }
    if (location.pathname === "/attractions") {
      setBackgroundColor("#111111");
      setHomeDisplay("block");
      setVisitDisplay("none");
    }
  }, [location.pathname]);

  return (
    <>
      <header style={{ backgroundColor }} className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.header__nav}>
            <Link to="/">
              {" "}
              <img
                src={logo}
                alt="logo"
                className={styles.header__navLogo}
              />{" "}
            </Link>
            <div
              onClick={() => setOpenBurger("flex")}
              className={styles.header__burger}
              id="open_burger"
            >
              <img src={burger} alt="burger" />
            </div>
            <ul className={styles.header__ul}>
              {/* ЗАМЕНИТЬ НА LINK */}
              <li>
                <Link
                  to={location.pathname === "/contact" ? "/" : "/contact"}
                  className={styles.header__li}
                >
                  {firstButton}
                </Link>
              </li>
              <li style={{ display: homeDisplay }}>
                <Link to="/" className={styles.header__li}>
                  ГЛАВНАЯ
                </Link>
              </li>
              <li>
                <Link
                  style={{ display: visitDisplay }}
                  to="/attractions"
                  className={styles.header__liBtn}
                >
                  ЧТО ПОСЕТИТЬ
                </Link>
              </li>
            </ul>

            <div
              style={{ display: openBurger }}
              className={styles.modal}
              id="modal_burger"
            >
              <div className={styles.modal__window}>
                <p
                  onClick={() => setOpenBurger("none")}
                  className={styles.modal__burger}
                  id="burger_close"
                >
                  &#10006;
                </p>
                <ul className={styles.modal__ul}>
                  <p className={styles.modal__title}>НАВИГАЦИЯ</p>
                  <li className={styles.modal__li}>
                    <Link to="/contact">КОНТАКТЫ</Link>
                  </li>
                  <li className={styles.modal__li}>
                    <Link to="/attractions">ЧТО ПОСЕТИТЬ</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
