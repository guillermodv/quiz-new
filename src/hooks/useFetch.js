import { useEffect, useState } from "react";

const useFetch = (condition, url) => {
  const [items, setItems] = useState();
  useEffect(() => {
    if (condition) {
      fetch(url)
        .then((res) => res.json())
        .then((data) => setItems(data));
    }
  }, [condition, setItems, url]);

  return { items };
};

export default useFetch;
