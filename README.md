# 접근성 친화적 모달 폼

웹 접근성 표준을 준수하는 모달 폼 컴포넌트 구현 예제입니다. 키보드 탐색, 스크린 리더 지원, 포커스 관리 등 다양한 접근성 기능을 포함하고 있습니다.

## 🚀 실행 방법

```bash
npm install
npm run dev
```

## 🗂 폴더 구조

```
src/
├── ModalForm/              # 재사용 가능한 모달 폼 컴포넌트
│   ├── components/         # 개별 컴포넌트들
│   ├── context/           # Context API
│   ├── hooks/             # 커스텀 훅
│   ├── styles/            # 스타일 정의
│   ├── utils/             # 유틸리티 함수
│   └── types.ts           # 타입 정의
├── pages/
│   └── ModalFormPage/     # 사용 예시 페이지
│       ├── components/    # 페이지별 컴포넌트
│       └── index.tsx
└── utils/
    └── openContactModal.tsx # 선언적 호출 함수
```

## ✨ 구현된 접근성 기능

### 키보드 탐색
- **Tab/Shift+Tab**: 폼 요소 간 순환 탐색
- **ESC**: 모달 닫기
- **Enter/Space**: 버튼 활성화

### 포커스 관리
- 모달 열림 시 제목 요소로 포커스 이동
- 모달 닫힘 시 트리거 버튼으로 포커스 복원
- 탭 트랩 (모달 내에서만 포커스 순환)

### 스크린 리더 지원
- **ARIA 속성**: `aria-modal`, `aria-labelledby`, `aria-describedby`
- **Live Region**: 유효성 검사 오류 즉시 알림
- **Role 속성**: 적절한 의미 전달

### 유효성 검사
- 실시간 필드 검증
- 제출 과정에서 오류 발생 시 첫 번째 오류 필드로 포커스 이동
- 스크린 리더용 오류 요약 메시지

### 사용성 개선
- 모달 열림 시 배경 스크롤 방지
- `prefers-reduced-motion` 설정 고려한 애니메이션
- 오버레이 클릭으로 모달 닫기

## 🔧 재사용성 설계

### Context API 패턴
```typescript
const { formData, setFormData, errors, close } = useModalForm();
```

### 선언적 호출 방식
```typescript
const result = await openContactModal();
if (result) {
  console.log('제출된 데이터:', result);
}
```

### 합성 컴포넌트 기반 구조
```jsx
  <ModalForm.Content>
    <ModalForm.Header>제목</ModalForm.Header>
    <ModalForm.Body>
      <ModalForm.Field name="email" label="이메일" required />
    </ModalForm.Body>
    <ModalForm.Footer>
      <ModalForm.Cancel />
      <ModalForm.Submit />
    </ModalForm.Footer>
  </ModalForm.Content>
```


