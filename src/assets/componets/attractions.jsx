import { Footer } from "./footer";
import { Header } from "./header";

import styles from "../styles/attractions.module.scss";


export function Attractions(){

    return(
        <>
            <Header />
            <section className={styles.second}>
                {/* className -> buttons_slider*/}
                <p className={styles.second__back}>&larr;</p>
                <div className={styles.container} id="secondContainer">
                    <div className={styles.second__functional}>
                        <div className={styles.second__functionalHeader}>
                            <div className={styles.second__functionalSearch}>
                                <input type="text" className={styles.second__functionalInput} id="search" placeholder="Поиск"/>
                                <p className={styles.second__functionalClear}>&#10006;</p>
                            </div>
                            <img src="/sort.svg" alt="img" className={styles.second__functionalSort}/>
                        </div>
                        {/* classe second__functional-list-close */}
                        <div className={styles.second__functionalList}>
                            <p className={styles.second__functionalTitle}>Сортировка</p>
                            <div className={styles.second__functionalSorting}>
                                <div className={styles.second__functionalSorting1}>
                                    <input type="checkbox" className={styles.second__functionalSortcb}/>
                                    {/* class second__functional-text1 */}
                                    <p className={styles.second__functionalText}>Популярность</p>
                                </div>
                                <div className={styles.second__functionalSorting2}>
                                    <input type="checkbox" className={styles.second__functionalSortcb}/>
                                    {/* class second__functional-text2 */}
                                    <p className={styles.second__functionalText}>От А до Я</p>
                                </div>
                                <div className={styles.second__functionalSorting3}>
                                    <input type="checkbox" className={styles.second__functionalSortcb}/>
                                    {/* class second__functional-text3 */}
                                    <p className={styles.second__functionalText}>От Я до А</p>
                                </div>
                            </div>
                            <p className={styles.second__functionalTitle}>Фильтрация</p>
                            <div className={styles.second__functionalFilters} id="filters">
                            </div>
                        </div>
                    </div>
                    <div className={styles.second__page} id="page"></div>
                    {/* className hidden */}
                    <div className={styles.details}></div>
                    <p className={styles.second__searchNotfound}></p>
                    <span className={styles.second__loader} id="loading-indicator"></span>
                </div>
                {/* <!-- <p className="second__next buttons_slider">next</p> --> */}
            </section>
            <Footer />
        </>
    )
}