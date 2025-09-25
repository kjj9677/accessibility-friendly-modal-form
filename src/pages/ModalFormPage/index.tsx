import { useState } from "react";
import { openContactModal } from "../../utils/openContactModal";
import {
  descriptionStyle,
  pageStyle,
  titleStyle,
  triggerStyle,
} from "../../styles/ModalFormPageStyles";

const ModalFormPage = () => {
  const [lastResult, setLastResult] = useState<Record<string, string> | null>(
    null
  );

  const handleOpenContactModal = async () => {
    try {
      const result = await openContactModal();
      setLastResult(result);

      if (result) {
        alert(
          `제출 완료!\n이름: ${result.name}\n이메일: ${
            result.email
          }\n전화번호: ${result.phone || "(없음)"}\n메시지: ${
            result.message || "(없음)"
          }`
        );
      }
    } catch (error) {
      console.error("모달 오류:", error);
    }
  };

  return (
    <div style={pageStyle}>
      <h1 style={titleStyle}>접근성 친화적 모달 폼</h1>
      <p style={descriptionStyle}>
        키보드 탐색, 스크린 리더 지원, 포커스 관리 등 웹 접근성 표준을 준수한
        모달 폼 컴포넌트입니다. 아래 버튼을 클릭하거나 Enter/Space 키를 눌러
        폼을 열어보세요.
      </p>

      <button style={triggerStyle} onClick={handleOpenContactModal}>
        연락처 정보 입력하기
      </button>

      {lastResult && (
        <div
          style={{
            marginTop: "24px",
            padding: "16px",
            backgroundColor: "#f0f0f0",
            borderRadius: "8px",
          }}
        >
          <h3>제출된 결과:</h3>
          <pre>{JSON.stringify(lastResult, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default ModalFormPage;
