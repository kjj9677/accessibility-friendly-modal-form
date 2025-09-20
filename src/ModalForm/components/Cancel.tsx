import type React from "react";
import { useModalForm } from "../context/useModalForm";
import { buttonStyles } from "../styles/ModalFormStyles";

const CANCEL_TEXT = "취소";

interface CancelProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Cancel = ({ children = CANCEL_TEXT, ...props }: CancelProps) => {
  const { close, onCancel } = useModalForm();

  const handleClick = () => {
    onCancel?.();
    close();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ ...buttonStyles.base, ...buttonStyles.secondary }}
      {...props}
    >
      {children}
    </button>
  );
};
