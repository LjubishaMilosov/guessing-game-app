// const fs = require("fs")
// const path = require("path")


// const readQuestions = () => {
//   return new Promise((resolve, reject) => {
//     console.log("I am reading questions")
//   fs.readFile(
//       path.join(__dirname, "./questions.json"),
//       {
//         encoding: "utf8",
//       },
//       (err, data) => {
//         if(err) {
//           reject(err)
//         } else {
//           resolve(data)
//         }
//       }
//     )
//   }) 
// }

//     module.exports = { readQuestions } 

    
    const fs = require("fs")
const path = require("path")


const readQuestions = () => {
  console.log("I am reading questions")
  return new Promise((resolve, reject) => {
    fs.readFile(
      path.join(__dirname, "./questions.json"),
      {
        encoding: "utf8",
      },
      (err, data) => {
        if(err) {
          reject.err
        } 
        resolve(JSON.parse(data))
      })
  })
   
}

    module.exports = { readQuestions } 