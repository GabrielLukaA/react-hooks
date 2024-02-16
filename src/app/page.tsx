import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState({ count: 0, theme: "light" });

  // Um hook do react não pode ser chamado condicionalmente, a quantidade de uso deve sempre ser a mesma, sendo assim invariante
  // if (count === 1){
  //   useState()
  // }

  const incrementCount = () => {
    setCount((prev) => {
      return {
        ...prev,
        count: prev.count + 1,
      };
    });
  };

  return (
    <div>
      <h1>{count.count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}
