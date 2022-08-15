import React, { useRef } from "react";
import styles from "../styles/app.module.css";

const Todo: React.FC<{ onAdd: (text: string) => void }> = ({ onAdd }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
    const enteredText = inputRef.current!.value;
    onAdd(enteredText);
  };
  return (
    <div className={styles.content}>
      <h1>MY TODO LIST</h1>
      <div className={styles.form}>
        <input
          type="text"
          id="todo-text"
          placeholder="add task..."
          ref={inputRef}
          className={styles.input}
        />

        <button
          type="submit"
          onClick={handleSubmit}
          className={styles.add__button}
        >
          Add Todo
        </button>
      </div>
    </div>
  );
};

export default Todo;
