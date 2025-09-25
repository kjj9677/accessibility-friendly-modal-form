import { useContext } from 'react';
import { ModalFormContext } from '../context/ModalFormContext';

export const useModalForm = () => {
  const context = useContext(ModalFormContext);
  if (!context) {
    throw new Error('ModalForm components must be used within ModalForm');
  }
  return context;
};
