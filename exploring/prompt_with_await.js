const prompts = require('prompts')

const askForUserName = async () => {
    const response = await prompts({
      type: 'text',
      name: 'playerOne',
      message: 'What is your name, playerOne?',
    })
    console.log("response from prompt", response)
}

askForUserName()