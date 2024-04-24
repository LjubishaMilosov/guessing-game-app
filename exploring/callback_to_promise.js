//functions are awaitable when they return a promise

const printNumberAfterOneSecond = (number) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(number)
            resolve()
        }, 1000)
    })
}
    

const main = () => {
    await printNumberAfterOneSecond(3)
    await printNumberAfterOneSecond(2)
    await printNumberAfterOneSecond(1)
}


