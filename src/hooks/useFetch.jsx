import {
  useEffect,
  useState,
} from "react";

function useFetch(url) {

  const [data, setData] = useState([]);

  const [loading, setLoading] =
    useState(true);

  const [error, setError] =
    useState("");

  const fetchData = async () => {

    try {

      setLoading(true);
      setError("");

      const response =
        await fetch(url);

      if (!response.ok) {
        throw new Error(
          "Failed to fetch student data"
        );
      }

      const result =
        await response.json();

      setData(result);

    } catch (err) {

      setError(err.message);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return {
    data,
    loading,
    error,
    refetch: fetchData,
  };
}

export default useFetch;