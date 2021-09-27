import styled from "styled-components";
export const Template = styled.div`
  padding-bottom: 62px;
  padding-top: 66px;
  white-space: nowrap;
`;

export const Header = styled.h1`
  font-family: "Gilroy-Bold", sans-serif;
  letter-spacing: -0.1vw;
  font-size: 28px;
  padding-bottom: 43px;
  padding-left: 40px;
`;

export const StyledList = styled.ul`
  padding-top: 10px;
`;

export const StyledTodo = styled.li`
  font-size: 18px;
  padding-left: 10vw;
  letter-spacing: 0.2vw;
  font-weight: 500;
  font-family: "Gilroy-Medium", sans-serif;
  list-style: none;
  margin-left: 19px;
  padding-bottom: 30px;
`;

export const StyledTodoEmpty = styled(StyledTodo)`
  padding-left: 7vw;
`;

export const StyledModal = styled.form`
  margin-left: auto;
  margin-right: auto;
  max-width: 300px;
  min-width: 180px;
  z-index: 1;
  height: 47rem;
  margin-top: -12.2rem;
  border-radius: 40px 40px 0px 0px;
  padding: 41px;

  background: #ffffff;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.1);
`;

export const ModalWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
export const Input = styled.input`
  ::placeholder {
    color: #000;
    letter-spacing: 0.04em;
  }
  @media (max-width: 360px) {
    width: 46vw;
    min-height: 0px;
  }
  :focus {
    color: #000;
  }
  outline: none;
  border: 2px solid #e5e5e5;
  padding: 21px;
  font-size: 15px;
  padding-bottom: 120px;
  padding-right: 80px;
  padding-left: 17px;
  border-radius: 10px;
  margin-bottom: 29px;
`;
export const InputEditing = styled(Input)`
  padding: 14px;
  font-weight: 500;
  font-size: 16px;
  width: 90%;
  margin-bottom: 31px;
`;

export const ButtonClose = styled.button`
  text-transform: capitalize;
  font-family: "Gilroy-Medium", sans-serif;
  text-align: center;
  font-size: 16px;
  background: #f2f2f2;
  border-radius: 10px;
  letter-spacing: 0.01em;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #4d4d4d;
  outline: none;
  border: none;
  width: 137px;
  margin-top: -2.3rem;
  position: absolute;
  margin-left: 0px;
  @media (max-width: 360px) {
    width: 30vw;
  }
`;
export const ButtonCloseEditing = styled(ButtonClose)`
  margin-top: -2.3rem;
`;
export const ButtonCloseEditingList = styled.button`
  color: #000;
  outline: none;
  border: none;
  font-family: "Gilroy-Medium", sans-serif;
  text-align: center;
  font-size: 16px;
  background: #f2f2f2;
  font-weight: 500;
  border-radius: 4px;
  padding: 4px 10px 4px;
  text-transform: capitalize;
`;

export const ButtonAddTodo = styled.button`
  @media (max-width: 360px) {
    width: 30vw;
  }
  @media (min-width: 360px) {
    margin-left: 9.8rem;
  }
  font-family: "Gilroy-Medium", sans-serif;
  text-align: center;
  font-size: 16px;
  background: #23a3ff;
  border-radius: 10px;
  letter-spacing: 0.01em;
  padding-top: 10px;
  padding-bottom: 10px;
  color: #fff;
  outline: none;
  border: none;
  width: 137px;
  display: block;

  margin-left: 41.8vw;
`;
export const ButtonWrapper = styled.button`
  border: none;
  position: absolute;
  display: flex;
  background-color: transparent;
  justify-content: flex-end;
  margin-top: 24.8rem;
  align-items: flex-end;
  max-height: 611px;
  margin-left: 73.9%;
  z-index: -1;
`;
export const ButtonModalOpen = styled.img`
  height: 22px;
  width: 22px;
  padding: 19px;
  border-radius: 40px;
  box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.1);
  :active {
    opacity: 0.7;
    height: 24px;
    width: 24px;
    margin-top: -1px;
    margin-right: -1px;
  }
`;

export const EditListButtons = styled.div`
  position: absolute;
  margin-left: 15.9rem;
  margin-top: -4.57rem;
`;

export const ButtonRemoveTodo = styled.div`
  background: color;

  padding-left: 20px;
  border: none;
`;
