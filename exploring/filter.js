const animals = [
    {name: "cat", onLand: true},
    {name: "dolphin", onLand: false},
    {name: "dog", onLand: true},
    {name: "sponge", onLand: false},
]

const landAnimals = animals.filter( (animal) => {
    return animal.onLand
})

console.log(landAnimals)