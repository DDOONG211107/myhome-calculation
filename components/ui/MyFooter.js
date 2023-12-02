import classes from "./MyFooter.module.css";
import { IoMailOutline } from "react-icons/io5";
import { useState } from "react";
import MyModal from "./MyModal";
import MyButton from "./MyButton";
import EmailForm from "../EmailForm/EmailForm";

function MyFooter(props) {
  const [showModal, setShowModal] = useState(false);

  const clickMailFormModalHandler = () => {
    setShowModal(!showModal);
  };

  const closeMailFormModalHandler = () => {
    setShowModal(false);
  };

  return (
    <div className={classes.footer}>
      <div onClick={clickMailFormModalHandler} className={classes.sendMailForm}>
        <IoMailOutline />
      </div>
      <MyModal
        onClose={closeMailFormModalHandler}
        isOpen={showModal}
        onClick={clickMailFormModalHandler}
        modalHeaderTitle={"이메일 보내기"}
      >
        {/* <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exe
        </div> */}
        <EmailForm />
        {/* <button onClick={clickMailFormModalHandler}>
          모달 닫기 으아아아ㅏㅇ
        </button> */}
      </MyModal>
    </div>
  );
}

export default MyFooter;
