
const sayBoom = async () => {
    return new Promise( (resolve, reject) => {
        
        setTimeout( () => {
            console.log("BOOM")
            resolve()
        }, 2000)
    })
    
}   


const main = async () => {
    
    console.log("In two seconds I'm going to soot")

    //sayBoom is async, we need to use await
    // because we are NOT in a Top-Level function
    await sayBoom()

    console.log("You're dead")
}

 main()
//main() is async, but we don't need to use await
    // because wit's at a Top-Level 
