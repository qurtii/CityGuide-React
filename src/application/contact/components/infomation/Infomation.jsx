import styles from "./style.module.scss";

export function Information({ openModal }) {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <div className={styles.main__title}>Наши контакты</div>
          <div className={styles.main__row}>
            <div className={styles.main__textBlock}>
              <div className={styles.main__textAdress}>
                г. Москва, ул. Авиамоторная, д. 10
              </div>
              <div className={styles.main__textTimework}>
                <div className={styles.main__time}>
                  ПН-ПТ 9:00-17:00 СБ-ВС 9:00-15:00
                </div>
              </div>
              <div className={styles.main__numphone}>
                <div className={styles.main__phone1}>+7 (973)-230-21-22</div>
                <div className={styles.main__phone2}>+7 (906)-170-41-42</div>
              </div>
              <button
                id="open"
                className={styles.main__button}
                type="button"
                onClick={openModal}
              >
                Связаться с нами
              </button>
            </div>
            <div className={styles.main__mapBlock}>
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A9a8c464c0761f0ec82a61f0352df0dec50f76fc5049b95a2438ce5308582b6a1&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"
                frameBorder="0"
                className={styles.main__map}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
