export type EyeColor = 
  | 'green' 
  | 'black' 
  | 'red' 
  | 'blue' 
  | 'yellow';


export function setEyeColor(color: EyeColor) {
  console.log('Вы установили цвет', color);
}