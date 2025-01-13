import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const getData = async () => {
    return axios.get("https://672b185d976a834dd02595f5.mockapi.io/cards");
};

export function usePosts(isEnable) {
      
    const { data, error, isLoading, isError, isSuccess } = useQuery({
        queryKey: ["posts"],
        queryFn: getData,
        select: (data) => data.data,
        enabled: isEnable
    });

    return ({ data, error, isLoading, isError, isSuccess })
}