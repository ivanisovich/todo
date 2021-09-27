import React, { useState } from "react";
import TodoInput from "./Todoinput";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo, completeTodo } from "../redux/action";
import Todo from "./Todo";
import {
  StyledTodoEmpty,
  ButtonWrapper,
  ButtonModalOpen,
  StyledList,
} from "../styles/main";
import modalButtonImg from "../img/add.png";

const TodoList = ({ editingList }) => {
  const state = useSelector((state) => ({ ...state.todos }));
  const [modalOpen, setModalOpen] = useState(false);

  let dispatch = useDispatch();
  const create = (newTodo) => {
    dispatch(addTodo(newTodo));
  };
  const update = (id, task) => {
    dispatch(updateTodo({ id, task }));
  };
  function handleModalOpen() {
    setModalOpen(true);
  }
  function handleModalClose() {
    setModalOpen(false);
  }

  return (
    <>
      {modalOpen ? (
        <TodoInput createTodo={create} handler={handleModalClose}></TodoInput>
      ) : (
        <>
          <StyledList>
            {state.todos && state.todos.length == 0 ? (
              <>
                <StyledTodoEmpty>Список задач пуст</StyledTodoEmpty>
              </>
            ) : (
              <>
                {state.todos &&
                  state.todos.map((todo) => {
                    return (
                      <Todo
                        task={todo.task}
                        id={todo.id}
                        key={todo.id}
                        completed={todo.completed}
                        toggleTodo={() => dispatch(completeTodo(todo))}
                        removeTodo={() => dispatch(removeTodo(todo))}
                        updateTodo={update}
                        IsEditingList={editingList}
                      >
                        {todo.task}
                      </Todo>
                    );
                  })}
              </>
            )}
          </StyledList>
          <ButtonWrapper onClick={handleModalOpen}>
            <ButtonModalOpen src={modalButtonImg}></ButtonModalOpen>
          </ButtonWrapper>
        </>
      )}
    </>
  );
};

export default TodoList;
