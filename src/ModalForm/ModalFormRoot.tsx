import { ModalFormProvider } from './context/ModalFormContext';
import { useStyles } from './hooks/useStyles';
import type { ModalFormProps } from './types';

export const ModalFormRoot = ({
  children,
  onSubmit,
  onCancel,
}: ModalFormProps) => {
  useStyles();

  return (
    <ModalFormProvider onSubmit={onSubmit} onCancel={onCancel}>
      {children}
    </ModalFormProvider>
  );
};
