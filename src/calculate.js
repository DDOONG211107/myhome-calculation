import dataArr from "./data/dataArr";

const middleAmple = "1시간 앰플 필요";
const lowAmple = "5분 앰플 필요";
const impossibleString = "현재 불가능";

export function clickHanlder() {
  console.log("src폴더에 있는 calcultate에서 버튼을 눌렀습니다");
}

export function calculateHandler(enteredValue) {
  //console.log(enteredValue);
  const value = parseInt(enteredValue);
  if (value >= 0 && value <= 100) {
    return 100 - value;
  }
  return -1;
}

function isMultiple(num, mul) {
  if (num % mul === 0) {
    return true;
  } else {
    return false;
  }
}

export function pickNumber(percent, even, three, five) {
  const arr = [];
  console.log(percent);
  console.log(even, three, five);

  dataArr.map((data) => {
    if (data <= percent) {
      if (even) {
        //console.log("짝수만 출력해야 함");
        if (isMultiple(data, 2)) {
          //console.log(data);
          arr.push(data);
          return;
        }
      }
      if (three) {
        //console.log("3의 배수만 출력해야 함");
        if (isMultiple(data, 3)) {
          //console.log(data);
          arr.push(data);
          return;
        }
      }
      if (five) {
        //console.log("3의 배수만 출력해야 함");
        if (isMultiple(data, 5)) {
          //console.log(data);
          arr.push(data);
          return;
        }
      }
      if (!even && !three && !five) {
        arr.push(data);
        return;
      }
    }
  });

  return arr;
}

function pushDataToResultArr(
  data,
  typeNum,
  calculatedTime,
  calculatedExpVal,
  arr
) {
  // console.log(calculatedExpVal);
  if (isPicked(data, typeNum)) {
    if (calculatedTime > 60 * 60) {
      arr.push({
        type: typeNum,
        name: data.name,
        time: calculatedTime / 60,
        exp: data.exp,
        id: data.id,
        bonus: data.bonus,
        isPossible: false,
        portion: impossibleString,
      });
    } else if (calculatedTime <= 60 * 60 && calculatedTime > 5 * 60) {
      arr.push({
        type: typeNum,
        name: data.name,
        time: calculatedTime / 60,
        exp: data.exp,
        id: data.id,
        bonus: data.bonus,
        isPossible: true,
        portion: middleAmple,
      });
      return;
    } else if (calculatedTime <= 5 * 60) {
      arr.push({
        type: 2,
        name: data.name,
        time: calculatedTime / 60,
        exp: data.exp,
        id: data.id,
        bonus: data.bonus,
        isPossible: true,
        portion: lowAmple,
      });
      return;
    }
    return;
  }
}

function isPicked(data, typeNum) {
  if (data.type === typeNum) {
    return true;
  } else {
    return false;
  }
}

// type: 1,2,3,4,5 (광산, 나무, 농사, 동물, 낚시)
export function pickCondition(
  percent,
  expPercent,
  isMine,
  isTree,
  isFruit,
  isFarm,
  isAnimal,
  isFish
) {
  const resultArr = [];

  const calculatedExpVal = (+expPercent + 100) / 100;
  const calculatedArr = dataArr.map((data) => {
    return { ...data, exp: Math.floor(calculatedExpVal * data.exp) };
  });

  calculatedArr.map((data) => {
    if (percent === -1) {
      // console.log("-1에 들어옴");
      resultArr.push({
        type: data.type,
        name: data.name,
        time: data.time,
        exp: data.exp,
        id: data.id,
        bonus: data.bonus,
        isPossible: false,
        portion: impossibleString,
      });
      return;
    }
    const calculatedTime = (data.time * percent) / 100;

    if (isMine) {
      pushDataToResultArr(data, 1, calculatedTime, calculatedExpVal, resultArr);
    }
    if (isTree) {
      // console.log(data, calculatedTime);
      pushDataToResultArr(data, 2, calculatedTime, calculatedExpVal, resultArr);
    }
    if (isFruit) {
      // console.log(data, calculatedTime);
      pushDataToResultArr(data, 3, calculatedTime, calculatedExpVal, resultArr);
    }
    if (isFarm) {
      pushDataToResultArr(data, 4, calculatedTime, calculatedExpVal, resultArr);
    }

    if (isAnimal) {
      pushDataToResultArr(data, 5, calculatedTime, calculatedExpVal, resultArr);
    }
    if (isFish) {
      pushDataToResultArr(data, 6, calculatedTime, calculatedExpVal, resultArr);
    }

    if (!isMine && !isTree && !isFruit && !isFarm && !isFish && !isAnimal) {
      if (calculatedTime > 60 * 60) {
        resultArr.push({
          type: data.type,
          name: data.name,
          time: calculatedTime / 60,
          exp: data.exp,
          id: data.id,
          bonus: data.bonus,
          isPossible: false,
          portion: impossibleString,
        });
      } else if (calculatedTime <= 60 * 60 && calculatedTime > 5 * 60) {
        //console.log(data);
        resultArr.push({
          type: data.type,
          name: data.name,
          time: calculatedTime / 60,
          exp: data.exp,
          id: data.id,
          bonus: data.bonus,
          isPossible: true,
          portion: middleAmple,
        });
        return;
      } else if (calculatedTime <= 5 * 60) {
        resultArr.push({
          type: data.type,
          name: data.name,
          time: calculatedTime / 60,
          exp: data.exp,
          id: data.id,
          bonus: data.bonus,
          isPossible: true,
          portion: lowAmple,
        });
        return;
      }
      return;
    }
  });

  return resultArr;
}
