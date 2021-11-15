import { useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import React, { useState } from "react";
import {
  Template,
  Header,
  Title,
  EditListButtons,
  ButtonCloseEditingList,
} from "./styles/main";
import "./index.css";

function App() {
  const state = useSelector((state) => ({ ...state }));
  const [isEditingList, setIsEditingList] = useState(false);
  function handleListEdit() {
    setIsEditingList(true);
  }
  function handleListEditCompleted() {
    setIsEditingList(false);
  }

  return (
    <Template>
      <Header>Сегодня</Header>
      <Title>Что-бы изменить todo , нужно нажать на текст todo в режиме редактирования ( кнопка править ) .</Title>
      <EditListButtons>
        {state.todos.allTodos.length !== 0 ? (
          <>
            {isEditingList ? (
              <ButtonCloseEditingList onClick={handleListEditCompleted}>
                отменить
              </ButtonCloseEditingList>
            ) : (
              <ButtonCloseEditingList onClick={handleListEdit}>
                править
              </ButtonCloseEditingList>
            )}
          </>
        ) : (
          ""
        )}
      </EditListButtons>
      <TodoList editingList={isEditingList}></TodoList>
    </Template>
  );
}

export default App;
