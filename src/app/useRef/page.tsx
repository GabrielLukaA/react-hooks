"use client";

import { useEffect, useState, useRef } from "react";

export default function useReff() {
  const [name, setName] = useState("");

  // O useRef tem como seu benefício não causar uma nova renderização na tela
  // quando algo na variável muda, diferentemente do useState()
  const renders = useRef(0);

  useEffect(() => {
    renders.current = renders.current + 1;
  });

  //Da forma abaixo teriamos um looping infinito

  // const [renders, setRenders] = useState(1)
  // useEffect(()=>{
  //   setRenders(prev => prev+1)
  //   console.log(renders)
  // })

  // Essa é uma das grnades funcionalidades e mais utiolizada do useRef, que é armazenar
  // uma tag html com facilidade, apeans indicando-a no elemento desejado

  // const inputRef = useRef<HTMLInputElement>(null);
  // console.log(inputRef.current)
  // const focusInput = () =>{
  //   inputRef?.current?.focus()
  // }

  // O useRef também pode ser utilizado para armazenar um valor anterior

  // const previousName = useRef("")
  // useEffect(()=>{
  // previousName.current = name
  // },[name])

  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <input
        value={name}
        className="border-2"
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      {/* <input ref={inputRef} value={name} className="border-2" onChange={(e) => setName(e.target.value)} type="text" /> */}
      <p>Hello! My name is {name}</p>
      {/* <p>And my name was {previousName.current}</p> */}
      <p>Renders: {renders.current}</p>
      {/* <button onClick={focusInput}>Focus Input</button> */}
    </div>
  );
}
