import React from "react";
import styled from "styled-components";

const ButtonComponent = styled.button`
  appearance: none;
  background-color: ${(props) =>
    props.variant === "primary" ? "#392ebb" : "transparent"};
  border: 1px solid transparent;
  border-color: ${(props) =>
    props.variant === "primary"
      ? "#2b228a"
      : props.variant === "secondary"
      ? "#392ebb"
      : "transparent"};
  border-radius: 2px;
  font-weight: 500;
  box-sizing: border-box;
  color: ${(props) => (props.variant === "primary" ? "#ffffff" : "#392ebb")};
  cursor: pointer;
  display: inline-block;
  padding: ${(props) => (props.variant === "terciary" ? 0 : "0.25rem 0.75rem")};
  position: relative;
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  text-transform: uppercase;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
  transition: all 0.3s;
  &:hover {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "#2b228a"
        : props.variant === "secondary"
        ? "#392ebb"
        : "transparent"};
    color: ${(props) =>
      props.variant === "terciary" ? "#3a2ebbba" : "#ffffff"};
    text-decoration: none;
    transition-duration: 0.1s;
  }
  &:disabled {
    background-color: transparent;
    border-color: #2b228a36;
    color: #959da5;
    cursor: default;
  }
  &:active {
    background-color: ${(props) =>
      props.variant === "primary"
        ? "#221b69"
        : props.variant === "secondary"
        ? "#2b228a"
        : "transparent"};
    box-shadow: rgba(225, 228, 232, 0.2) 0 1px 0 inset;
    transition: none 0s;
  }
  &:focus {
    outline: 1px transparent;
  }
`;

const Button = ({ type, variant, className, id, onClick, text }) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      className={className}
      id={id}
      onClick={onClick}
    >
      {text}
    </ButtonComponent>
  );
};

export default Button;
