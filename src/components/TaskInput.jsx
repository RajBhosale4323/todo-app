import { useState } from "react";
import styles from "./TaskInput.module.css";

const TaskInput = ({ onAdd }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    onAdd(text);
    setText("");
  };

  return (
    <div className={`d-flex align-items-center my-4 ${styles.wrapper}`}>
      <input
        type="text"
        className={`form-control flex-grow-1 ${styles.input}`}
        placeholder={"Enter Task"}
        aria-label={"Enter Task"}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAdd()}
      />
      <button
        type="button"
        className={`btn ${styles.addBtn}`}
        onClick={handleAdd}
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
