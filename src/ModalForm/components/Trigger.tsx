import type React from "react";
import { useModalForm } from "../hooks/useModalForm";

interface TriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Trigger = ({ children, ...props }: TriggerProps) => {
  const { open, triggerRef } = useModalForm();

  return (
    <button ref={triggerRef} onClick={open} {...props}>
      {children}
    </button>
  );
};
