export function range(start:number) : number[];
export function range(start:number, end:number):number[];
export function range(start:number, end:number, step:number):number[]
export function range(start:number, end?:number, step = 1):number[] {
  const output:number[] = [];


  let e = end;
  let s = start;
  if (end === undefined) {
    e = start;
    s = 0;
  }

  for (let i = s; i < (e ?? start); i += step) {
    output.push(i);
  }

  return output;
}

export const random = (
  min: number,
  max: number,
  { rounded } = { rounded: true }
) => {
  const partialVal = Math.random() * (max - min);

  if (rounded) {
    return Math.floor(partialVal) + min;
  } else {
    return partialVal + min;
  }
};

export const delay = (ms: number) =>
    new Promise((resolve) =>
        setTimeout(resolve, ms)
    );