import type React from 'react';
import type { ValidationRule } from './utils/validation';

export interface ModalFormContextValue {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  formData: Record<string, string>;
  setFormData: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  errors: Record<string, string>;
  setErrors: React.Dispatch<React.SetStateAction<Record<string, string>>>;
  headerId: string;
  triggerRef: React.RefObject<HTMLButtonElement | null>;
  headerRef: React.RefObject<HTMLHeadingElement | null>;
  fieldRules: ValidationRule[];
  registerField: (rule: ValidationRule) => void;
  announceMessage: (message: string) => void;
  onSubmit?: (data: Record<string, string>) => void;
  onCancel?: () => void;
}

export interface ModalFormProps {
  children: React.ReactNode;
  onSubmit?: (data: Record<string, string>) => void;
  onCancel?: () => void;
}

export interface FieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'name'> {
  name: string;
  label: string;
  as?: 'input' | 'textarea';
  required?: boolean;
  rows?: number;
}
