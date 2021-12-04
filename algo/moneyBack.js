const money = [5, 2, 1];

export function giveMoneyBack(value, cash) {
  let currencyLeftOver = Number(value);
  const change = [];
  let result = {
    success: false,
    data: -1,
  };
  if (currencyLeftOver) {
    cash
      .sort((a, b) => b - a)
      .forEach((item) => {
        while (currencyLeftOver >= item) {
          currencyLeftOver -= item;
          change.push(item);
        }
      });
  } else if (Number.isNaN(currencyLeftOver)) {
    return result;
  }

  result = {
    success: !currencyLeftOver,
    data: !currencyLeftOver ? change.length : -1,
  };
  console.log(result);
  return result;
}

giveMoneyBack(10, money);
