class Car {
    constructor(year, milage, price){
        this.year = year;
        this.milage = milage;
        this.price = price;
    }
}

const cars = [
    {year: 2, milage: 34523, price: 34000},
    {year: 8, milage: 254213, price: 150000}, 
    {year: 19, milage: 842123, price: 78000},
]

console.log(cars);

let table = document.createElement("TABLE");
table.setAttribute("id", "table");
document.body.appendChild(table);

let header = document.createElement("TR");
header.setAttribute("id", "top");
table.appendChild(header);

let names = ["year", "milage", "price"];

for(let i = 0; i < names.length; i++){
    let name = document.createElement("TH");
    name.innerHTML = names[i];
    name.setAttribute("id", "name" + i);
    header.appendChild(name);
}

for(let i = 0; i < cars.length; i++){
    let car = cars[i];
    let tr = document.createElement("TR");
    tr.setAttribute("id", "tr" + i);
    document.getElementById("table").appendChild(tr);
    for(let j = 0; j < names.length; j++){
        let td = document.createElement("TD");
        td.innerHTML = cars[i][names[j]];
        tr.appendChild(td);
    }
}