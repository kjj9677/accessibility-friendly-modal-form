import { ModalForm } from './ModalForm';
import {
  descriptionStyle,
  pageStyle,
  titleStyle,
  triggerStyle,
} from './styles/ModalFormPageStyles';

const ModalFormPage = () => {
  const handleSubmit = (data: Record<string, string>) => {
    console.log('제출된 데이터:', data);
    alert(
      `제출 완료!\n이름: ${data.name}\n이메일: ${data.email}\n전화번호: ${
        data.phone || '(없음)'
      }\n메시지: ${data.message || '(없음)'}`,
    );
  };

  const handleCancel = () => {
    console.log('폼이 취소되었습니다.');
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>접근성 친화적 모달 폼</h1>
      <p style={descriptionStyle}>
        키보드 탐색, 스크린 리더 지원, 포커스 관리 등 웹 접근성 표준을 준수한
        모달 폼 컴포넌트입니다. 아래 버튼을 클릭하거나 Enter/Space 키를 눌러
        폼을 열어보세요.
      </p>

      <ModalForm onSubmit={handleSubmit} onCancel={handleCancel}>
        <ModalForm.Trigger style={triggerStyle}>
          연락처 정보 입력
        </ModalForm.Trigger>
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
      </ModalForm>
    </div>
  );
};

export default ModalFormPage;
