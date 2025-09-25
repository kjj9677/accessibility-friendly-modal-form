import type React from "react";

export const pageStyle: React.CSSProperties = {
  minHeight: "150vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  fontFamily:
    '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  backgroundColor: "#f9fafb",
};

export const titleStyle: React.CSSProperties = {
  fontSize: "32px",
  fontWeight: "bold",
  marginBottom: "16px",
  color: "#1f2937",
};

export const descriptionStyle: React.CSSProperties = {
  fontSize: "18px",
  color: "#6b7280",
  marginBottom: "32px",
  textAlign: "center",
  maxWidth: "600px",
  lineHeight: 1.6,
};

export const triggerStyle: React.CSSProperties = {
  padding: "16px 32px",
  fontSize: "18px",
  fontWeight: 600,
  backgroundColor: "#3b82f6",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  transition: "background-color 0.2s",
};
