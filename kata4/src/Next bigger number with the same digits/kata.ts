export function nextBigger(n: number): number {
  let digits: number[] = n.toString().split('').map(x => parseInt(x));
  if (!(digits.every(v => v === digits[0])) && !(digits.length === 1)) {
     let index: number = digits.length - 1
    while (index > 0) {
      if (digits[index] === digits[index - 1]) {
        index -= 1;
      } else if (digits[index] < digits[index - 1]) {
        index -= 1;
      } else {
        let num: number = digits[index];
        digits[index] = digits[index - 1];
        digits[index - 1] = num;
        return parseInt(digits.join(''));
      }
    }
  }
  return -1;
}