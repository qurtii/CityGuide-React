import styles from "./style.module.scss";

export function About({ data }) {
  return (
    <>
      <div className={styles.main__block}>
        <p className={styles.main__block_text}>{data.About[0]}</p>
        <img
          className={styles.main__block_img}
          src={data.images[0]}
          alt={data.name}
        />
      </div>
      <div className={styles.main__block}>
        <img
          className={styles.main__block_img}
          src={data.images[1]}
          alt={data.name}
        />
        <p className={styles.main__block_text}>{data.About[1]}</p>
      </div>

      <h2 className={styles.main__map_text}>{data.name} на карте</h2>
      <div className={styles.main__map}>
        <iframe src={data.Map} frameBorder="0" className={styles.main__map} />
      </div>
    </>
  );
}
