"use client";

import { useReducer, useState } from "react";

// Esse é um exemplo básico de increment e decrement

// const reducer = (state: any, action: any) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state.counter + 1,
//       };
//     case "decrement":
//       return {
//         counter: state.counter - 1,
//       };
//     default:
//       return state;
//   }
// };

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "add-task":
      return {
        // Convenção sempre retornar o state
        ...state,
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
        tasksCount: state.tasksCount + 1,
      };
    case "toggle-task":
      return {
        ...state,
        tasks: state.tasks.map((item: any, index: number) =>
          index === action.payload
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };

    default:
      return state;
  }
};

export default function useReduccer() {
  const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0 });
  const [inputValue, setInputValue] = useState("");
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <input
        value={inputValue}
        className="border-2"
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
      />
      <button
        onClick={() => {
          // É CONVENSÃO PASSAR COMO PAYLOAD
          dispatch({ type: "add-task", payload: inputValue });
          setInputValue("");
        }}
      >
        Adicionar
      </button>

      {state.tasks.map((task: any, index: number) => {
        return (
          <p
            style={{
              textDecoration: task.isCompleted ? "line-through" : "none",
            }}
            onClick={() => dispatch({ type: "toggle-task", payload: index })}
            key={index}
          >
            {task.name}
          </p>
        );
      })}
      {/* <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button> */}
    </div>
  );
}
