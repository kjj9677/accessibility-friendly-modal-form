import type React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useModalForm } from "../hooks/useModalForm";
import { contentStyles } from "../styles/ModalFormStyles";

interface ContentProps {
  children: React.ReactNode;
}

export const Content = ({ children }: ContentProps) => {
  const { isOpen, close, headerId } = useModalForm();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
      }

      if (e.key === "Tab") {
        const focusableElements = contentRef.current?.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );

        if (!focusableElements || focusableElements.length === 0) return;

        const firstElement = focusableElements[0] as HTMLElement;
        const lastElement = focusableElements[
          focusableElements.length - 1
        ] as HTMLElement;

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  if (!isOpen) {
    return null;
  }

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  const handleOverlayKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      if (e.target === e.currentTarget) {
        close();
      }
    }
  };

  return createPortal(
    <div
      className="modal-overlay"
      style={contentStyles.overlay}
      onClick={handleOverlayClick}
      onKeyDown={handleOverlayKeyDown}
      role="button"
      tabIndex={-1}
      aria-label="모달 닫기"
    >
      <div
        ref={contentRef}
        className="modal-content hide-scrollbar"
        style={contentStyles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby={headerId}
      >
        {children}
      </div>
    </div>,
    document.body
  );
};
