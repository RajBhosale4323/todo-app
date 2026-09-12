import TaskItem from './TaskItem';
import styles from './TaskList.module.css';
const TaskList = ({ onComplete, tasks }) => {

  return (
    <div className={`p-3 ${styles.list}`}>
      {tasks.length === 0 ? (
        <p className={`text-center mb-0 ${styles.empty}`}>No tasks yet</p>
      ) : (
        tasks.map((task) => (
          <TaskItem key={task.id} task={task} onComplete={() => {onComplete(task.id)}} />
        ))
      )}
    </div>
  );
};
 
export default TaskList;