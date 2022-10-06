export function nextBigger(n: number): number {
  return parseInt(n.toString().split('').sort((n1,n2) => parseInt(n1) > parseInt(n2) ? -1 : 1).join(''));
}