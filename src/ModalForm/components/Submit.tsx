import type React from "react";
import { useModalForm } from "../context/useModalForm";
import { buttonStyles } from "../styles/ModalFormStyles";
import { getErrorSummary, validateAllFields } from "../utils/validation";

const SUBMIT_TEXT = "제출";

interface SubmitProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
}

export const Submit = ({ children = SUBMIT_TEXT, ...props }: SubmitProps) => {
  const { formData, setErrors, close, onSubmit, fieldRules, announceMessage } =
    useModalForm();

  const handleClick = () => {
    const validationErrors = validateAllFields(formData, fieldRules);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);

      const errorSummary = getErrorSummary(validationErrors);
      announceMessage(errorSummary);

      const firstErrorField = Object.keys(validationErrors)[0];
      setTimeout(() => {
        const errorField = document.querySelector(
          `input[name="${firstErrorField}"], textarea[name="${firstErrorField}"]`
        ) as HTMLElement;
        if (errorField) {
          errorField.focus();
        }
      }, 100);

      return;
    }

    onSubmit?.(formData);
    close();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      style={{ ...buttonStyles.base, ...buttonStyles.primary }}
      {...props}
    >
      {children}
    </button>
  );
};
