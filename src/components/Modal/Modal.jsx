import React from "react";
import styled, { keyframes } from "styled-components";
import {
  AiFillExclamationCircle,
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillInfoCircle,
} from "react-icons/ai";
import { HiOutlineXMark } from "react-icons/hi2";

const Modal = ({ title, onClose, isOpen, icon, children }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <>
      <Overlay isOpen={isOpen} onClick={onClose}>
        <ModalWrapper isOpen={isOpen}>
          <ModalHeader>
            {icon && (
              <Icon icon={icon}>
                {(() => {
                  switch (icon) {
                    case "sucess":
                      return <AiFillCheckCircle />;
                    case "alert":
                      return <AiFillExclamationCircle />;
                    case "info":
                      return <AiFillInfoCircle />;
                    case "error":
                      return <AiFillCloseCircle />;
                    default:
                      return null;
                  }
                })()}
              </Icon>
            )}
            <h3>{title}</h3>
            <CloseModal onClick={onClose}>
              <HiOutlineXMark />
            </CloseModal>
          </ModalHeader>
          <ModalContent className="modal-content">{children}</ModalContent>
        </ModalWrapper>
      </Overlay>
    </>
  );
};

export default Modal;

const fadeIn = keyframes`
  from {
    transform: scale(0.2);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    transform: scale(1);
    opacity: 1;
  }
  to {
    transform: scale(0.2);
    opacity: 0;
  }
`;

const Overlay = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;

  background-color: rgba(0, 0, 0, ${(props) => (props.isOpen ? 0.5 : 0)});
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: background-color 0.3s ease, opacity 0.3s ease;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;

const ModalWrapper = styled.div`
  width: 440px;
  min-height: 180px;
  background-color: var(--background);
  position: relative;
  padding: 20px 30px;
  border-radius: var(--radius);
  box-shadow: var(--boxshadow);

  animation: ${(props) => (props.isOpen ? fadeIn : fadeOut)} 0.25s ease-in-out;
  pointer-events: ${(props) => (props.isOpen ? "auto" : "none")};
`;

const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  h3 {
    font-size: 30px;
    margin-bottom: 10px;
  }
`;

const CloseModal = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  color: var(--muted);
  font-size: 22px;
  border-radius: var(--radius);
  padding: 2px;
  border: none;
  background: none;
  line-height: 0;
  transition: background 0.18s ease-in-out;
  &:hover {
    background: var(--background);
  }
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  p {
    color: var(--muted);
    padding-bottom: 16px;
  }
`;

const Icon = styled.span`
  position: absolute;
  top: -50px;
  font-size: 90px;
  color: ${(props) =>
    props.icon === "sucess"
      ? "#47C9A2"
      : props.icon === "alert"
      ? "#ffd447"
      : props.icon === "info"
      ? "#6be4ff"
      : props.icon === "error"
      ? "#eb5353"
      : ""};
  line-height: 0;
  background-color: var(--background);
  border-radius: 50%;
  margin-bottom: 10px;
`;
