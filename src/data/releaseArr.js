const releaseArr = [
  // {
  //   date: "23.12.06",
  //   id: "r7",
  //   title: "회원가입 및 로그인 기능 추가",
  //   strArr: [
  //     "회원가입 및 로그인 기능 구현",
  //     "회원별 세팅 저장 기능 구현",
  //     "회원별 세팅 기록 DB에 저장",
  //   ],
  // },
  // strArr: [
  //   "pc와 모바일버전 ui 정렬 및 개선",
  //   "레벨업 계산기에 생산물 추가 기재 고려",
  //   '레벨업 '
  // ],
  {
    date: "23.12.16",
    id: "r11",
    title: "ui 및 레벨업 계산기 개선",
    strArr: ["레벨별 필요 경험치 표 생성"],
    isCompleted: false,
  },
  {
    date: "23.12.16",
    id: "r10",
    title: "호두나무 버그 수정",
    strArr: ["큰 호두나무 8시간 -> 6시간으로 오류 수정"],
    isCompleted: true,
  },
  {
    date: "23.12.16",
    id: "r10",
    title: "호두나무 버그 수정",
    strArr: ["큰 호두나무 8시간 -> 6시간으로 오류 수정"],
    isCompleted: true,
  },
  {
    date: "23.12.11",
    id: "r9",
    title: "레벨업 계산기 추가",
    strArr: [
      "특정 레벨을 목표로 하는 경험치 계산기",
      "필요한 앰플과 골드 기재",
    ],
    isCompleted: true,
  },
  {
    date: "23.12.07",
    id: "r8",
    title: "ui 개선",
    strArr: [
      '"필요 시간" -> "남은 시간", "중급 및 초급 앰플" -> "1시간 및 5분 앰플"로 표기 수정',
      "카드 바탕 하늘색 삭제",
      "헤더, 서랍 크기 축소",
      "아이템들 배경색 변경: (진한 파랑, 하늘) => (초록, 빨강)",
      "개발자노트 ui 개선",
    ],
    isCompleted: true,
  },
  {
    date: "23.12.02",
    id: "r7",
    title: "ux, ui 개선",
    strArr: [
      "생단 계산기에 체크 형식으로 생단셋 입력할 수 있도록 ux 개선",
      "pc버전 계산기 input ui 개선",
    ],
    isCompleted: true,
  },
  {
    date: "23.11.29",
    id: "r6",
    title: "ux, ui 개선",
    strArr: ["footer에 이메일폼 추가", "모달창 구현"],
    isCompleted: true,
  },
  {
    date: "23.11.28",
    id: "r5",
    title: "생산 경험치 계산 기능 추가",
    strArr: ["생단 퍼센트와 생산 경험치를 함께 계산할 수 있는 기능 구현"],
    isCompleted: true,
  },
  {
    date: "23.11.28",
    id: "r4",
    title: "ui, ux 개선",
    strArr: ["모바일용 drawer 구현", "pc와 모바일 헤더 구현"],
    isCompleted: true,
  },
  {
    date: "23.11.28",
    id: "r3",
    title: "ux 개선",
    strArr: [
      "목재와 과일 나무 구분",
      "일부 과일 나무와 동물의 경험치 추가",
      "개발자 노트 추가",
    ],
    isCompleted: true,
  },
  {
    date: "23.11.27",
    id: "r2",
    title: "디자인 개선",
    strArr: ["계산기 기능 모바일에서 사용가능하도록 변경", "ui 개선"],
    isCompleted: true,
  },
  {
    date: "23.11.26",
    id: "r1",
    title: "첫 배포",
    strArr: [
      "계산기 기능은 pc버전만 가능",
      "커뮤니티 기능은 pc, 모바일 둘 다 가능",
    ],
    isCompleted: true,
  },
];

export default releaseArr;
