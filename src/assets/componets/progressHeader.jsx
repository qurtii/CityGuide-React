import logo from "../img/header_logo.svg";
import burger from "../img/burger.svg";

import { Link } from "react-router-dom";

import styles from "../styles/attractions.module.scss";

export function ProgressHeader() {
  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <nav className={styles.header__nav}>
            <Link to="/">
              <img src={logo} alt="logo" className={styles.header__navLogo} />
            </Link>
            <div className={styles.header__burger} id="open_burger">
              <img src={burger} alt="burger" />
            </div>
            <ul className={styles.header__ul}>
              {/* ЗАМЕНИТЬ НА LINK */}
              <li>
                <Link to="/contact" className={styles.header__li}>
                  КОНТАКТЫ
                </Link>
              </li>
              <li>
                <Link to="/attractions" className={styles.header__liBtn}>
                  ЧТО ПОСЕТИТЬ
                </Link>
              </li>
            </ul>

            <div className={styles.modal} id="modal_burger">
              <div className={styles.modal__window}>
                <p className={styles.modal__burger} id="burger_close">
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
        <progress
          value="0"
          max="100"
          className={styles.header__readBar}
        ></progress>
      </header>
    </>
  );
}
