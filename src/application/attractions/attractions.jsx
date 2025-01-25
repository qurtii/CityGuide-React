import { Footer } from "../../components/footer/footer.jsx";
import { Header } from "../../components/header/header.jsx";
import styles from "./style.module.scss";
import { useEffect, useRef, useState } from "react";
import sortIcon from "../../assets/img/sort.svg";
import { Link } from "react-router-dom";
import { usePosts } from "../../hooks/usePosts.js";
import axios from "axios";
import { useInfiniteQuery } from "@tanstack/react-query";
import { Options } from "./components/options/Options.jsx";

export function Attractions() {
  const { data, isLoading, isError, isSuccess } = usePosts();
  const [visiableClear, setVisiableClear] = useState("none");
  const searchRef = useRef(null);
  const [isOptions, setIsOptions] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortType, setSortType] = useState(null);
  const [dataNow, setDataNow] = useState([]);
  const observerRef = useRef();

  useEffect(() => {
    if (isSuccess && data) {
      setDataNow(data);
    }
  }, [isSuccess, data]);

  function handleInputChange() {
    if (searchRef.current && searchRef.current.value.length >= 1) {
      setVisiableClear("block");
    } else {
      setVisiableClear("none");
    }
    setSearchQuery(searchRef.current.value);
  }

  useEffect(() => {
    if (searchRef.current) {
      searchRef.current.addEventListener("input", handleInputChange);
    }
  }, []);

  const getFiltredCards = async (page = 1) => {
    const url = new URL("https://672b185d976a834dd02595f5.mockapi.io/cards");
    url.searchParams.append("page", page);
    url.searchParams.append("limit", 4);

    if (selectedFilters.length > 0) {
      selectedFilters.forEach((filter) => {
        url.searchParams.append("type", filter);
      });
    }

    if (searchQuery) {
      url.searchParams.append("search", searchQuery);
    }

    if (sortType) {
      if (sortType === "popularity") {
        url.searchParams.append("sortBy", "popularity");
        url.searchParams.append("order", "desc");
      } else if (sortType === "name_asc") {
        url.searchParams.append("sortBy", "name");
        url.searchParams.append("order", "asc");
      } else if (sortType === "name_desc") {
        url.searchParams.append("sortBy", "name");
        url.searchParams.append("order", "desc");
      }
    }

    const response = await axios.get(url.toString(), {
      headers: { "content-type": "application/json" },
    });
    return response.data;
  };

  const {
    data: filtredData,
    isError: isFiltredError,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: ["filtredData", selectedFilters, searchQuery, sortType],
    queryFn: ({ pageParam = 1 }) => getFiltredCards(pageParam),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });

  useEffect(() => {
    if (filtredData) {
      const allData = filtredData.pages.flat();
      setDataNow(allData);
    }
    return(
      console.log("1")
    )
  }, [filtredData]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          console.log("отправляем новый запрос");
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [fetchNextPage, hasNextPage]);

  return (
    <>
      <Header />
      <section className={styles.second}>
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
                  ref={searchRef}
                />
                <p
                  style={{ display: visiableClear }}
                  className={styles.second__functionalClear}
                  tooltip="Очистить поле"
                  onClick={() => {
                    searchRef.current.value = "";
                    setVisiableClear("none");
                    setSearchQuery("");
                  }}
                >
                  &#10006;
                </p>
              </div>
              <img
                src={sortIcon}
                alt="img"
                className={styles.second__functionalSort}
                onClick={() => setIsOptions(!isOptions)}
              />
            </div>
            {isOptions && (
              <Options
                selectedFilters={selectedFilters}
                onFilterChange={(filters) => setSelectedFilters(filters)}
                onSortChange={(sortType) => setSortType(sortType)}
              />
            )}
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
                {dataNow.map((card) => (
                  <div key={card.id} style={{ cursor: "pointer" }}>
                    <Link to={`/attractions/${card.id}`}>
                      <img
                        className={styles.second__cardImg}
                        src={card.img}
                        alt={card.name}
                      />
                      <p className={styles.second__cardTitle}>{card.name}</p>
                    </Link>
                  </div>
                ))}
                <div ref={observerRef} style={{ height: "20px" }}></div>
              </ul>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
