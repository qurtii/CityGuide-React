import { useState } from "react";
import { useFiltres } from "../../../../hooks/useFiltres";
import styles from "./style.module.scss";
import { usePosts } from "../../../../hooks/usePosts";

export function Options({ selectedFilters, onFilterChange, onSortChange }) {
  const { data, isSuccess } = usePosts();
  const { uniqueFilters } = useFiltres(isSuccess, data);
  const [selectedSort, setSelectedSort] = useState(null);

  const handleCheckboxChange = (filter) => {
    const updatedFilters = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    onFilterChange(updatedFilters);
  };

  const handleSortChange = (sortType) => {
    if (selectedSort === sortType) {
      setSelectedSort(null);
      onSortChange(null);
    } else {
      setSelectedSort(sortType);
      onSortChange(sortType);
    }
  };

  return (
    <div className={styles.second__functionalList}>
      <p className={styles.second__functionalTitle}>Сортировка</p>
      <div className={styles.second__functionalSorting}>
        {selectedSort === null ? (
          <>
            <div
              className={styles.second__functionalSorting1}
              onClick={() => handleSortChange("popularity")}
            >
              <div
                className={`${styles.second__functionalSortcb} ${
                  selectedSort === "popularity" ? styles.active : ""
                }`}
              />
              <label className={styles.second__functionalText}>
                Популярность
              </label>
            </div>
            <div
              className={styles.second__functionalSorting2}
              onClick={() => handleSortChange("name_asc")}
            >
              <div
                className={`${styles.second__functionalSortcb} ${
                  selectedSort === "name_asc" ? styles.active : ""
                }`}
              />
              <label className={styles.second__functionalText}>От А до Я</label>
            </div>
            <div
              className={styles.second__functionalSorting3}
              onClick={() => handleSortChange("name_desc")}
            >
              <div
                className={`${styles.second__functionalSortcb} ${
                  selectedSort === "name_desc" ? styles.active : ""
                }`}
              />
              <label className={styles.second__functionalText}>От Я до А</label>
            </div>
          </>
        ) : (
          <div
            className={styles.second__functionalSortingSelected}
            onClick={() => handleSortChange(selectedSort)}
          >
            <div className={styles.second__functionalSorting1}>
              <div
                className={`${styles.second__functionalSortcb} ${styles.active}`}
              />
              <label className={styles.second__functionalText}>
                {selectedSort === "popularity"
                  ? "Популярность"
                  : selectedSort === "name_asc"
                    ? "От А до Я"
                    : "От Я до А"}
              </label>
            </div>
          </div>
        )}
      </div>

      <p className={styles.second__functionalTitle}>Фильтрация</p>
      <div className={styles.second__functionalFilters}>
        {uniqueFilters.map((filter) => (
          <div
            className={styles.second__functionalFilter}
            id={filter.type}
            key={filter}
          >
            <input
              type="checkbox"
              id={filter}
              checked={selectedFilters.includes(filter)}
              onChange={() => handleCheckboxChange(filter)}
            />
            <label htmlFor={filter}>{filter}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
