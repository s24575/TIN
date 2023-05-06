const car = {
    year: 2,
    milage: 243213,
    default_price: 50000,
    end_price: 50000,

    up_default_price(){
        this.default_price += 1000;
    },

    down_end_price(){
        this.end_price = this.default_price - this.year * 1000;
    },

    milage_effect(){
        this.end_price -= Math.floor(this.milage / 100000) * 10000;
    },

    update(year, milage){
        this.year = year;
        this.milage = milage;
        this.down_end_price()
        this.milage_effect();
    },
}

car.up_default_price();
console.log(car);
car.update(3, 123456);
console.log(car);

const cars = [
    {year: 2, milage: 34523, default_price: 100000, end_price: 100000},
    {year: 8, milage: 254213, default_price: 80000, end_price: 80000}, 
    {year: 19, milage: 842123, default_price: 70000, end_price: 70000},
];

function addCar(newCar){
    if(newCar.default_price > 10000){
        cars.push(newCar);
    }
}

function incrementYear(){
    for(let i = 0; i < cars.length; i++){
        cars[i].year++;
    }
}

console.log(JSON.stringify(cars));
addCar({year: 1, milage: 1234, default_price: 12345, end_price: 12345});
addCar({year: 1, milage: 1234, default_price: 1234, end_price: 1234});
console.log(JSON.stringify(cars));

incrementYear();
console.log(JSON.stringify(cars));