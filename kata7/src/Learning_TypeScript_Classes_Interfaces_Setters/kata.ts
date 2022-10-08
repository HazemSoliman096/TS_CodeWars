declare var ICuboid: {
  new (length: number): ICuboid;
}

interface ICuboid {
  /** Length of the cube */
  length: number;
  /** Surface area of the cube */
  surfaceArea: number;
  /** Volume of the cube */
  volume: number;
}

export class Cube implements ICuboid {
  public _length: number;
  public _surfaceArea: number;
  public _volume: number;

  constructor(length: number) {
    this._length = length;
    this._surfaceArea = 6 * Math.pow(this._length, 2);
    this._volume = Math.pow(this._length, 3);
  }

  public get length() {
    return this._length;
  }

  public get surfaceArea() {
    return 6 * Math.pow(this._length, 2);
  }
  
  public get volume() {
    return Math.pow(this._length, 3);
  }


  public set length(length: number) {
    this._length = length;
    this._surfaceArea = 6 * Math.pow(length, 2);
    this._volume = Math.pow(length, 3);
  }

  public set surfaceArea(surfaceArea: number) {
    this._surfaceArea = surfaceArea;
    this._length = Math.sqrt(surfaceArea / 6);
    this._volume = Math.pow(this._length, 3);
  }
  
  public set volume(volume: number) {
    this._volume = volume;
    this._length = Math.cbrt(volume);
    this._surfaceArea = 6 * Math.pow(this._length, 2);
  }
}