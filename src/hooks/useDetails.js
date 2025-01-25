import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useEffect } from "react";

export function useDetails(id) {
  const getData = async () => {
    return axios.get(`https://672b185d976a834dd02595f5.mockapi.io/cards/${id}`);
  };

  const {
    data: detailsData,
    isError: detailsError,
    isLoading: isDetailsLoading,
  } = useQuery({
    queryKey: ["detailsData", id],
    queryFn: getData,
    select: (response) => response.data,
  });

  return {
    data: detailsData,
    isError: detailsError,
    isLoading: isDetailsLoading,
  };
}
