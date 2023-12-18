import { useState } from "react";
import classes from "./Header.module.css";
import Drawer from "react-modern-drawer";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import "react-modern-drawer/dist/index.css";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const router = useRouter();
  const clickCalculHandler = () => {
    router.push("/");
  };
  const clickCommentsHandler = () => {
    router.push("/comments");
  };
  const clickReleaseHandler = () => {
    router.push("/release-note");
  };
  const clickLevelupCalHandler = () => {
    router.push("/levelup-cal");
  };
  const clickLevelupCalNoticeHandler = () => {
    router.push("/levelup-cal/notice");
  };
  const clickLevelupCalTableHandler = () => {
    router.push("/levelup-cal/levelupTable");
  };

  return (
    <header className={classes.header}>
      <div className={classes.title}>
        <Link href="/">마이홈 생단 계산기</Link>
      </div>
      <div>
        {/* <button onClick={toggleDrawer}>Show</button> */}
        <GiHamburgerMenu
          onClick={toggleDrawer}
          className={classes.hamburgerIcon}
        />
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          className={classes.drawer}
          direction="right"
          // size="10.5rem"
        >
          <div>
            <ol className={classes.drawerLists}>
              <li onClick={clickCalculHandler}>
                <Link href="/">마이홈 생단 계산기</Link>
              </li>
              <li onClick={clickLevelupCalHandler}>
                <Link href="/levelup-cal">레벨업 계산기</Link>
              </li>
              <li onClick={clickLevelupCalNoticeHandler}>
                <Link href="/levelup-cal">ㄴ주의사항</Link>
              </li>
              <li onClick={clickLevelupCalTableHandler}>
                <Link href="/levelup-cal/levelupTable">레벨별 필요 경험치</Link>
              </li>
              <li onClick={clickCommentsHandler}>
                <Link href="/comments">마이홈 소통 게시판</Link>
              </li>
              <li onClick={clickReleaseHandler}>
                <Link href="/release-note">개발자 노트</Link>
              </li>
            </ol>
          </div>
        </Drawer>
      </div>
      <nav className={classes.navigation}>
        <ol>
          <li>
            <Link href="/levelup-cal">레벨업 계산기</Link>
          </li>

          <li>
            <Link href="/levelup-cal/notice">레벨업 계산기 주의사항</Link>
          </li>
          <li>
            <Link href="/levelup-cal/levelupTable">레벨별 필요 경험치</Link>
          </li>
          <li>
            <Link href="/comments">소통 게시판</Link>
          </li>
          <li>
            <Link href="/release-note">개발자 노트</Link>
          </li>
        </ol>
      </nav>
    </header>
  );
}
