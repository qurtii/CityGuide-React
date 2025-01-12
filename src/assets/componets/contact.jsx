import { Header } from './header';
import { Footer } from './footer';

import styles from '../styles/contact.module.scss';

export function Contact() {


  return (
    <>
        <Header />
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.main__title}>Наши контакты</div>
                <div className={styles.main__row}>
                    <div className={styles.main__textBlock}>
                        <div className={styles.main__textAdress}>г. Москва, ул. Авиамоторная, д. 10</div>
                        <div className={styles.main__textTimework}>
                            <div className={styles.main__time}>ПН-ПТ 9:00-17:00
                                СБ-ВС 9:00-15:00
                            </div>

                        </div>
                        <div className={styles.main__numphone}>
                            <div className={styles.main__phone1}>+7 (973)-230-21-22</div>
                            <div className={styles.main__phone2}>+7 (906)-170-41-42</div>
                        </div>
                        <button id="open" className={styles.main__button} type="button">Связаться с нами</button>
                    </div>

                    <div className={styles.main__send} id="formSend">
                        <div className={styles.main__sendBox}>
                            <p className={styles.main__sendText}>Сообщение отправлено!</p>
                        </div>
                    </div>

                    {/* modal window */}
                    <div className={styles.main__modal} id="modal">
                        <div className={styles.main__modalWindow}>
                            <div className={styles.main__modalHeader}>
                                <h1 className={styles.main__modalTtitle}>Связаться с нами</h1>
                                <span className={styles.main__modalClose}>&times;</span>
                            </div>
                            <form action="" className={styles.main__modalForm} >
                                <div className={styles.main__modalFio}>
                                    <div className={styles.main__modalFio1}>
                                        <p className={styles.main__modalText}>Фамилия</p>
                                        <input type="text" className={styles.main__modalFioInput} placeholder="Иванов" name="firstName"/>
                                    </div>
                                    <div className={styles.main__modalFio2}>
                                        <p className={styles.main__modalText}>Имя</p>
                                        <input type="text" className={styles.main__modalFioInput} placeholder="Иван" name="lastName"/>
                                    </div>
                                </div>
                                <div className={styles.main__modalTel}>
                                    <p className={styles.main__modalText}>Номер телефона</p>
                                    <input id="phone" className={styles.main__modalInput} type="text" name="phoneNumber" placeholder="+7(999)-999-99-99"/>
                                </div>
                                
                                <div className={styles.main__modalEmail}>
                                    <p className={styles.main__modalText}>Электронная почта</p>
                                    <input className={styles.main__modalInput} type="email" placeholder="example@gmail.com" name="email"/>
                                </div>
                                <input type="text" className={styles.main__modalSubtext} placeholder="Введите что-нибудь..." name="message"/>
                                
                                <button className={styles.main__modalSend} type="submit">Отправить</button>
                            </form>
                        </div>
                    </div>

                    <div className={styles.main__mapBlock}>
                        <iframe 
                            src="https://yandex.ru/map-widget/v1/?um=constructor%3A9a8c464c0761f0ec82a61f0352df0dec50f76fc5049b95a2438ce5308582b6a1&amp;width=100%&amp;height=100%&amp;lang=ru_RU&amp;scroll=true"
                            frameBorder="0"
                            width="100%"
                            height="100%"    
                        />
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.second}>
            <div className={styles.container}>
                <div className={styles.second__title}>Наши соцсети</div>
                <div className={styles.second__row}>
                    <a href="https://vk.com/join"><img src="/vk.svg" alt="icon" className={styles.second__icon1}/></a>

                    <div className="second__icon2-block">
                        <a href="https://web.telegram.org/"><img src="/tg.png" alt="icon" className={styles.second__icon2}/></a>
                    </div>

                    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"><img src="/youtube.svg" alt="icon" className={styles.second__icon3}/></a>
                </div>
            </div>
        </div>

        <Footer/>
    </>
  );
}