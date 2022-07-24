import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  padding: 16px;
  text-align: center;
  h1 {
    margin: 20px 0px;
    font-size: 30px;
  }
`;

export const ActionButtonsWrapper = styled.div`
  margin: 22px 0px;
  button {
    cursor: pointer;
    background-color: #04aa6d;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
    opacity: 0.9;
  }

  button:hover {
    opacity: 1;
  }
  /* Float cancel and delete buttons and add an equal width */
  .cancelbtn,
  .deletebtn {
    float: left;
    width: 50%;
  }

  /* Add a color to the cancel button */
  .cancelbtn {
    background-color: #ccc;
    color: black;
  }

  /* Add a color to the delete button */
  .deletebtn {
    background-color: #f44336;
  }

  @media screen and (max-width: 300px) {
    margin-top: 10px;
    .cancelbtn,
    .deletebtn {
      width: 100%;
    }
  }
`;
const Confirmation = ({
  heading,
  title = "",
  cancelHandler,
  confirmHandler,
  leftButtontext = "",
  rightButtontext = "",
}) => {
  return (
    <Container>
      {heading && <h1>{heading}</h1>}
      {title && <p>{title}</p>}
      <ActionButtonsWrapper>
        {leftButtontext && (
          <button type="button" onClick={confirmHandler} class="cancelbtn">
            {leftButtontext}
          </button>
        )}
        {rightButtontext && (
          <button type="button" onClick={cancelHandler} class="deletebtn">
            {rightButtontext}
          </button>
        )}
      </ActionButtonsWrapper>
    </Container>
  );
};

export default Confirmation;
