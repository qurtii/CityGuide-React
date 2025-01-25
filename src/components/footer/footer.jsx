import styles from "./style.module.scss";
import footerLogo from "../../assets/img/white_footer.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_block}>
        <img src={footerLogo} alt="logo" className={styles.footer__logo} />
        <div className={styles.footer__row}>
          <p className={styles.footer__text1}>
            Россия, Москва, 117997,
            <br />
            ул. Авиамоторная, 19
            <br />© 2018—2024 ООО CityGuide.
          </p>
          <p className={styles.footer__text2}>
            Информация размещенная на сайте, носит справочный характер
            <br />
            <a href="#">
              {" "}
              <span>Политика конфиденциальности</span>{" "}
            </a>
          </p>
          <p className={styles.footer__text3}>
            ИП Иванов И.И
            <br />
            ИНН 918276390012
            <br />
            ОРГН 291846719387124
          </p>
        </div>
      </div>
    </footer>
  );
}
