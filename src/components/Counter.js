import React,{ useState, useEffect } from "react";

function Counter() {
const [count, setCount] = useState(0);
  useEffect(() => {
    const interval = setInterval(function () {
      setCount((prev) => prev + 1);
    }, 1000);
  }, []);
  return <p>THE COUNT: {count}</p>;
}

export default Counter;
