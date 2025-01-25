import styles from "./style.module.scss";

export function ModalWindow({ closeModal }) {
  return (
    <>
      <div className={styles.main__modal} id="modal">
        <div className={styles.main__modalWindow}>
          <div className={styles.main__modalHeader}>
            <h1 className={styles.main__modalTtitle}>Связаться с нами</h1>
            <span onClick={closeModal} className={styles.main__modalClose}>
              &times;
            </span>
          </div>
          <form action="" className={styles.main__modalForm}>
            <div className={styles.main__modalFio}>
              <div className={styles.main__modalFio1}>
                <p className={styles.main__modalText}>Фамилия</p>
                <input
                  type="text"
                  className={styles.main__modalFioInput}
                  placeholder="Иванов"
                  name="firstName"
                />
              </div>
              <div className={styles.main__modalFio2}>
                <p className={styles.main__modalText}>Имя</p>
                <input
                  type="text"
                  className={styles.main__modalFioInput}
                  placeholder="Иван"
                  name="lastName"
                />
              </div>
            </div>
            <div className={styles.main__modalTel}>
              <p className={styles.main__modalText}>Номер телефона</p>
              <input
                id="phone"
                className={styles.main__modalInput}
                type="text"
                name="phoneNumber"
                placeholder="+7(999)-999-99-99"
              />
            </div>

            <div className={styles.main__modalEmail}>
              <p className={styles.main__modalText}>Электронная почта</p>
              <input
                className={styles.main__modalInput}
                type="email"
                placeholder="example@gmail.com"
                name="email"
              />
            </div>
            <input
              type="text"
              className={styles.main__modalSubtext}
              placeholder="Введите что-нибудь..."
              name="message"
            />

            <button className={styles.main__modalSend} type="submit">
              Отправить
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
