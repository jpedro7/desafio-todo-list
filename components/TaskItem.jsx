import { useState } from "react";

const TaskItem = ({ task, onUpdateTask, onDeleteTask }) => {
  const [editMode, setEditMode] = useState(false);
  const [completed, setCompleted] = useState(task.completed);
  const [title, setTitle] = useState(task.title);

  const handleEditClick = () => {
    if (editMode) {
      task.title = title;
      onUpdateTask(task);
      setEditMode(false);
    } else {
      setEditMode(true);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleToggleTask = (e) => {
    const completed = e.target.checked;
    onUpdateTask({ ...task, completed });
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <li>
      <input
        data-testid="completed"
        type="checkbox"
        checked={completed}
        onChange={handleToggleTask}
      />
      {!editMode ? (
        <label>{task.title}</label>
      ) : (
        <input type="text" value={title} onChange={handleTitleChange} />
      )}

      <button className="edit" onClick={handleEditClick}>
        Edit
      </button>
      <button className="delete" onClick={handleDeleteTask}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
