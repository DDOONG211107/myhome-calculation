if (isTree) {
  if (isPicked(data, 2)) {
    if (calculatedTime <= 60 * 60 && calculatedTime > 5 * 60) {
      //console.log(data);
      arr.push({
        type: 2,
        name: data.name,
        time: calculatedTime / 60,
        exp: data.exp,
        id: data.id,
        bonus: data.bonus,
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
        portion: lowAmple,
      });
      return;
    }
    return;
  }
}
