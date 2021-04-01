// Задание 2.
//
// Написать функцию, которая принимает в качестве аргументов строку и объект,
//     а затем проверяет есть ли у переданного объекта свойство с данным именем.
//     Функция должна возвращать true или false.

    function checkName(obj, prop){
    if (obj.hasOwnProperty(prop)){
        return true;
    }else{
        return false;
    }
}


let person = {
    name: "Alex",
    age: 25,
    city: "Russia",
    eyes: "blue",

};

console.log(checkName(person, "city"));
console.log(checkName(person, "profession"));