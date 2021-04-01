Задание 5.

Переписать консольное приложение из предыдущего юнита на классы.

let powerCalc = 0
class Device
{
    constructor ()
    {
        this.device = 'electical';
    }
    getSize()
    {
        console.log(`size of ${this.name} is ${this.size}`);
    }
    switch(status)
    {
        if (status == 'on')
        {
            powerCalc+= this.power;
            console.log(`Потребляемая мощность ${this.name} is ${this.power} Ват`)
        }
        return powerCalc;
    }
}

class SmallDevice extends Device
{ constructor(name, power)
{
    super(),
        this.power = power,
        this.name = name,
        this.size = "small"
}
}
class BigDevice extends Device
{ constructor(name, power)
{
    super(),
        this.power = power,
        this.name = name,
        this.size = "big"
}
}
const lamp = new SmallDevice('lamp', 90);
const computer = new BigDevice('computer', 750);
lamp.switch('on');
computer.switch('on');
console.log(`Общее энергопотребление приборов ${powerCalc} Ват`);