import { ModalFormProvider } from './context/ModalFormContext';
import type { ModalFormProps } from './types';

export const ModalFormRoot = ({
  children,
  onSubmit,
  onCancel,
}: ModalFormProps) => {
  return (
    <ModalFormProvider onSubmit={onSubmit} onCancel={onCancel}>
      {children}
    </ModalFormProvider>
  );
};
