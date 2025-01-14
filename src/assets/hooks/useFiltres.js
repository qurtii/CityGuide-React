import { useEffect, useState } from "react";

export function useFiltres(isSuccess, data) {
  const [filters, setFilters] = useState(new Set());
  useEffect(() => {
    if (isSuccess && data) {
      const uniqFiltersType = new Set();
      data.forEach((item) => {
        uniqFiltersType.add(item.type);
      });
      setFilters(uniqFiltersType);
    }
  }, [isSuccess, data]);
  const uniqueFilters = Array.from(filters);

  return { uniqueFilters };
}
