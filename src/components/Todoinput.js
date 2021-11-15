import React, { useState } from "react";
import { motion } from "framer-motion";
import { Modal, Input, ButtonCloseModal, ButtonAddTodo } from "../styles/main";

const TodoInput = ({ createTodo, handler, setModalOpen }) => {
  const [task, setTask] = useState({});

  const date = {
    day: JSON.stringify(new Date()).split("T")[0].slice(1),
    time: Date().split(" ")[4],
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (task !== "") {
      createTodo({ task, date });
      setTask("");
      setModalOpen(false);
    }
  };

  return (
    <>
      <motion.div
        animate={{ y: 187 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
      >
        <Modal onSubmit={handleSubmit}>
          <Input
            type="text"
            id="task"
            name="task"
            value={task.text}
            onChange={(e) => setTask({ text: e.target.value, date: date })}
            placeholder="Введите текст задачи"
          />
          <ButtonAddTodo>Добавить</ButtonAddTodo>
          <div>
            <ButtonCloseModal onClick={handler}>Закрыть</ButtonCloseModal>
          </div>
        </Modal>
      </motion.div>
    </>
  );
};

export default TodoInput;
