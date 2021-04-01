Задание 3.

Написать функцию, которая создает пустой объект, но без прототипа.

function noProtoObj(){
  return Object.create(null)
}
console.log(noProtoObj())
