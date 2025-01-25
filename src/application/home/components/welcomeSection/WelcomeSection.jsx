import styles from "./style.module.scss";

export function WelcomeSection() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.main__title}>
            Москва - столица Российской Федерации
          </div>
        </div>
      </div>
    </>
  );
}
