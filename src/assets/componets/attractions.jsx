import { Footer } from "./footer";
import { Header } from "./header.jsx";

import styles from "../styles/attractions.module.scss";
import { useEffect, useRef, useState } from "react";

import sortIcon from "../img/sort.svg";
import { Link } from "react-router-dom";
import { usePosts } from "../hooks/usePosts.js";
import { useFiltres } from "../hooks/useFiltres.js";

const isAuth = true;

export function Attractions() {
  const { data, error, isLoading, isError, isSuccess } = usePosts(isAuth);

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const [openFuncList, setOpenFuncList] = useState("none");

  const { uniqueFilters } = useFiltres(isSuccess, data);

  const funcList = useRef(null);

  const [firstOption, setFirstOption] = useState("block");
  const [secondOption, setSecondOption] = useState("block");
  const [thirdOption, setThirdOption] = useState("block");
  useEffect(() => {
    funcList.current.addEventListener("click", function (event) {
      // if (event.target.textContent  === 'Популярность'){
      //   secondOption === "block" ? setSecondOption("none") : setSecondOption("block")
      //   thirdOption === "block" ? setThirdOption("none") : setThirdOption("block")
      // }
    });
  }, []);

  return (
    <>
      <Header />
      <section className={styles.second}>
        {/* className -> buttons_slider*/}
        <p className={styles.second__back}>&larr;</p>
        <div className={styles.container} id="secondContainer">
          <div className={styles.second__functional}>
            <div className={styles.second__functionalHeader}>
              <div className={styles.second__functionalSearch}>
                <input
                  type="text"
                  className={styles.second__functionalInput}
                  id="search"
                  placeholder="Поиск"
                />
                <p className={styles.second__functionalClear}>&#10006;</p>
              </div>
              <img
                onClick={() =>
                  openFuncList === "none"
                    ? setOpenFuncList("block")
                    : setOpenFuncList("none")
                }
                src={sortIcon}
                alt="img"
                className={styles.second__functionalSort}
              />
            </div>
            <div
              ref={funcList}
              style={{ display: openFuncList }}
              className={styles.second__functionalList}
            >
              <p className={styles.second__functionalTitle}>Сортировка</p>
              <div className={styles.second__functionalSorting}>
                <div
                  style={{ display: firstOption }}
                  className={styles.second__functionalSorting1}
                >
                  <input
                    type="checkbox"
                    className={styles.second__functionalSortcb}
                  />
                  {/* class second__functional-text1 */}
                  <p className={styles.second__functionalText}>Популярность</p>
                </div>
                <div
                  style={{ display: secondOption }}
                  className={styles.second__functionalSorting2}
                >
                  <input
                    type="checkbox"
                    className={styles.second__functionalSortcb}
                  />
                  {/* class second__functional-text2 */}
                  <p className={styles.second__functionalText}>От А до Я</p>
                </div>
                <div
                  style={{ display: thirdOption }}
                  className={styles.second__functionalSorting3}
                >
                  <input
                    type="checkbox"
                    className={styles.second__functionalSortcb}
                  />
                  {/* class second__functional-text3 */}
                  <p className={styles.second__functionalText}>От Я до А</p>
                </div>
              </div>

              <p className={styles.second__functionalTitle}>Фильтрация</p>
              <div className={styles.second__functionalFilters}>
                {uniqueFilters.map((filter) => (
                  <div
                    className={styles.second__functionalFilter}
                    id={filter.type}
                    key={filter}
                  >
                    <input type="checkbox" id={filter} />
                    <label htmlFor={filter}>{filter}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <p
            style={{ display: isError ? "block" : "none" }}
            className={styles.fetchError}
          >
            Произошла ошибка, попробуйте ещё раз
          </p>

          <div className={styles.second__page} id="page">
            {isLoading ? (
              <div className={styles.loaderDiv}>
                <span className={styles.loader} />
              </div>
            ) : (
              <ul className={styles.second__cardList}>
                {data.map((card) => (
                  <div key={card.id} style={{ cursor: "pointer" }}>
                    <Link to="/attractions/id">
                      <img
                        className={styles.second__cardImg}
                        src={card.img}
                        alt={card.name}
                      />
                      <p className={styles.second__cardTitle}>{card.name}</p>
                    </Link>
                  </div>
                ))}
              </ul>
            )}
          </div>

          {/* className hidden */}
          <div className={styles.details}></div>
          <p className={styles.second__searchNotfound}></p>
          <span className={styles.second__loader} id="loading-indicator"></span>
        </div>
        {/* <!-- <p className="second__next buttons_slider">next</p> --> */}
      </section>
      <Footer />
    </>
  );
}
