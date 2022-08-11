import React, { useCallback, useRef, useState } from "react";
import "./App.css";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "이상호 시청하기",
      checked: true,
    },
    {
      id: 2,
      text: "김민교 시청하기",
      checked: true,
    },
    {
      id: 3,
      text: "철구 시청하기",
      checked: false,
    },
  ]);

  //고윳값으로 사용될 id
  //ref를 사용하여 변수 담기

  const nextId = useRef(4);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos]
  );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} />
    </TodoTemplate>
  );
}

export default App;
