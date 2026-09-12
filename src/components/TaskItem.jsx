import styles from './TaskItem.module.css';

const TaskItem = ({ task, onComplete }) => {
  return (
    <div className={`d-flex justify-content-between align-items-center mb-3 ${styles.item}`}>
      <span className={styles.text}>{task.text}</span>
      <button type="button" className={`btn ${styles.doneBtn}`} onClick={() => onComplete(task.id)}>
        Done
      </button>
    </div>
  );
};

export default TaskItem;