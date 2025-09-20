import React from "react";
import { createRoot } from "react-dom/client";
import { ContactForm } from "../ContactForm";

export const openContactModal = (): Promise<Record<string, string> | null> => {
  return new Promise((resolve) => {
    const container = document.createElement("div");
    container.style.position = "fixed";
    container.style.top = "0";
    container.style.left = "0";
    container.style.right = "0";
    container.style.bottom = "0";
    container.style.zIndex = "999";
    container.style.pointerEvents = "none";

    document.body.appendChild(container);

    const root = createRoot(container);

    const cleanup = () => {
      root.unmount();
      if (document.body.contains(container)) {
        document.body.removeChild(container);
      }
    };

    const handleSubmit = (data: Record<string, string>) => {
      cleanup();
      resolve(data);
    };

    const handleCancel = () => {
      cleanup();
      resolve(null);
    };

    root.render(
      <ContactForm
        onSubmit={handleSubmit}
        onCancel={handleCancel}
        isOpen={true}
      />
    );
  });
};
