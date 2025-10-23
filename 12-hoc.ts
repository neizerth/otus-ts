const withMessage = (msg: string, fn: (...fnArgs: any[]) => any) => {
  return (...args: any[]) => {
    const result = fn(...args);
    
    console.log(msg, result, ...args);

    return result;
  }
}

const add = (a: number, b: number) => a + b;

const addWithMsg = withMessage('Сложение', add);

addWithMsg(3, 4);