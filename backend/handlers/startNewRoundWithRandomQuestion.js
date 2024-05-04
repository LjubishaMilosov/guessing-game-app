import { gameState } from "../gameState/index.js"
import { v4 as uuidv4 } from "uuid"
import { questions } from "../questions.js"

const hasQuestionNotBeenAsked = () => {
    const hasBeenAsked = gameState.rounds.find( (round) => {
        return questions.id === round.questionId
    })
    return hasBeenAsked === undefined
}

export const startNewRoundWithRandomQuestion = (request, response) => {

    const notYetAskedQuestions = questions.filter( (question) => {
        return hasQuestionNotBeenAsked(question)
    })

    if(notYetAskedQuestions.length === 0) {
        response.status(401).send(gameState)
        return
    }

    const randomIndex = Math.floor(Math.random() * questions.length)
    
    const newRound = {
        id: uuidv4(),
        questionId: notYetAskedQuestions[randomIndex].id,
    }

    gameState.rounds.push(newRound)

    return response.status(200).send({
        round: newRound,
        question: notYetAskedQuestions[randomIndex],
    })
}