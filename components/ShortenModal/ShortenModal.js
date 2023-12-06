import { useState } from "react";
import classes from "./ShortenModal.module.css";
import AccShorten from "./AccShorten";
import HairShorten from "./HairShorten";
import { useEffect } from "react";
import { MyCheckBox } from "../ui/MyCheckBox";

export default function ShortenModal(props) {
  const [firstAccShorten, setFirstAccShorten] = useState({ percent: "0" });
  const [secondAccShorten, setSecondAccShorten] = useState({ percent: "0" });
  const [thirdAccShorten, setThirdAccShorten] = useState({ percent: "0" });
  const [fourthAccShorten, setFourthAccShorten] = useState({ percent: "0" });
  const [hairShorten, setHairShorten] = useState({ percent: "0" });
  const [dressShorten, setDressShorten] = useState("0");
  const [petShorten, setPetShorten] = useState("0");
  const [portion1Shorten, setPortion1Shorten] = useState(false);
  const [portion2Shorten, setPortion2Shorten] = useState(false);
  const [totalShorten, setTotalShorten] = useState(0);

  function handleClickFirstAccRadio(event) {
    console.log(event.target.value);
    setFirstAccShorten((prev) => {
      return { ...prev, percent: event.target.value };
    });
  }
  function handleClickSecondAccRadio(event) {
    // console.log(event.target.value);
    setSecondAccShorten((prev) => {
      return { ...prev, percent: event.target.value };
    });
  }
  function handleClickThirdAccRadio(event) {
    // console.log(event.target.value);
    setThirdAccShorten((prev) => {
      return { ...prev, percent: event.target.value };
    });
  }

  function handleClickFourthAccRadio(event) {
    setFourthAccShorten((prev) => {
      return { ...prev, percent: event.target.value };
    });
  }

  function handleClickHairRadio(event) {
    setHairShorten((prev) => {
      return { ...prev, percent: event.target.value };
    });
  }

  useEffect(() => {
    const first = +firstAccShorten.percent;
    const second = +secondAccShorten.percent;
    const third = +thirdAccShorten.percent;
    const fourth = +fourthAccShorten.percent;
    const hair = +hairShorten.percent;
    const dress = +dressShorten;
    const pet = +petShorten;
    const portion1 = portion1Shorten ? 10 : 0;
    const portion2 = portion2Shorten ? 10 : 0;
    const total =
      first +
      second +
      third +
      fourth +
      hair +
      dress +
      pet +
      portion1 +
      portion2;

    setTotalShorten(total);
  }, [
    firstAccShorten,
    secondAccShorten,
    thirdAccShorten,
    fourthAccShorten,
    hairShorten,
    dressShorten,
    petShorten,
    portion1Shorten,
    portion2Shorten,
  ]);

  const closeModal = () => {
    props.onClose();
  };

  function clickApplyHandler() {
    props.onApply(totalShorten);
    closeModal();
  }

  return (
    <div className={classes.shortenModalMain}>
      <div className={classes.shortenCheck}>
        <div className={classes.accShorten}>
          <AccShorten
            name="firstAcc"
            title="악세1 생단: "
            onChange={handleClickFirstAccRadio}
          />
          <AccShorten
            name="secondAcc"
            title="악세2 생단: "
            onChange={handleClickSecondAccRadio}
          />
          <AccShorten
            name="thirdAcc"
            title="악세3 생단: "
            onChange={handleClickThirdAccRadio}
          />
          <AccShorten
            name="fourthAcc"
            title="악세4 생단: "
            onChange={handleClickFourthAccRadio}
          />
        </div>
        <div className={classes.otherShorten}>
          <HairShorten
            name="hair"
            title="머리 생단: "
            onChange={handleClickHairRadio}
          />
          {/* <DressShorten
          title="의상 생단: "
          value={dressShorten}
          onChange={handleClickDressSelect}
        /> */}
          <div>
            <label>
              의상 생단:&nbsp;
              <select
                value={dressShorten}
                onChange={(e) => setDressShorten(e.target.value)}
              >
                <option value="0">0%</option>
                <option value="3">3%</option>
                <option value="4">4%</option>
                <option value="5">5%</option>
                <option value="6">6%</option>
              </select>
            </label>
          </div>
          <div>
            <label>
              펫 생단:&nbsp;
              <select
                value={petShorten}
                onChange={(e) => setPetShorten(e.target.value)}
              >
                <option value="0">0%</option>
                <option value="20">20%</option>
                <option value="22">22%</option>
                <option value="25">25%</option>
                <option value="27">27%</option>
                <option value="30">30%</option>
              </select>
            </label>
          </div>
          <div className={classes.portionCheckbox}>
            <MyCheckBox value={portion1Shorten} setFunc={setPortion1Shorten} />
            <label>생단 포션1</label>
            <br />
            <MyCheckBox value={portion2Shorten} setFunc={setPortion2Shorten} />
            <label>생단 포션2</label>
          </div>
        </div>
      </div>
      <div className={classes.shortenResult}>
        총 생산단축&nbsp;
        {totalShorten}%
        <br />
        <div className={classes.buttonDiv}>
          <div onClick={clickApplyHandler} className={classes.button}>
            적용하기
          </div>
          <div onClick={props.onClose} className={classes.cancelButton}>
            취소
          </div>
        </div>
      </div>
    </div>
  );
}
