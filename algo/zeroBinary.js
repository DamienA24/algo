function convertIntegerToBinary(integer) {
  if (Number.isSafeInteger(integer) && integer >= 0) {
    let num = integer;
    let binary = (num % 2).toString();
    while (num > 1) {
      num = parseInt(num / 2);
      binary += num % 2;
    }
    return binary.split("").reverse().join("");
  }
  return null;
}

export function findMaxZeroQuantity(integer) {
  const binary = convertIntegerToBinary(integer);
  let max = -1;
  let count = 0;

  if (binary) {
    max = 0;
    for (let i = 0; i < binary.length; i++) {
      switch (binary[i]) {
        case "1":
          if (count) {
            count = 0;
          }
          break;
        default:
          count++;
          if (count && count > max) {
            max = count;
          }
          break;
      }
    }
  }
  console.log(max);
  return max;
}

findMaxZeroQuantity(123456);
