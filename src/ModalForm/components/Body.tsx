import type React from 'react';
import { layoutStyles } from '../styles/ModalFormStyles';

interface BodyProps {
  children: React.ReactNode;
}

export const Body = ({ children }: BodyProps) => {
  return <div style={layoutStyles.body}>{children}</div>;
};
