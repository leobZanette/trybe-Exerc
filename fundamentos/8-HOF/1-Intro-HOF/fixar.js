const a = () => 'Acordando!!!'
const b = () => 'Bora cafe'
const c = () => 'dormir'

const doingThis = (func) => console.log(func())

const doingThis2 = (func) => {
  const result = func();
  console.log(result);
};


doingThis(a)
doingThis(b)
doingThis(c)