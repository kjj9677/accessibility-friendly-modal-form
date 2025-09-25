import type React from "react";
import { useModalForm } from "../hooks/useModalForm";
import { layoutStyles } from "../styles/ModalFormStyles";

interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}

export const Header = ({ children, ...props }: HeaderProps) => {
  const { headerId, headerRef } = useModalForm();

  return (
    <h2
      ref={headerRef}
      id={headerId}
      tabIndex={-1}
      style={layoutStyles.header}
      {...props}
    >
      {children}
    </h2>
  );
};
