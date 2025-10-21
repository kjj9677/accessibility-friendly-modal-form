import type { ReactNode } from 'react';
import { createContext, useContext, useState } from 'react';
import { ContactForm } from '../pages/ModalFormPage/components/ContactForm';

interface ImperativeModalContextValue {
  openContactModal: () => Promise<Record<string, string> | null>;
}

export const ImperativeModalContext =
  createContext<ImperativeModalContextValue | null>(null);

interface ModalState {
  isOpen: boolean;
  resolve?: (data: Record<string, string> | null) => void;
}

export const ImperativeModalProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [modalState, setModalState] = useState<ModalState>({ isOpen: false });

  const openContactModal = (): Promise<Record<string, string> | null> => {
    return new Promise((resolve) => {
      setModalState({ isOpen: true, resolve });
    });
  };

  const handleSubmit = (data: Record<string, string>) => {
    modalState.resolve?.(data);
    setModalState({ isOpen: false });
  };

  const handleCancel = () => {
    modalState.resolve?.(null);
    setModalState({ isOpen: false });
  };

  return (
    <ImperativeModalContext.Provider value={{ openContactModal }}>
      {children}
      {modalState.isOpen && (
        <ContactForm
          isOpen={true}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
        />
      )}
    </ImperativeModalContext.Provider>
  );
};

export const useImperativeModal = () => {
  const context = useContext(ImperativeModalContext);
  if (!context) {
    throw new Error(
      'useImperativeModal must be used within ImperativeModalProvider',
    );
  }
  return context;
};
