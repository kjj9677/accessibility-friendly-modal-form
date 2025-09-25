import { createContext, useEffect, useId, useRef, useState } from "react";
import type { ModalFormContextValue, ModalFormProps } from "../types";
import type { ValidationRule } from "../utils/validation";

export const ModalFormContext = createContext<ModalFormContextValue | null>(
  null
);

export const ModalFormProvider = ({
  children,
  onSubmit,
  onCancel,
}: ModalFormProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [fieldRules, setFieldRules] = useState<ValidationRule[]>([]);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const headerRef = useRef<HTMLHeadingElement>(null);
  const announcementRef = useRef<HTMLDivElement>(null);
  const headerId = useId();

  const open = () => setIsOpen(true);
  const close = () => {
    setIsOpen(false);
    setFormData({});
    setErrors({});
    setFieldRules([]);
    triggerRef.current?.focus();
  };

  const registerField = (rule: ValidationRule) => {
    setFieldRules((prev) => {
      const existing = prev.find((r) => r.name === rule.name);
      if (existing) return prev;
      return [...prev, rule];
    });
  };

  const announceMessage = (message: string) => {
    if (announcementRef.current) {
      announcementRef.current.textContent = message;
      setTimeout(() => {
        if (announcementRef.current) {
          announcementRef.current.textContent = "";
        }
      }, 1000);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      headerRef.current?.focus();
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const contextValue: ModalFormContextValue = {
    isOpen,
    open,
    close,
    formData,
    setFormData,
    errors,
    setErrors,
    headerId,
    triggerRef,
    headerRef,
    fieldRules,
    registerField,
    announceMessage,
    onSubmit,
    onCancel,
  };

  return (
    <ModalFormContext.Provider value={contextValue}>
      {children}
      <div
        ref={announcementRef}
        aria-live="assertive"
        aria-atomic="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      />
    </ModalFormContext.Provider>
  );
};
