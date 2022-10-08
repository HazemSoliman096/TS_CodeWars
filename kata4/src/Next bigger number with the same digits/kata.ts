export function nextBigger(n: number): number {

  let digits:number[] = n.toString().split('').map(x => parseInt(x));

  if (!(digits.every(v => v === digits[0])) && !(digits.length === 1)) {

     let index: number = digits.length - 1

    while (index > 0) {

      if (digits[index] > digits[index - 1]) {
        
        let arr:number[] = digits.slice(index - 1).sort((x, x1) => x > x1 ? 1 : -1);

        let arr2:number[] = [arr[arr.length - 1]].concat(arr.slice(0,arr.length - 1));

        let arr3:number[] = [arr[arr.length - 2]].concat(arr.slice(0,arr.length - 2)).concat([arr[arr.length - 1]]);

        let num:string = digits.slice(0, index - 1> 0? index-1:0).join('');

        digits = digits.slice(0, index - 1).concat(parseInt(arr2.join('')) > parseInt(arr3.join('')) && parseInt(num.concat(arr3.join(''))) > n ? arr3 : arr2);
        
         return parseInt(digits.join(''));
      } else {
        index -= 1
      }
    }
  }
  return -1;
}