import ReactModal from "react-modal";
import classes from "./MyModal.module.css";
import MyButton from "./MyButton";
import { IoMdClose } from "react-icons/io";

export default function MyModal(props) {
  console.log("모달창 활성화");
  return (
    <ReactModal
      shouldCloseOnOverlayClick={true}
      ariaHideApp={false}
      onRequestClose={props.onClose}
      isOpen={props.isOpen}
      className={classes.myModal}
      overlayClassName={classes.myOverlay}
    >
      <div className={classes.myModalHeader}>
        <div className={classes.myModalHeaderTitle}>
          {props.modalHeaderTitle}
        </div>
        <div className={classes.myModalHeaderCloseBtn}>
          <MyButton onClick={props.onClick}>
            <IoMdClose />
          </MyButton>
        </div>
      </div>
      <div className={classes.myModalMain}>{props.children}</div>
    </ReactModal>
  );
}
