export class Vector {
  
  private component:number[];

  constructor(components: number[]) {
    this.component = components;
  }

  public add(vector:Vector):Vector {
    let result = new Vector([this.component.length]);
    if(this.component.length === vector.component.length) {
      this.component.forEach((e, i) => {
        result.component[i] = e + vector.component[i]
      });
    } else {
      throw Error;
    }
    return result;
  }

  public subtract(vector:Vector):Vector {
    let result = new Vector([this.component.length]);
    if(this.component.length === vector.component.length) {
      this.component.forEach((e, i) => {
        result.component[i] = e - vector.component[i]
      });
    } else {
      throw Error;
    }
    return result;
  }

  public dot(vector:Vector):number {
    let result:number = 0;
    if(this.component.length === vector.component.length) {
      this.component.forEach((e, i) => result += e * vector.component[i]);
    } else {
      throw Error;
    }
    return result;
  }


  public norm():number {
      return Math.sqrt(this.component.reduce((c, e) => c + Math.pow(e, 2), 0));
    }

  public toString():string {
    let str:string;
    str = "(".concat(this.component.toString()).concat(")");
    return str;
  }

  public equals(vector:Vector):boolean {
    let result:boolean = true;
    if(this.component.length === vector.component.length) {
      this.component.forEach((e,i) => {
        if(e !== vector.component[i]) {
          result = false;
        }
      });
      return result;
    } else {
      return result;
    }
  }
};