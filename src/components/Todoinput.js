import React, { useState } from "react";
import { motion } from "framer-motion";
import { StyledModal, Input, ButtonClose, ButtonAddTodo } from "../styles/main";

const TodoInput = ({ createTodo, handler }) => {
  const [task, setTask] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      createTodo(task);
      setTask("");
    }
  };

  return (
    <>
      <motion.div
        animate={{ y: 187 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <StyledModal onSubmit={handleSubmit}>
          <Input
            type="text"
            id="task"
            name="task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Введите текст задачи"
          />
          <ButtonAddTodo>Добавить</ButtonAddTodo>
          <div>
            <ButtonClose onClick={handler}>Закрыть</ButtonClose>
          </div>
        </StyledModal>
      </motion.div>
    </>
  );
};

export default TodoInput;
