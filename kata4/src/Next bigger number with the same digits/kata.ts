export function nextBigger(n: number): number {
  let digits:number[] = n.toString().split('').map(x => parseInt(x));
  let index: number = digits.length - 1

  if (!(digits.every(v => v === digits[0])) && (!(digits.length === 1))) {
  while (index > 0) {
    if (digits[index] > digits[index - 1]) {
      let arr:number[] = digits.splice(index - 1);
      let num1:number = Math.min.apply(0, arr.filter(x => x > arr[0]));
      arr.splice(arr.indexOf(num1), 1);
      return parseInt(digits.concat([num1]).concat(arr.sort()).join(''));
    }
    index -= 1;
  }
}
return -1;
}