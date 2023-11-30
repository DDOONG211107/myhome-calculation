import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>이름</label>
      <input type="text" name="user_name" />
      <label>본인의 이메일 주소</label>
      <input type="email" name="user_email" />
      <label>피드백 내용</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
