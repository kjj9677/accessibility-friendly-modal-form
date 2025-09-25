import type React from "react";
import { useModalForm } from "../hooks/useModalForm";
import { buttonStyles } from "../styles/ModalFormStyles";

const CANCEL_TEXT = "취소";
const BUTTON_ARIA_LABEL = "모달 닫기";

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
      aria-label={BUTTON_ARIA_LABEL}
      {...props}
    >
      {children}
    </button>
  );
};
