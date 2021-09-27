import { useSelector } from "react-redux";
import TodoList from "./components/TodoList";
import React, { useState } from "react";
import {
  Template,
  Header,
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
  console.log(state);
  return (
    <Template>
      <Header>Сегодня</Header>
      <EditListButtons>
        {state.todos.todos.length !== 0 ? (
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
