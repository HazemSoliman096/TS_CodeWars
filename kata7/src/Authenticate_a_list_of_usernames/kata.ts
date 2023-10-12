export function authList(arr: string[]): boolean {
  for (let i: number = 0; i < arr.length; i++) {
    if (!checkName(arr[i])) {
      return false;
    }
  }
  return true;
}

function checkName(name: string): boolean {

  if (name.length > 10 && name.length < 6) {
    return false;
  }

  if (!(/^[A-Za-z]+[0-9]+$/.test(name))) {
    return false;
  }

  return true;
}
