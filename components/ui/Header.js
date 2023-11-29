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

  return (
    <header className={classes.header}>
      <div className={classes.title}>마이홈 생단 계산기</div>
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
          direction="top"
          size="10.5rem"
        >
          <div>
            <ol className={classes.drawerLists}>
              <li onClick={clickCalculHandler}>
                <Link href="/">생단 계산기</Link>
              </li>
              <li onClick={clickCommentsHandler}>
                <Link href="/comments">소통 게시판</Link>
              </li>
              <li onClick={clickReleaseHandler}>
                <Link href="/release-note">개발자 노트</Link>
              </li>
            </ol>
          </div>
        </Drawer>
      </div>
    </header>
  );
}
