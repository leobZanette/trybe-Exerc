// let player = {
//     name: 'Marta',
//     lastName: 'Silva',
//     age: 34,
//     medals: {golden: 2, silver:3}
// }

// console.log(player.name);
// console.log(player.lastName);
// console.log(player.age);

// player['bestInTheWorld'] = [2006,2007,2008,2009,2010,2018]

// console.log(player.bestInTheWorld[2])
// console.log(player.medals.golden)

let names = {
    p1: 'joao',
    p2: 'maria',
    p3: 'pedro',
}

for (key in names) {
    console.log('ola ' + names[key])
}

let car = {
    model: 'a3 sedan',
    manufac: 'audi',
    year: 2020,
}

for (key in car) {
    console.log(key + car[key])
}