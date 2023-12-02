import classes from "./EmailForm.module.css";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Fragment } from "react";

export default function EmailForm(props) {
  const form = useRef();
  const [submitEmail, setSubmitEmail] = useState(false);
  const [submitEmailError, setSubmitEmailError] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
          setSubmitEmail(true);
        },
        (error) => {
          console.log(error.text);
          setSubmitEmailError(true);
        }
      );
  };

  return (
    <Fragment>
      {!submitEmail && !submitEmailError && (
        <form ref={form} onSubmit={sendEmail}>
          <div className={classes.emailFormNameInput}>
            <label>인게임 닉네임, 레벨</label>
            <br />
            ex:참새가참세 / 64
            <br />
            <input type="text" name="user_name" />
          </div>
          <div className={classes.emailFormAddressInput}>
            <label>본인의 이메일 주소</label>
            <br />
            주소를 입력하지 않으면 피드백 답장을 받을 수 없어요!
            <br />
            <input type="email" name="user_email" />
          </div>
          <div className={classes.emailFormContent}>
            <label>피드백 내용</label>
            <br />
            <textarea name="message" />
            <br />
            <input type="submit" value="보내기" />
          </div>
        </form>
      )}
      {submitEmail && !submitEmailError && (
        <p>메일이 성공적으로 전송되었습니다</p>
      )}
      {!submitEmail && submitEmailError && <p>오류가 생겼어요</p>}
    </Fragment>
  );
}
