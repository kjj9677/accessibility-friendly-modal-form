import { useEffect, useRef } from "react";
import { ModalForm } from "./ModalForm";
import { useModalForm } from "./ModalForm/context/useModalForm";

interface ContactFormProps {
  onSubmit: (data: Record<string, string>) => void;
  onCancel?: () => void;
  isOpen?: boolean;
}

const ContactFormContent = ({
  isOpen,
  onCancel,
}: {
  isOpen?: boolean;
  onCancel?: () => void;
}) => {
  const { open, isOpen: modalIsOpen } = useModalForm();
  const hasOpenedRef = useRef(false);

  useEffect(() => {
    if (isOpen) {
      open();
    }
  }, [isOpen, open]);

  useEffect(() => {
    if (modalIsOpen) {
      hasOpenedRef.current = true;
    }
  }, [modalIsOpen]);

  useEffect(() => {
    if (hasOpenedRef.current && !modalIsOpen && onCancel) {
      onCancel();
    }
  }, [modalIsOpen, onCancel]);

  return (
    <ModalForm.Content>
      <ModalForm.Header>연락처 정보를 입력해주세요</ModalForm.Header>
      <ModalForm.Body>
        <ModalForm.Field
          name="name"
          label="이름"
          required
          placeholder="홍길동"
        />
        <ModalForm.Field
          name="email"
          label="이메일"
          type="email"
          required
          placeholder="hong@example.com"
        />
        <ModalForm.Field
          name="phone"
          label="전화번호"
          type="tel"
          placeholder="010-1234-5678"
        />
        <ModalForm.Field
          name="message"
          label="메시지"
          as="textarea"
          placeholder="추가로 전달하고 싶은 내용이 있으시면 작성해주세요."
          rows={4}
        />
      </ModalForm.Body>
      <ModalForm.Footer>
        <ModalForm.Cancel>취소</ModalForm.Cancel>
        <ModalForm.Submit>제출하기</ModalForm.Submit>
      </ModalForm.Footer>
    </ModalForm.Content>
  );
};

export const ContactForm = ({
  onSubmit,
  onCancel,
  isOpen,
}: ContactFormProps) => {
  return (
    <ModalForm onSubmit={onSubmit} onCancel={onCancel}>
      <ContactFormContent isOpen={isOpen} onCancel={onCancel} />
    </ModalForm>
  );
};
