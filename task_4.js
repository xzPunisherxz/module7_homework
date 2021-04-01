// Задание 4.
//
// Реализовать следующее консольное приложение подобно примеру,
//     который разбирался в видео. Реализуйте его на прототипах.
//
//     Определить иерархию электроприборов. Включить некоторые в розетку.
//     Посчитать потребляемую мощность.
//
//     Таких приборов должно быть, как минимум, два (например, настольная лампа и компьютер).
// Выбрав прибор, подумайте, какими свойствами он обладает.

function Device()
{
    this.device = 'electical';
    this.getSize = function()
    {
        console.log(`size of ${this.name} is ${this.size}`);
    }
}
let powerCalc = 0;
Device.prototype.switch = function(status)
{
    if (status == 'on')
    {
        powerCalc+= this.power;
        console.log(`Потребляемая мощность ${this.name} is ${this.power} Ват`)
    }
    return powerCalc;
}
function SmallDevice(name,power)
{
    this.power = power,
        this.name = name,
        this.size = "small"
}
SmallDevice.prototype = new Device();

function BigDevice(name, power)
{
    this.power = power,
        this.name = name,
        this.size = "big"
}
BigDevice.prototype = new Device();
const lamp = new SmallDevice('lamp', 90);
const computer = new BigDevice('computer', 750);
lamp.switch('on');
computer.switch('on');
console.log(`Общее энергопотребление приборов ${powerCalc} Ват`);