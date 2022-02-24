/* eslint-disable @typescript-eslint/no-unused-vars */
//========================================================
// 砂場
//========================================================

const A = 1

const multiply10 = (val1: number, val2: number) => {
  return val1 * val2 //OK
}

const multiply20 = (val1: number, val2: number): number => {
  return val1 * val2 //OK
}

//const multiply2a = <N>(val1: N, val2: N): N => {
//  return val1 * val2; //Error stringの場合に * が使えない
//}
// 掛け算をしている点ですでに number 以外の試用を想定していない

const multiply30 = <N extends number>(val1: N, val2: N): number => {
  return val1 * val2 //OK
}

const multiply40 = <N extends number>(val1: N, val2: N) => {
  return val1 * val2 //OK
}

const multiply50 = <N extends number>(val1: N, val2: N): N => {
  //これがなぜできないか不明
  //return val1 + 1;              // Error
  //return val1 + val2;           // Error
  //return val1 * val2;           // Error
  //return val1 * val2 as number; // Error
  //return Number(val1 * val2);   // Error
  //return parseInt(val1 * val2); // Error
  //return parseInt(val1 * val2); // Error
  //return 0;                     // Error
  //if (typeof val1 === "number" && typeof val2 === "number") return val1 * val2 //Error
  //else return 0
  //let val3: N = val1 * val2 // Error
  //return val3
  return val1 // OK
  //return val1 * val2 as any;    // OK
  //return val1 * val2 as N;      // OK
}

function multiply560<T>(value: T, n: number): Array<T> {
  const result: Array<T> = []
  result.length = n
  result.fill(value)
  return result
}

// function multiply1b<T>(value: T): T {
//   let result: T = 0;
//   result.length = n;
//   result.fill(value);
//   return result;
// }

// function multiply<T extends number>(value: T, n: T): Array<T> { //OK
//   const result: Array<T> = [];
//   result.length = n;
//   result.fill(value);
//   return result;
// }

// function joint1<T>(txt1: T, txt2: T): string {  //Error
//   return txt1 + txt2;
// }

function joint2a<T extends string>(txt1: T, txt2: T): string {
  //OK
  return txt1 + txt2
}

const joint2b = <T extends string>(txt1: T, txt2: T): string => {
  //OK
  return txt1 + txt2
}

const joint2c = <T extends string>(txt1: T, txt2: string): string => {
  //OK
  return txt1 + txt2
}

function joint3<T>(txt1: T, txt2: T): string {
  //OK
  if (typeof txt1 === "string" && typeof txt2 === "string") return txt1 + txt2
  else return ""
}

// function joint4<T extends string, S>(txt1: T, txt2: T): S {  //OK
//   return txt1 + txt2;
// }

const getValue = (a: number, b: number): string => {
  joint3(String(a), b.toString())
  return ""
}

export default getValue
