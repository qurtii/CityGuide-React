import styles from "./style.module.scss";
import tgIcon from "../../../../assets/img/tg.png";
import vkIcon from "../../../../assets/img/vk.svg";
import ytIcon from "../../../../assets/img/youtube.svg";

export function Social() {
  return (
    <>
      <div className={styles.second}>
        <div className={styles.container}>
          <div className={styles.second__title}>Наши соцсети</div>
          <div className={styles.second__row}>
            <a href="https://vk.com/join">
              <img src={vkIcon} alt="icon" className={styles.second__icon1} />
            </a>

            <div className={styles.second__icon2Block}>
              <a href="https://web.telegram.org/">
                <img src={tgIcon} alt="icon" className={styles.second__icon2} />
              </a>
            </div>

            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
              <img src={ytIcon} alt="icon" className={styles.second__icon3} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
