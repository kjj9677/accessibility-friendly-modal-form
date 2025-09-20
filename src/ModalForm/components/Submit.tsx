import type React from "react";
import { useModalForm } from "../context/useModalForm";
import { buttonStyles } from "../styles/ModalFormStyles";
import { getErrorSummary, validateAllFields } from "../utils/validation";

const SUBMIT_TEXT = "제출";
const FOCUS_DELAY = 100;

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
      }, FOCUS_DELAY);

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
      aria-label="폼 데이터 제출"
      {...props}
    >
      {children}
    </button>
  );
};
