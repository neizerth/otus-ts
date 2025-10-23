export enum Color {
  Green = 1,
  Black = 2,
  Red = 8,
  Blue = 10,
  Yellow = 22,
}

export const redColor = Color.Red;

export function setColor(color: Color) {
  console.log('Вы установили цвет', color);
}