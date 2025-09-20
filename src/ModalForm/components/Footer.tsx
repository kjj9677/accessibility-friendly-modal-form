import type React from 'react';
import { layoutStyles } from '../styles/ModalFormStyles';

interface FooterProps {
  children: React.ReactNode;
}

export const Footer = ({ children }: FooterProps) => {
  return <div style={layoutStyles.footer}>{children}</div>;
};
