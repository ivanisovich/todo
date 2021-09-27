import React, { useState } from "react";
import {
  StyledTodo,
  StyledModal,
  InputEditing,
  ButtonCloseEditing,
  ButtonAddTodo,
} from "../styles/main";
import { motion } from "framer-motion";
export const Todo = ({
  completed,
  toggleTodo,
  task,
  removeTodo,
  updateTodo,
  id,
  IsEditingList,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const handleUpdate = (e) => {
    e.preventDefault();
    if (editTask !== "") {
      updateTodo(id, editTask);
      setIsEditing(false);
    }
  };

  return (
    <>
      {isEditing ? (
        <>
        <motion.div animate={{ y:187 } } 
          transition={{ ease: "easeOut", duration: 0.3 }}>
          <StyledModal onSubmit={handleUpdate}>
            <InputEditing
              type="text"
              name="task"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <ButtonAddTodo>Сохранить</ButtonAddTodo>
            <ButtonCloseEditing>Закрыть</ButtonCloseEditing>
          </StyledModal>
          </motion.div>
        </>
      ) : (
        <>
          {IsEditingList ? (
            <>
              <div className={"deleting"}>
                <button id="delete-button" onClick={removeTodo}></button>
                <StyledTodo onClick={() => setIsEditing(true)}>
                  {task}
                </StyledTodo>
              </div>
            </>
          ) : (
            <>
              <div className={completed ? "Todo completed" : "Todo"}>
                <StyledTodo onClick={toggleTodo}>{task}</StyledTodo>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Todo;
