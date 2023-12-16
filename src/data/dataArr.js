// const dataArr = [
//   1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
//   23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
// ];

// type: 1,2,3,4,5 (광산, 목재, 과일나무, 농사, 동물, 낚시)
const dataArr = [
  {
    type: 1,
    name: "흙3 광천수2",
    time: 60 * 60, // 초 기준
    exp: 464,
    bonus: null,
    id: 1500,
  },
  {
    type: 1,
    name: "철 5",
    time: 90 * 60,
    exp: 734,
    bonus: "자수정",
    gold: 1510,
    quantity: 10,
    id: 1503,
  },
  {
    type: 1,
    name: "소금 5",
    time: 150 * 60,
    exp: 1376,
    bonus: "에메랄드",
    id: 1504,
  },
  {
    type: 1,
    name: "석회석 5",
    time: 240 * 60,
    exp: 2489,
    bonus: "루비",
    id: 1505,
  },
  {
    type: 1,
    name: "은 5",
    time: 360 * 60,
    exp: 4235,
    bonus: "사파이어",
    id: 1506,
  },
  {
    type: 1,
    name: "금 5",
    time: 480 * 60,
    exp: 6822,
    bonus: "다이아몬드",
    id: 1507,
  },
  {
    type: 1,
    name: "알루미늄 원석 3",
    time: 420 * 60,
    exp: 7179,
    bonus: "흙, 광천수",
    id: 1508,
  },
  {
    type: 1,
    name: "백금 원석 3",
    time: 450 * 60,
    exp: 8413,
    gold: 2709,
    quantity: 3,
    bonus: "철, 소금, 석회석",
    id: 1509,
  },
  {
    type: 2,
    name: "큰 호두나무 10",
    time: 360 * 60,
    exp: 65340,
    gold: 14370,
    quantity: 10,
    id: 1304,
  },
  {
    type: 2,
    name: "큰 오동나무 10",
    time: 210 * 60,
    exp: 32760,
    id: 1303,
  },
  {
    type: 2,
    name: "큰 단풍나무 10",
    time: 70 * 60,
    exp: 5880,
    id: 1302,
  },
  {
    type: 2,
    name: "큰 전나무 10",
    time: 90,
    exp: 90,
    id: 1301,
  },
  {
    type: 3,
    name: "별님의 사과 8",
    time: 10 * 60,
    exp: 96,
    id: 1305,
  },
  {
    type: 3,
    name: "별님의 오렌지 7",
    time: 60 * 60,
    exp: 644,
    id: 1306,
  },
  {
    type: 3,
    name: "별님의 복숭아 6",
    time: 120 * 60,
    exp: 1278,
    id: 1307,
  },
  {
    type: 3,
    name: "별님의 고무 6",
    time: 180 * 60,
    exp: 2106,
    id: 1308,
  },
  {
    type: 3,
    name: "별님의 커피 6",
    time: 240 * 60,
    exp: 2892,
    id: 1309,
  },
  {
    type: 3,
    name: "별님의 바나나 5",
    time: 420 * 60,
    exp: 5605,
    id: 1311,
  },
  {
    type: 3,
    name: "별님의 카카오 5",
    time: 480 * 60,
    exp: 5825,
    id: 1310,
  },
  {
    type: 3,
    name: "별님의 레몬 5",
    time: 480 * 60,
    exp: 8455,
    id: 1314,
  },
  {
    type: 3,
    name: "별님의 야자열매 5",
    time: 540 * 60,
    exp: 7205,
    id: 1312,
  },
  {
    type: 3,
    name: "별님의 체리 5",
    time: 600 * 60,
    exp: 8264,
    id: 1313,
  },
  {
    type: 3,
    name: "별나무",
    time: 24 * 60 * 60,
    exp: 60,
    id: 1800,
  },

  {
    type: 4,
    name: "밀",
    time: 30,
    exp: 3,
    id: 1001,
  },
  {
    type: 4,
    name: "딸기",
    time: 60,
    exp: 6,
    id: 1002,
  },
  {
    type: 4,
    name: "토마토",
    time: 5 * 60,
    exp: 31,
    id: 1003,
  },
  {
    type: 4,
    name: "솜",
    time: 15 * 60,
    exp: 99,
    id: 1004,
  },
  {
    type: 4,
    name: "당근",
    time: 20 * 60,
    exp: 137,
    id: 1005,
  },
  {
    type: 4,
    name: "감자",
    time: 45 * 60,
    exp: 339,
    id: 1006,
  },
  {
    type: 4,
    name: "옥수수",
    time: 90 * 60,
    exp: 756,
    id: 1007,
  },
  {
    type: 4,
    name: "사탕수수",
    time: 60 * 60,
    exp: 534,
    id: 1008,
  },
  {
    type: 4,
    name: "포도",
    time: 120 * 60,
    exp: 1170,
    id: 1009,
  },
  {
    type: 4,
    name: "라벤더",
    time: 180 * 60,
    exp: 1926,
    id: 1010,
  },
  {
    type: 4,
    name: "양배추",
    time: 240 * 60,
    exp: 2914,
    id: 1011,
  },
  {
    type: 4,
    name: "바닐라",
    time: 360 * 60,
    exp: 5790,
    id: 1012,
  },
  {
    type: 4,
    name: "콩",
    time: 480 * 60,
    exp: 10080,
    id: 1013,
  },

  {
    type: 5,
    name: "우유",
    time: 5 * 60,
    exp: 48,
    id: 1201,
  },
  {
    type: 5,
    name: "양털",
    time: 25 * 60,
    exp: 238,
    id: 1202,
  },
  {
    type: 5,
    name: "꿀",
    time: 30 * 60,
    exp: 76,
    id: 1401,
  },
  {
    type: 5,
    name: "달걀",
    time: 60 * 60,
    exp: 450,
    id: 1203,
  },
  {
    type: 5,
    name: "토끼털",
    time: 240 * 60,
    exp: 2410,
    id: 1204,
  },
  {
    type: 5,
    name: "누에고치",
    time: 480 * 60,
    exp: 6015,
    id: 1402,
  },
  {
    type: 5,
    name: "거위털",
    time: 360 * 60,
    exp: 8227,
    id: 1205,
  },
  {
    type: 6,
    name: "꽁치",
    time: 120 * 60,
    exp: 1170,
    id: 1601,
  },
  {
    type: 6,
    name: "새우 랍스터",
    time: 180 * 60,
    exp: 1988,
    id: 1602,
  },
  {
    type: 6,
    name: "연어 참치",
    time: 240 * 60,
    exp: 2914,
    id: 1604,
  },
  {
    type: 6,
    name: "상어 고래",
    time: 420 * 60,
    exp: 5607,
    id: 1606,
  },
];

export default dataArr;
