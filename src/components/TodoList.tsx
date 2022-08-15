import React from "react";
import styles from "../styles/app.module.css";
interface TodoListProps {
  items: { id: string; text: string }[];
  removeItem: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  return (
    <ul>
      {props.items.map((todo) => (
        <li key={todo.id} className={styles.task}>
          <span className={styles.task__name}> {todo.text}</span>
          <button
            onClick={() => props.removeItem(todo.id)}
            className={styles.form__button}
          >
            ❌
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
