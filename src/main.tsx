import 'modern-normalize';
import './styles/globals.css';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ImperativeModalProvider } from './contexts/ImperativeModalContext';
import ModalFormPage from './pages/ModalFormPage';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ImperativeModalProvider>
      <ModalFormPage />
    </ImperativeModalProvider>
  </StrictMode>,
);
