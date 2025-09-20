export interface ValidationRule {
  required?: boolean;
  type?: string;
  name: string;
  label: string;
}

export const validateField = (value: string, rule: ValidationRule): string => {
  const { required, type, name, label } = rule;

  if (required && !value.trim()) {
    return `${label}은(는) 필수 입력 항목입니다.`;
  }

  if (!value.trim()) {
    return "";
  }

  if (name === "name") {
    const nameRegex = /^[가-힣a-zA-Z\s]{2,20}$/;
    if (!nameRegex.test(value)) {
      return "이름은 한글 또는 영문 2-20자로 입력해주세요.";
    }
  }

  if (type === "email") {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(value)) {
      return "올바른 이메일 형식을 입력해주세요. (예: user@example.com)";
    }
  }

  if (type === "tel") {
    const phoneRegex = /^01[0-9]-\d{3,4}-\d{4}$/;
    if (!phoneRegex.test(value)) {
      return "전화번호는 010-1234-5678 형식으로 입력해주세요.";
    }
  }

  return "";
};

export const validateAllFields = (
  formData: Record<string, string>,
  fieldRules: ValidationRule[]
): Record<string, string> => {
  const errors: Record<string, string> = {};

  fieldRules.forEach((rule) => {
    const value = formData[rule.name] || "";
    const error = validateField(value, rule);
    if (error) {
      errors[rule.name] = error;
    }
  });

  return errors;
};

export const getErrorSummary = (errors: Record<string, string>): string => {
  const errorCount = Object.keys(errors).length;
  if (errorCount === 0) return "";

  const firstError = Object.values(errors)[0];
  return `총 ${errorCount}개의 입력 오류가 있습니다. 첫 번째 오류: ${firstError}`;
};
