// 1. HTML 요소 선택 
const todoInput = document.getElementById('todo-input') as HTMLInputElement;
const todoForm = document.getElementById('todo-form') as HTMLFormElement;
const todoList = document.getElementById('todo-list') as HTMLUListElement;
const doneList = document.getElementById('done-list') as HTMLUListElement;

// 2. 할 일이 어떻게 생긴건지 type 정의
//-할 일 목록 렌더링 하는 함수를 정의
// 3. 할 일 텍스트 입력 처리 함수
// 4. 할 일 추가 처리 함수
// 5. 할 일 상태 변경 (완료로 이동)
// 6. 완료된 할 일 삭제 함수
// 7. 할 일 아이템 생성 함수 (완료 여부에 따라 버튼 텍스트나 색상 설정)
// 8. 폼 제출 이벤트 리스너