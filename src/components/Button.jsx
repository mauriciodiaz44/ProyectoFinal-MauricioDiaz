import React from "react";
import styled from "styled-components";

// Boton que cambia dependiendo de la prop variant

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
  text-transform: ${(props) =>
    props.variant === "terciary" ? "none" : "uppercase"};
  transition: background-color 0.2s cubic-bezier(0.3, 0, 0.5, 1);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: middle;
  white-space: nowrap;
  word-wrap: break-word;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out,
    border-color 0.3s ease-in-out;
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
  &:disabled,
  &:disabled:hover {
    background-color: ${(props) =>
      props.variant === "primary" ? "#f5f5f5" : "transparent"};
    border-color: rgb(43 34 138 / 6%);
    color: #959da5;
    cursor: default;
  }
  svg {
    margin-bottom: 2px;
  }
`;

const Button = ({
  type,
  variant,
  className,
  id,
  onClick,
  disabled,
  icon,
  text,
}) => {
  return (
    <ButtonComponent
      type={type ? type : "button"}
      variant={variant}
      className={className}
      id={id}
      icon={icon}
      onClick={onClick}
      disabled={disabled}
    >
      {icon} {text}
    </ButtonComponent>
  );
};

export default Button;
