// export const gameState = {
//     players: [], 
//     guesses: {}, 
//     rounds: [ ], 
//     points:{},
// }

export const gameState = {
    players: [
        {
            "name": "Rick",
            "points": 0
        },
        {
            "name": "Jenny",
            "points": 0
        }
    ],
    guesses: {
        "37b80d36-db6b-4796-a90d-d11358c942b2": [
            {
                "player": "Rick",
                "guess": 9
            },
            {
                "player": "Jenny",
                "guess": 9
            }
        ]
    },
    rounds: [
        {
            "id": "ffdd5485-839c-4b60-82ea-997375d88d47",
            "questionId": "brainWater"
        },
        {
            "id": "37b80d36-db6b-4796-a90d-d11358c942b2",
            "questionId": "leftHanded"
        }
    ],
    points: {}
}