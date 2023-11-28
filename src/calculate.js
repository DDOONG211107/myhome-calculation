import dataArr from "./data/dataArr";

const middleAmple = "중급 앰플 필요";
const lowAmple = "하급 앰플 필요";
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

function pushDataToResultArr(data, typeNum, calculatedTime, arr) {
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
  isMine,
  isTree,
  isFruit,
  isFarm,
  isAnimal,
  isFish
) {
  const arr = [];

  dataArr.map((data) => {
    if (percent === 0) {
      arr.push({
        type: data.type,
        name: data.name,
        time: data.time,
        exp: data.exp,
        id: data.id,
        bonus: data.bonus,
        isPossible: false,
        portion: impossibleString,
      });
    }
    const calculatedTime = (data.time * percent) / 100;
    if (isMine) {
      pushDataToResultArr(data, 1, calculatedTime, arr);
    }
    if (isTree) {
      console.log(data, calculatedTime);
      pushDataToResultArr(data, 2, calculatedTime, arr);
    }
    if (isFruit) {
      console.log(data, calculatedTime);
      pushDataToResultArr(data, 3, calculatedTime, arr);
    }
    if (isFarm) {
      pushDataToResultArr(data, 4, calculatedTime, arr);
    }

    if (isAnimal) {
      pushDataToResultArr(data, 5, calculatedTime, arr);
    }
    if (isFish) {
      pushDataToResultArr(data, 6, calculatedTime, arr);
    }

    if (!isMine && !isTree && !isFruit && !isFarm && !isFish && !isAnimal) {
      if (calculatedTime > 60 * 60) {
        arr.push({
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
        arr.push({
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
        arr.push({
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

  return arr;
}
