import { useState, useEffect } from "react";
const baseUrl = "https://rickandmortyapi.com/api/";

const useGet = (endpoint: string) => {
  const [data, setData] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(baseUrl + endpoint);
        if (res.ok) {
          const json = await res.json();
          if ("results" in json) {
            setData(json.results);
            setIsLoading(false);
          } else {
            setData(json);
            setIsLoading(false);
          }
        } else {
          setIsLoading(false);
          setError("Request Error");
        }
      } catch (error: any) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    getData();
  }, [endpoint]);

  return { data, isLoading, error };
};

export default useGet;
