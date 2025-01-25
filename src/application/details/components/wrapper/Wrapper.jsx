import styles from "./style.module.scss";
import views from "../../../../assets/img/views.svg";
import likes from "../../../../assets/img/likes.png";

export function Wrapper({ data }) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.main__wrapper}>
          <h1 className={styles.main__title}>{data.name}</h1>
          <div className={styles.main__stats}>
            <div className={styles.main__views}>
              <img className={styles.main__views_img} src={views} alt="img" />
              <p className={styles.main__views_count}>{data.count}</p>
            </div>
            <div className={styles.main__likes}>
              <img className={styles.main__likes_img} src={likes} alt="img" />
              <p className={styles.main__likes_count}>{data.count}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
