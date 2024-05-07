const numbers = [{points: 2}, {points: 1}, {points: 3}]
console.log(numbers)
numbers.sort((a,b) => {
    return a.points - b.points
})
console.log(numbers)