const prompts = require('prompts')

const askForUserName = async () => {
    const response = await prompts([
      {
        type: 'text',
        name: 'playerOne',
        message: 'What is your name, playerOne?',
      },
      {
        type: 'text',
        name: 'playerTwo',
        message: 'What is your name, playerTwo?',
      }
    ])
    console.log("response from prompt", response)
}

askForUserName()