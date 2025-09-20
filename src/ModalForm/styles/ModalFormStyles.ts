import type React from 'react';

// 디자인 토큰
export const theme = {
  colors: {
    primary: '#3b82f6',
    primaryHover: '#2563eb',
    secondary: '#6b7280',
    background: '#ffffff',
    overlay: 'rgba(0, 0, 0, 0.5)',
    border: '#d1d5db',
    borderError: '#ef4444',
    text: '#374151',
    textSecondary: '#6b7280',
    error: '#ef4444',
    required: '#ef4444',
  },
  spacing: {
    xs: '6px',
    sm: '12px',
    md: '16px',
    lg: '20px',
    xl: '24px',
  },
  typography: {
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    fontSize: {
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '20px',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
    },
  },
  borderRadius: {
    sm: '6px',
    md: '8px',
  },
  shadows: {
    modal: '0 10px 25px rgba(0, 0, 0, 0.2)',
  },
  zIndex: {
    modal: 1000,
  },
};

// Content 컴포넌트 스타일
export const contentStyles = {
  overlay: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: theme.colors.overlay,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: theme.zIndex.modal,
    padding: theme.spacing.md,
    animation: 'fadeIn 0.2s ease-out',
  } as React.CSSProperties,

  modal: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.md,
    maxWidth: '500px',
    width: '100%',
    maxHeight: '90vh',
    overflow: 'auto',
    boxShadow: theme.shadows.modal,
    animation: 'slideIn 0.3s ease-out',
    transform: 'translateY(0)',
  } as React.CSSProperties,
};

// Field 컴포넌트 스타일
export const fieldStyles = {
  container: {
    marginBottom: theme.spacing.lg,
  } as React.CSSProperties,

  label: {
    display: 'block',
    marginBottom: theme.spacing.xs,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text,
  } as React.CSSProperties,

  input: (hasError: boolean) =>
    ({
      width: '100%',
      padding: theme.spacing.sm,
      border: `2px solid ${hasError ? theme.colors.borderError : theme.colors.border}`,
      borderRadius: theme.borderRadius.sm,
      fontSize: theme.typography.fontSize.base,
      boxSizing: 'border-box' as const,
      transition: 'border-color 0.2s',
    }) as React.CSSProperties,

  error: {
    marginTop: theme.spacing.xs,
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.error,
  } as React.CSSProperties,

  requiredMark: {
    color: theme.colors.required,
  } as React.CSSProperties,
};

// Button 컴포넌트 스타일
export const buttonStyles = {
  base: {
    padding: `${theme.spacing.sm} ${theme.spacing.xl}`,
    border: 'none',
    borderRadius: theme.borderRadius.sm,
    cursor: 'pointer',
    fontSize: theme.typography.fontSize.base,
    fontWeight: theme.typography.fontWeight.medium,
    transition: 'background-color 0.2s',
  } as React.CSSProperties,

  primary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.background,
  } as React.CSSProperties,

  secondary: {
    backgroundColor: theme.colors.background,
    color: theme.colors.text,
    border: `1px solid ${theme.colors.border}`,
  } as React.CSSProperties,
};

// Layout 컴포넌트 스타일
export const layoutStyles = {
  header: {
    margin: 0,
    padding: `${theme.spacing.xl} ${theme.spacing.xl} ${theme.spacing.md}`,
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    borderBottom: `1px solid #e5e7eb`,
  } as React.CSSProperties,

  body: {
    padding: theme.spacing.xl,
  } as React.CSSProperties,

  footer: {
    padding: `${theme.spacing.md} ${theme.spacing.xl} ${theme.spacing.xl}`,
    borderTop: `1px solid #e5e7eb`,
    display: 'flex',
    gap: theme.spacing.sm,
    justifyContent: 'flex-end',
  } as React.CSSProperties,
};

// 스크린리더 숨김 스타일
export const srOnlyStyle = {
  position: 'absolute' as const,
  left: '-10000px',
  width: '1px',
  height: '1px',
  overflow: 'hidden',
} as React.CSSProperties;
