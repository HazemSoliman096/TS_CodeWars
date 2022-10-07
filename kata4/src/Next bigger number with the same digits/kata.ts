export function nextBigger(n: number): number {
  let digits:number[] = n.toString().split('').map(x => parseInt(x));
  if (!(digits.every(v => v === digits[0])) && !(digits.length === 1)) {
     let index: number = digits.length - 1
    while (index > 0) {
      if (digits[index] === digits[index - 1]) {
        index -= 1;
      } else if (digits[index] < digits[index - 1]) {
        index -= 1;
      } else {
        let arr:number[] = digits.slice(index-1);
        arr.sort((x, x1) => x > x1 ? 1 : -1);
         digits[index-1] = arr.pop();
         digits = digits.slice(0, index).concat(arr);
         return parseInt(digits.join(''));
      }
    }
  }
  return -1;
}