// Задание 1.
//
// Написать, функцию, которая принимает в качестве аргумента объект и выводит в консоль
// все ключи и значения только собственных свойств.
//     Данная функция не должна возвращать значение.

let dish ={
    view: "delicious",
    smell: "aromatic",
    taste: "gentle",
}
function description(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)){
            console.log(`Ключ: ${key}, Значение: ${obj[key]}`)
        }
    }
}
description(dish)
