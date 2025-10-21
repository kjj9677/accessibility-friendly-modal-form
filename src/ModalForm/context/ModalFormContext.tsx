import { createContext, useEffect, useId, useRef, useState } from "react";
import type { ModalFormContextValue, ModalFormProps } from "../types";
import type { ValidationRule } from "../utils/validation";

const ANNOUNCEMENT_DELAY = 500;
const EMPTY_STRING = "";

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
          announcementRef.current.textContent = EMPTY_STRING;
        }
      }, ANNOUNCEMENT_DELAY);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      headerRef.current?.focus();
    } else {
      document.body.style.overflow = EMPTY_STRING;
    }

    return () => {
      document.body.style.overflow = EMPTY_STRING;
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
        className="sr-only"
      />
    </ModalFormContext.Provider>
  );
};
