import { useEffect, useState } from "react";
import { GetDataMarvel } from "../helpers/GetDataMarvel";

export const UseFetchMarvel = (tipo, offset, limit, name) => {
  const [results, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [total, setTotal] = useState();

  const getData = async () => {
    {
      setIsLoading(true);
    }
    const { results, total } = await GetDataMarvel(tipo, offset, limit, name);
    setResult(results);
    setTotal(total);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [tipo, offset, limit, name]);

  return { results, isLoading, total };
};
