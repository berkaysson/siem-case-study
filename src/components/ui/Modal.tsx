import React from "react";
import styled from "styled-components";
import Button from "./Button";
import { CircleSlash } from "lucide-react";

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <ModalOverlay>
      <ModalContent>
        {children}
        <Button
          icon={<CircleSlash size={16} />}
          size="small"
          onClick={onClose}
          variant="ghost"
          fullWidth
          destructive
        >
          Close
        </Button>
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;

const ModalOverlay = styled.dialog`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;

const ModalContent = styled.div`
  background-color: ${(props) => props.theme.background};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  border-radius: 4px;
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 426px) {
    padding: 0.5rem;
  }
`;
