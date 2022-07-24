import React from "react";
import styled from "styled-components";
const Heading = styled.div`
  font-size: ${({ headingfontsize = 22 }) => `${headingfontsize}px`};
  font-weight: 700;
  line-height: 1;
  margin-bottom: 12px;
  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 1;
    margin-top: 4px;
    max-width: 95%;
  }
`;
const Content = styled.div`
  margin-top: 20px;
`;
export const ModalWapper = styled.div`
  margin-top: 20px;
  .modal {
    opacity: 0;
    visibility: hidden;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    text-align: left;
    background: rgba(0, 0, 0, 0.9);
    transition: opacity 0.25s ease;
  }

  .modal-state {
    display: none;
  }

  .modal-state:checked + .modal {
    opacity: 1;
    visibility: visible;
  }

  .modal-state:checked + .modal .modal__inner {
    top: 0;
  }

  .modal__inner {
    transition: top 0.25s ease;
    position: absolute;
    top: -20%;
    right: 0;
    bottom: 0;
    left: 0;
    width: ${({ width = "50%" }) => width};

    margin: auto;
    overflow: auto;
    background: #fff;
    border-radius: 5px;
    padding: 1em 2em;
    height: ${({ height = "70%" }) => height};
  }

  @media screen and (max-width: 768px) {
    .modal__inner {
      padding: 0.5em 1em;
      width: 90%;
      height: 80%;
      box-sizing: border-box;
    }
  }

  .btn {
    cursor: pointer;
    background: #27ae60;
    display: inline-block;
    padding: 0.5em 1em;
    color: #fff;
    border-radius: 3px;
  }

  .btn:hover,
  .btn:focus {
    background: #2ecc71;
  }

  .btn:active {
    background: #27ae60;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2) inset;
  }

  .btn--blue {
    background: #2980b9;
  }

  .btn--blue:hover,
  .btn--blue:focus {
    background: #3498db;
  }

  .btn--blue:active {
    background: #2980b9;
  }
  p img {
    max-width: 400px;
    height: auto;
    float: left;
    margin: 0 1em 1em 0;
  }

  @media screen and (max-width: 768px) {
    p img {
      max-width: 100%;
    }
  }
`;
const CroseIcon = styled.label`
  position: absolute;
  right: 1em;
  top: 1em;
  width: 1.1em;
  height: 1.1em;
  cursor: pointer;
  &::before {
    content: "";
    position: absolute;
    width: 2px;
    height: 1.5em;
    background: #ccc;
    display: block;
    transform: rotate(45deg);
    left: 50%;
    margin: -3px 0 0 -1px;
    top: 0;
  }
  &::after {
    content: "";
    position: absolute;
    width: 2px;
    height: 1.5em;
    background: #ccc;
    display: block;
    transform: rotate(45deg);
    left: 50%;
    margin: -3px 0 0 -1px;
    top: 0;
  }
  &&:hover:after {
    background: #aaa;
  }
  &&:hover:before {
    background: #aaa;
  }
  &:before {
    transform: rotate(-45deg);
  }
`;
const Modal = ({
  title,
  details,
  closeHandler,
  crose = true,
  children = null,
  open,
  image,
  ...rest
}) => {
  return (
    <ModalWapper {...rest}>
      <input class="modal-state" id="modal-1" type="checkbox" checked={open} />
      <div class="modal">
        <div class="modal__inner">
          {crose && (
            <CroseIcon
              class="modal__close"
              for="modal-1"
              onClick={closeHandler}
            ></CroseIcon>
          )}
          {title && <Heading>{title}</Heading>}
          <Content>
            {children ? (
              children
            ) : (
              <p>
                <img alt="" src={`images/${image}`} />
                {details}
              </p>
            )}
          </Content>
        </div>
      </div>
    </ModalWapper>
  );
};

export default Modal;
