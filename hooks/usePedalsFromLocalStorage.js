import { useEffect, useState } from "react";

export const usePedalsFromLocalStorage = () => {
  const [pedals, setPedals] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem("pedals");
    if (storedData) {
      const parsedData = JSON.parse(storedData);
      setPedals(parsedData);
    }
  }, []);

  const savePedals = (data) => {
    localStorage.setItem("pedals", JSON.stringify(data));
    setPedals(data);
  };

  return { pedals, savePedals };
};
