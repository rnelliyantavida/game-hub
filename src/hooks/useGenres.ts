import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";

interface Genre{
    id: number;
    name: string;
}
interface FetchGenreResponse{
    count: number;
    results: Genre[];
}
const useGenres = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoader] = useState(false);
    useEffect(() => {
      const controller = new AbortController();
      setLoader(true);
      apiClient
        .get<FetchGenreResponse>("/genres", { signal: controller.signal })
        .then((res) => {
            setGenres(res.data.results)
            setLoader(false)})
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message)
        setLoader(false)});
       return () => controller.abort();
    }, []);

    return { genres, error, isLoading };
}

export default useGenres;