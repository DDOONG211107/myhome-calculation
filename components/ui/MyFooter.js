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
        <EmailForm />
        {/* <button onClick={clickMailFormModalHandler}>
          모달 닫기 으아아아ㅏㅇ
        </button> */}
      </MyModal>
    </div>
  );
}

export default MyFooter;
