import React, { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import styles from "./styles/app.module.css";

const App: React.FC = () => {
  const [todos, setTodos] = useState<{ id: string; text: string }[]>([]);

  const todoAddHandler = (text: string) => {
    setTodos([...todos, { id: Math.random().toString(), text: text }]);
  };

  const handleRemove = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <AddTodo onAdd={todoAddHandler} />
        <TodoList items={todos} removeItem={handleRemove} />
      </div>
    </div>
  );
};

export default App;
