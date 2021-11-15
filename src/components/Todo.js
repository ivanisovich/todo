import React, { useState } from "react";
import {
  StyledTodo,
  Modal,
  InputEditing,
  ButtonCloseEditing,
  ButtonAddTodo,
  ButtonDeleteTodo,
} from "../styles/main";
import { motion } from "framer-motion";

export const Todo = ({
  completed,
  toggleTodo,
  task,
  removeTodo,
  updateTodo,
  id,
  isEditingList,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);

  const handleUpdate = (e) => {
    e.preventDefault();
    if (editTask.text !== "") {
      updateTodo(id, editTask);
      setIsEditing(false);
    }
  };

  return (
    <>
      {isEditing ? (
        <>
          <motion.div
            animate={{ y: 187 }}
            transition={{ ease: "easeOut", duration: 0.3 }}
          >
            <Modal onSubmit={handleUpdate}>
              <InputEditing
                type="text"
                name="task"
                value={editTask.text}
                onChange={(e) =>
                  setEditTask({ text: e.target.value, date: editTask.date })
                }
              />
              <ButtonAddTodo>Сохранить</ButtonAddTodo>
              <ButtonCloseEditing>Закрыть</ButtonCloseEditing>
            </Modal>
          </motion.div>
        </>
      ) : (
        <>
          {isEditingList ? (
            <>
              <div className={"todo todo-deleting"}>
                <ButtonDeleteTodo onClick={removeTodo}></ButtonDeleteTodo>
                <StyledTodo onClick={() => setIsEditing(true)}>
                  {task.text}
                  <p>{task.date.day}</p>
                  <p>{task.date.time}</p>
                </StyledTodo>
              </div>
            </>
          ) : (
            <>
              <div className={completed ? "todo todo-completed" : "todo"}>
                <StyledTodo onClick={toggleTodo}>
                  {task.text}
                  <p>{task.date.day}</p>
                  <p>{task.date.time}</p>
                </StyledTodo>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Todo;
