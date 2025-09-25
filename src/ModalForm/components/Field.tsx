import type React from "react";
import { useEffect, useId } from "react";
import { useModalForm } from "../hooks/useModalForm";
import { fieldStyles } from "../styles/ModalFormStyles";
import type { FieldProps } from "../types";
import { validateField } from "../utils/validation";

export const Field = ({
  name,
  label,
  as = "input",
  required,
  ...props
}: FieldProps) => {
  const { formData, setFormData, errors, setErrors, registerField } =
    useModalForm();
  const fieldId = useId();
  const errorId = useId();

  useEffect(() => {
    registerField({
      name,
      label,
      required,
      type: props.type,
    });
  }, [name, label, required, props.type, registerField]);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, [name]: value }));

    const error = validateField(value, {
      name,
      label,
      required,
      type: props.type,
    });
    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const hasError = !!errors[name];

  return (
    <div style={fieldStyles.container}>
      <label htmlFor={fieldId} style={fieldStyles.label}>
        {label} {required && <span style={fieldStyles.requiredMark}>*</span>}
      </label>
      {as === "textarea" ? (
        <textarea
          id={fieldId}
          value={formData[name] || ""}
          onChange={handleChange}
          style={fieldStyles.input(hasError)}
          aria-describedby={errors[name] ? errorId : undefined}
          aria-invalid={hasError}
          name={name}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          id={fieldId}
          value={formData[name] || ""}
          onChange={handleChange}
          style={fieldStyles.input(hasError)}
          aria-describedby={errors[name] ? errorId : undefined}
          aria-invalid={hasError}
          name={name}
          {...props}
        />
      )}
      {errors[name] && (
        <div
          id={errorId}
          style={fieldStyles.error}
          role="alert"
          aria-live="polite"
        >
          {errors[name]}
        </div>
      )}
    </div>
  );
};
