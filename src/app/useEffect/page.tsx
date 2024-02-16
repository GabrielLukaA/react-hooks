"use client";

import { useEffect, useState } from "react";

export default function useEfect() {
  const [resourceType, setResourceType] = useState("posts");
  const changeResourceType = (resourceType: string) => {
    setResourceType(resourceType);
  };


  // Sem o array de dependecnais ele entende que a janela é sua dependência,
  // então sempre é executado a qualquer atualziação na tela, já com o array vázio
  // é executado apenas uma vez!
  useEffect(()=>{
console.log('render')
  },[resourceType]);

  
  return (
    <div>
      <h1>{resourceType}</h1>
      <div className="flex items-center">
        <button onClick={() => changeResourceType("posts")}>Posts</button>
        <button onClick={() => changeResourceType("comments")}>Comments</button>
        <button onClick={() => changeResourceType("todos")}>Todos</button>
      </div>
    </div>
  );
}
