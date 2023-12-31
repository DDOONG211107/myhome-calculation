import classes from "./Release.module.css";
import ReleaseList from "./ReleaseList";
import releaseArr from "@/src/data/releaseArr";

// const releaseArr = [
//   {
//     date: "23.11.28",
//     id: "r4",
//     title: "ui, ux 개선",
//     strArr: ["모바일용 drawer 구현", "pc와 모바일 헤더 구현"],
//     isCompleted: false,
//   },
//   {
//     date: "23.11.28",
//     id: "r3",
//     title: "ux 개선",
//     strArr: [
//       "목재와 과일 나무 구분",
//       "일부 과일 나무와 동물의 경험치 추가",
//       "개발자 노트 추가",
//     ],
//     isCompleted: true,
//   },
//   {
//     date: "23.11.27",
//     id: "r2",
//     title: "디자인 개선",
//     strArr: ["계산기 기능 모바일에서 사용가능하도록 변경", "ui 개선"],
//     isCompleted: true,
//   },
//   {
//     date: "23.11.26",
//     id: "r1",
//     title: "첫 배포",
//     strArr: [
//       "계산기 기능은 pc버전만 가능",
//       "커뮤니티 기능은 pc, 모바일 둘 다 가능",
//     ],
//     isCompleted: true,
//   },
// ];

export default function Release() {
  let idx = 0;
  return (
    <div className={classes.releaseNote}>
      <ul className={classes.releaseLists}>
        {releaseArr.map((release) => {
          //   console.log(release.id);
          return <ReleaseList releaseContent={release} />;
        })}
      </ul>
    </div>
  );
}
