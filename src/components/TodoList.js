import React, { useState } from "react";
import TodoInput from "./Todoinput";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, updateTodo, completeTodo } from "../redux/action";
import Todo from "./Todo";
import {
  TodoEmpty,
  ButtonWrapper,
  ButtonModalOpen,
  StyledTodoList,
} from "../styles/main";
import modalButtonImg from "../img/add.png";

const TodoList = ({ editingList }) => {
  const todos = useSelector((state) => ({ ...state.todos }));
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
        <TodoInput
          setModalOpen={setModalOpen}
          createTodo={create}
          handler={handleModalClose}
        ></TodoInput>
      ) : (
        <>
          <StyledTodoList>
            {todos && todos.allTodos.length === 0 ? (
              <>
                <TodoEmpty>Список задач пуст</TodoEmpty>
              </>
            ) : (
              <>
                {todos.allTodos &&
                  todos.allTodos.map((todo) => {
                    return (
                      <Todo
                        task={todo.task}
                        id={todo.id}
                        key={todo.id}
                        completed={todo.completed}
                        toggleTodo={() => dispatch(completeTodo(todo))}
                        removeTodo={() => dispatch(removeTodo(todo))}
                        updateTodo={update}
                        isEditingList={editingList}
                      >
                        {todo.task}
                      </Todo>
                    );
                  })}
              </>
            )}
          </StyledTodoList>
          <ButtonWrapper id="button-modal" onClick={handleModalOpen}>
            <ButtonModalOpen src={modalButtonImg}></ButtonModalOpen>
          </ButtonWrapper>
        </>
      )}
    </>
  );
};

export default TodoList;
