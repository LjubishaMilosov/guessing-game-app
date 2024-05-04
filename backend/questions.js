const starWarsReleaseDate = {
    id: "star-wars-release",
    prompt: "In what year was the first Star Wars movie released?",
    answer: 1977,
    pointRanges: [{
        threshold: 3,
        points: 10,
    }, {
        threshold: 10,
        points: 5
    }]
}

const titanicProductionCosts = {
    id: "titanic-production-costs",
    prompt: "At the time of release, Titanic (1977) was the most expensive movie ever made. How much did it cost to produce in US Dollars? (Answer in millions of USD)",
    answer: 210,
    pointRanges: [
        {
            threshold: 60,
            points: 5
        },
        {
            threshold: 30,
            points: 10,
        },
    ]
}

const arnoldSchwarzeneggerBodyCount = {
    id: "arnie-bodie-count",
    prompt: "How many people did Arnold Schwarzenegger kill on screen in all of his movies combined? (allouttabubblegum.com)",
    answer: 895,
    pointRanges: [{
        threshold: 50,
        points: 10,
    }, {
        threshold: 200,
        points: 5
    }, {
        threshold: 500,
        points: 3
    }]
}

const lordOfTheRingsOscars = {
    id: "lord-of-the-rings-oscars",
    prompt: `In total, how many Oscars (Academy Awards) did the 3 movies in the "Lord of the Rings" trilogy win?`,
    answer: 17,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 5,
            points: 5,
        },
        {
            threshold: 10,
            points: 3,
        },
    ]
}

const nicolasCageMovies = {
    id: "nicolas-cage-movies",
    prompt: "How many times did Nicolas Cage appear in cinema movies? (as of 2024, imdb.com)",
    answer: 114,
    pointRanges: [
        {
            threshold: 20,
            points: 10,
        },
        {
            threshold: 40,
            points: 5,
        },
        {
            threshold: 60,
            points: 3,
        },
    ]
}

const arnieIllBeBack = {
    id: "arnie-ill-be-back",
    prompt: `In how many movies does Arnold Schwarzenegger say "I'll be back"? (screenrant.com)`,
    answer: 8,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 10,
            points: 5,
        },
        {
            threshold: 20,
            points: 3,
        },
    ]
}

const arnieBenchPress = {
    id: "arnie-bench-press",
    prompt: "In pounds, what was the heaviest weight Arnold Schwarzenegger has lifted in a bench press? (1 pound = 0.45kg)",
    answer: 525,
    pointRanges: [
        {
            threshold: 100,
            points: 10,
        },
        {
            threshold: 200,
            points: 5,
        },
        {
            threshold: 300,
            points: 3,
        },
    ]
}

const mostExtras = {
    id: "most-extras",
    prompt: `The 1982 movie "Ghandi" features the most extras ever used in a movie. How many extras appeared in its funeral scene?`,
    answer: 300000,
    pointRanges: [
        {
            threshold: 100000,
            points: 10,
        },
        {
            threshold: 150000,
            points: 5,
        },
        {
            threshold: 200000,
            points: 3,
        },
    ]
}

const picassoPaintings = {
    id: "picasso-paintings",
    prompt: `How many paintings did Picasso complete in his life?`,
    answer: 13500,
    pointRanges: [
        {
            threshold: 3000,
            points: 10,
        },
        {
            threshold: 6000,
            points: 5,
        },
        {
            threshold: 9000,
            points: 3,
        },
    ]
}

const stephenKingNovels = {
    id: "stephen-king-novels",
    prompt: `How many novels/novellas did Stephen King publish, including under pseudonym? (As of 2024)`,
    answer: 65,
    pointRanges: [
        {
            threshold: 15,
            points: 10,
        },
        {
            threshold: 25,
            points: 5,
        },
        {
            threshold: 40,
            points: 3,
        },
    ]
}

const stephenKingShortStories = {
    id: "stephen-king-short-stories",
    prompt: `How many short stories did Stephen King publish? (As of 2024)`,
    answer: 218,
    pointRanges: [
        {
            threshold: 50,
            points: 10,
        },
        {
            threshold: 100,
            points: 5,
        },
        {
            threshold: 150,
            points: 3,
        },
    ]
}

const harryPotterWordCount = {
    id: "harry-potter-word-count",
    prompt: `How many words are in the first Harry Potter book "Harry Potter and the Sorcerer's Stone"?`,
    answer: 76944,
    pointRanges: [
        {
            threshold: 10000,
            points: 10,
        },
        {
            threshold: 20000,
            points: 5,
        },
        {
            threshold: 30000,
            points: 3,
        },
    ]
}

const friendsEpisodes = {
    id: "friends-episodes-count",
    prompt: `How many episodes does the TV show Friends have?`,
    answer: 236,
    pointRanges: [
        {
            threshold: 20,
            points: 10,
        },
        {
            threshold: 50,
            points: 5,
        },
        {
            threshold: 100,
            points: 3,
        },
    ]
}

const jrrTolkienAgeLotr = {
    id: "jrr-tolkien-age-lotr",
    prompt: `J.R.R. Tolkien is the author of the fantasy book series "The Lord of the Rings". How old was he when the first volume was published?`,
    answer: 62,
    pointRanges: [
        {
            threshold: 10,
            points: 10,
        },
        {
            threshold: 20,
            points: 5,
        },
        {
            threshold: 30,
            points: 3,
        },
    ]
}

const psychoCameraAngles = {
    id: "psycho-camera-angles",
    prompt: `In the Alfred Hitchcock movie Psycho (1960), how many camera angles are there in the famous shower scene?`,
    answer: 77,
    pointRanges: [
        {
            threshold: 15,
            points: 10,
        },
        {
            threshold: 30,
            points: 5,
        },
        {
            threshold: 50,
            points: 3,
        },
    ]
}

const spiderManTakes = {
    id: "psycho-camera-angles",
    prompt: `In the first Spider-Man movie with Toby Maguire, there's a scene where he catches the cafeteria tray of Mary Jane after she slips. How many takes did it take to film this scene? (No CGI was used!)`,
    answer: 156,
    pointRanges: [
        {
            threshold: 40,
            points: 10,
        },
        {
            threshold: 70,
            points: 5,
        },
        {
            threshold: 100,
            points: 3,
        },
    ]
}

const oldestTurtleJonathan = {
    id: "oldestTurtleJonathan",
    prompt: `What is the age of the oldest turtle in the world, Jonathan? (As of 2024, still alive as well!)`,
    answer: 191,
    pointRanges: [
        {
            threshold: 20,
            points: 10,
        },
        {
            threshold: 50,
            points: 5,
        },
        {
            threshold: 100,
            points: 3,
        },
    ]
}

const largestKittenLitter = {
    id: "largestKittenLitter",
    prompt: `What was the world's largest litter of kittens?`,
    answer: 19,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 6,
            points: 5,
        },
        {
            threshold: 10,
            points: 3,
        },
    ]
}

const spotsOnGiraffe = {
    id: "spotsOnGiraffe",
    prompt: `How many spots does an adult Giraffe have, at least?`,
    answer: 200,
    pointRanges: [
        {
            threshold: 30,
            points: 10,
        },
        {
            threshold: 50,
            points: 5,
        },
        {
            threshold: 80,
            points: 3,
        },
    ]
}

const jkRowlingPublishers = {
    id: "jkRowlingPublishers",
    prompt: `How many publishers turned down J.K. Rowling before she found a publisher for Harry Potter?`,
    answer: 12,
    pointRanges: [
        {
            threshold: 1,
            points: 10,
        },
        {
            threshold: 2,
            points: 5,
        },
        {
            threshold: 5,
            points: 3,
        },
    ]
}

const hawkingIq = {
    id: "hawkingIq",
    prompt: `What was the IQ of Stephen Hawking?`,
    answer: 160,
    pointRanges: [
        {
            threshold: 10,
            points: 10,
        },
        {
            threshold: 20,
            points: 5,
        },
        {
            threshold: 30,
            points: 3,
        },
    ]
}

const oldestCat = {
    id: "oldestCat",
    prompt: `How long lived the oldest cat? (In human years.)`,
    answer: 38,
    pointRanges: [
        {
            threshold: 5,
            points: 10,
        },
        {
            threshold: 10,
            points: 5,
        },
        {
            threshold: 15,
            points: 3,
        },
    ]
}

const amountOfLanguages = {
    id: "amountOfLanguages",
    prompt: `How many languages are there in the world? (According to SIL International's Ethnologue: Languages of the World)`,
    answer: 7100,
    pointRanges: [
        {
            threshold: 500,
            points: 10,
        },
        {
            threshold: 1000,
            points: 5,
        },
        {
            threshold: 2000,
            points: 3,
        },
    ]
}

const spanishSpeakingCountries = {
    id: "spanishSpeakingCountries",
    prompt: `How many countries in the world speak Spanish?`,
    answer: 21,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 6,
            points: 5,
        },
        {
            threshold: 10,
            points: 3,
        },
    ]
}

const englishSpeakingCountries = {
    id: "englishSpeakingCountries",
    prompt: `In how many countries is English recognised as an offical language?`,
    answer: 67,
    pointRanges: [
        {
            threshold: 10,
            points: 10,
        },
        {
            threshold: 20,
            points: 5,
        },
        {
            threshold: 30,
            points: 3,
        },
    ]
}

const peopleOnMoon = {
    id: "peopleOnMoon",
    prompt: `How many people have been to the moon? (As of 2024)`,
    answer: 12,
    pointRanges: [
        {
            threshold: 2,
            points: 10,
        },
        {
            threshold: 3,
            points: 5,
        },
        {
            threshold: 5,
            points: 3,
        },
    ]
}

const longestMovie = {
    id: "longestMovie",
    prompt: `In minutes, how long is the longest cinematic (!) movie ever made? (Wikipedia)`,
    answer: 873,
    pointRanges: [
        {
            threshold: 100,
            points: 10,
        },
        {
            threshold: 150,
            points: 5,
        },
        {
            threshold: 200,
            points: 3,
        },
    ]
}

const readingSpeed = {
    id: "readingSpeed",
    prompt: `How many words can the average adult read per minute?`,
    answer: 238,
    pointRanges: [
        {
            threshold: 30,
            points: 10,
        },
        {
            threshold: 50,
            points: 5,
        },
        {
            threshold: 60,
            points: 3,
        },
    ]
}

const satellites = {
    id: "satellites",
    prompt: `How many satellites orbit earth? (As of 2024)`,
    answer: 9494,
    pointRanges: [
        {
            threshold: 1000,
            points: 10,
        },
        {
            threshold: 2000,
            points: 5,
        },
        {
            threshold: 3000,
            points: 3,
        },
    ]
}

const flightsEachDay = {
    id: "flightsEachDay",
    prompt: `Approximately, how many flights happen each day? (trip.com, May 2023)`,
    answer: 100000,
    pointRanges: [
        {
            threshold: 50000,
            points: 10,
        },
        {
            threshold: 150000,
            points: 5,
        },
        {
            threshold: 230000,
            points: 3,
        },
    ]
}

const bananasOnATree = {
    id: "bananasOnATree",
    prompt: `Up to how many bananas grow on a banana tree?`,
    answer: 240,
    pointRanges: [
        {
            threshold: 40,
            points: 10,
        },
        {
            threshold: 60,
            points: 5,
        },
        {
            threshold: 80,
            points: 3,
        },
    ]
}

const cupsPerDay = {
    id: "cupsPerDay",
    prompt: `On average, how many cups of coffee does an US American drink per year? (nypost.com, 2023)`,
    answer: 460,
    pointRanges: [
        {
            threshold: 60,
            points: 10,
        },
        {
            threshold: 100,
            points: 5,
        },
        {
            threshold: 150,
            points: 3,
        },
    ]
}

const pizzeriasInUs = {
    id: "pizzeriasInUs",
    prompt: `Out of all restaurants in the United States, roughly how many percent of those are pizzerias? (altohartley.com, 2018)`,
    answer: 17,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 6,
            points: 5,
        },
        {
            threshold: 9,
            points: 3,
        },
    ]
}

const leftHanded = {
    id: "leftHanded",
    prompt: `How many percent of people in the world are left-handed? (Wikipedia)`,
    answer: 10,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 5,
            points: 5,
        },
        {
            threshold: 7,
            points: 3,
        },
    ]
}

const sugarInACocaCola = {
    id: "sugarInACocaCola",
    prompt: `In percent, how much sugar is in a can of Coca Cola?`,
    answer: 10,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 5,
            points: 5,
        },
        {
            threshold: 7,
            points: 3,
        },
    ]
}

const elvisTheActor = {
    id: "elvisTheActor",
    prompt: `In how many movies did Elvis Presley star as an actor?`,
    answer: 31,
    pointRanges: [
        {
            threshold: 8,
            points: 10,
        },
        {
            threshold: 14,
            points: 5,
        },
        {
            threshold: 20,
            points: 3,
        },
    ]
}

const sinatraIndividualSongs = {
    id: "sinatraIndividualSongs",
    prompt: `Around how many different songs did Frank Sinatra record?`,
    answer: 1200,
    pointRanges: [
        {
            threshold: 200,
            points: 10,
        },
        {
            threshold: 300,
            points: 5,
        },
        {
            threshold: 500,
            points: 3,
        },
    ]
}

const beetlesNumberOnes = {
    id: "beetlesNumberOnes",
    prompt: `How many times had the Beetles a song on number 1 in the US charts?`,
    answer: 20,
    pointRanges: [
        {
            threshold: 5,
            points: 10,
        },
        {
            threshold: 9,
            points: 5,
        },
        {
            threshold: 12,
            points: 3,
        },
    ]
}

const queenAlbums = {
    id: "queenAlbums",
    prompt: `How many studio albums did the rock band Queen record?`,
    answer: 15,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 5,
            points: 5,
        },
        {
            threshold: 7,
            points: 3,
        },
    ]
}

const starWarsBooks = {
    id: "starWarsBooks",
    prompt: `How many Star Wars books are there? (theurbanwriters.com, August 2022)`,
    answer: 381,
    pointRanges: [
        {
            threshold: 50,
            points: 10,
        },
        {
            threshold: 100,
            points: 5,
        },
        {
            threshold: 150,
            points: 3,
        },
    ]
}

const indianaJonesWhip = {
    id: "indianaJonesWhip",
    prompt: `Across the five movies, how many times did Indiana Jones use his whip? (thegamer.com)`,
    answer: 19,
    pointRanges: [
        {
            threshold: 4,
            points: 10,
        },
        {
            threshold: 8,
            points: 5,
        },
        {
            threshold: 12,
            points: 3,
        },
    ]
}

const jamesBondMartinis = {
    id: "jamesBondMartinis",
    prompt: `In all of the official cinema movies, how often does James Bond have a Vodka Martini? (2024)`,
    answer: 21,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 5,
            points: 5,
        },
        {
            threshold: 8,
            points: 3,
        },
    ]
}

const queenCorgis = {
    id: "queenCorgis",
    prompt: `In her lifetime, how many Corgi dogs did Queen Elizabeth II have?`,
    answer: 30,
    pointRanges: [
        {
            threshold: 5,
            points: 10,
        },
        {
            threshold: 10,
            points: 5,
        },
        {
            threshold: 15,
            points: 3,
        },
    ]
}

const eminemRapGodWords = {
    id: "eminemRapGodWords",
    prompt: `The song "Rap God" by Eminem is 6 minutes and 4 seconds long. How many words are in the song?`,
    answer: 1560,
    pointRanges: [
        {
            threshold: 300,
            points: 10,
        },
        {
            threshold: 500,
            points: 5,
        },
        {
            threshold: 800,
            points: 3,
        },
    ]
}

const mAndMs = {
    id: "mAndMs",
    prompt: `How many M&Ms are in a 7-ounce bag (200g)?`,
    answer: 210,
    pointRanges: [
        {
            threshold: 30,
            points: 10,
        },
        {
            threshold: 50,
            points: 5,
        },
        {
            threshold: 80,
            points: 3,
        },
    ]
}

const upBalloons = {
    id: "upBalloons",
    prompt: `How many balloons feature in the Pixar/Disney movie "Up"?`,
    answer: 10297,
    pointRanges: [
        {
            threshold: 1000,
            points: 10,
        },
        {
            threshold: 2500,
            points: 5,
        },
        {
            threshold: 4000,
            points: 3,
        },
    ]
}

const extraRib = {
    id: "extraRib",
    prompt: `How many percent of people have an extra rib?`,
    answer: 8,
    pointRanges: [
        {
            threshold: 2,
            points: 10,
        },
        {
            threshold: 3,
            points: 5,
        },
        {
            threshold: 4,
            points: 3,
        },
    ]
}

const hawaiianAlphabet = {
    id: "hawaiianAlphabet",
    prompt: `How many letters does the Hawaiian alphabet have?`,
    answer: 13,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 5,
            points: 5,
        },
        {
            threshold: 7,
            points: 3,
        },
    ]
}

const chickenLongestFlight = {
    id: "chickenLongestFlight",
    prompt: `In seconds, how long was the longest ever recorded flight of a chicken?`,
    answer: 13,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 5,
            points: 5,
        },
        {
            threshold: 7,
            points: 3,
        },
    ]
}

const koalasSleep = {
    id: "koalasSleep",
    prompt: `How many hours of a day does a koala sleep?`,
    answer: 18,
    pointRanges: [
        {
            threshold: 2,
            points: 10,
        },
        {
            threshold: 4,
            points: 5,
        },
        {
            threshold: 6,
            points: 3,
        },
    ]
}

const brainWater = {
    id: "brainWater",
    prompt: `In percent, how much of the human brain is water?`,
    answer: 78,
    pointRanges: [
        {
            threshold: 8,
            points: 10,
        },
        {
            threshold: 16,
            points: 5,
        },
        {
            threshold: 24,
            points: 3,
        },
    ]
}

const lightningEarth = {
    id: "lightningEarth",
    prompt: `Per minute, how often does lightning strike the Earth?`,
    answer: 6000,
    pointRanges: [
        {
            threshold: 1000,
            points: 10,
        },
        {
            threshold: 2000,
            points: 5,
        },
        {
            threshold: 3000,
            points: 3,
        },
    ]
}

const firstTelephoneBook = {
    id: "firstTelephoneBook",
    prompt: `The first telephone book was in 1878. How many names did it contain?`,
    answer: 50,
    pointRanges: [
        {
            threshold: 10,
            points: 10,
        },
        {
            threshold: 20,
            points: 5,
        },
        {
            threshold: 30,
            points: 3,
        },
    ]
}

const golfBallDimples = {
    id: "golfBallDimples",
    prompt: `How many dimples has an average golf ball?`,
    answer: 336,
    pointRanges: [
        {
            threshold: 60,
            points: 10,
        },
        {
            threshold: 120,
            points: 5,
        },
        {
            threshold: 180,
            points: 3,
        },
    ]
}

const candlesWomen = {
    id: "candlesWomen",
    prompt: `In percent, out of all the people purchasing candles, how many of them are women?`,
    answer: 96,
    pointRanges: [
        {
            threshold: 8,
            points: 10,
        },
        {
            threshold: 16,
            points: 5,
        },
        {
            threshold: 24,
            points: 3,
        },
    ]
}

const jamaicaRivers = {
    id: "jamaicaRivers",
    prompt: `How many rivers are there in Jamaica?`,
    answer: 120,
    pointRanges: [
        {
            threshold: 30,
            points: 10,
        },
        {
            threshold: 50,
            points: 5,
        },
        {
            threshold: 70,
            points: 3,
        },
    ]
}

const riceStapleFood = {
    id: "riceStapleFood",
    prompt: `In percent, for how many people in the world is rice their staple food?`,
    answer: 50,
    pointRanges: [
        {
            threshold: 10,
            points: 10,
        },
        {
            threshold: 20,
            points: 5,
        },
        {
            threshold: 30,
            points: 3,
        },
    ]
}

const paperFolding = {
    id: "paperFolding",
    prompt: `How many times can you fold a piece of paper?`,
    answer: 7,
    pointRanges: [
        {
            threshold: 0,
            points: 10,
        },
        {
            threshold: 1,
            points: 5,
        },
        {
            threshold: 2,
            points: 3,
        },
    ]
}

const eiffelTowerSteps = {
    id: "eiffelTowerSteps",
    prompt: `How many steps does the Eiffel Tower in Paris have?`,
    answer: 1792,
    pointRanges: [
        {
            threshold: 200,
            points: 10,
        },
        {
            threshold: 400,
            points: 5,
        },
        {
            threshold: 600,
            points: 3,
        },
    ]
}

const leftHandedDeaths = {
    id: "leftHandedDeaths",
    prompt: `How many left-handed people die each year from using right-handed products?`,
    answer: 2500,
    pointRanges: [
        {
            threshold: 500,
            points: 10,
        },
        {
            threshold: 1000,
            points: 5,
        },
        {
            threshold: 1500,
            points: 3,
        },
    ]
}

const henEggLays = {
    id: "henEggLays",
    prompt: `How many eggs does the average hen lay per year?`,
    answer: 228,
    pointRanges: [
        {
            threshold: 40,
            points: 10,
        },
        {
            threshold: 80,
            points: 5,
        },
        {
            threshold: 120,
            points: 3,
        },
    ]
}

const niagaraFallsBathTubs = {
    id: "niagaraFallsBathTubs",
    prompt: `How many bathtubs could the Niagara Falls fill per second?`,
    answer: 4000,
    pointRanges: [
        {
            threshold: 1000,
            points: 10,
        },
        {
            threshold: 2000,
            points: 5,
        },
        {
            threshold: 3000,
            points: 3,
        },
    ]
}

const vendingMachineDeaths = {
    id: "vendingMachineDeaths",
    prompt: `How many people die each year from vending machines?`,
    answer: 13,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 90,
            points: 5,
        },
        {
            threshold: 150,
            points: 3,
        },
    ]
}

const fullMoonBrighter = {
    id: "fullMoonBrighter",
    prompt: `How many times is a full moon brighter compared to a half moon?`,
    answer: 9,
    pointRanges: [
        {
            threshold: 1,
            points: 10,
        },
        {
            threshold: 3,
            points: 5,
        },
        {
            threshold: 5,
            points: 3,
        },
    ]
}

const mcDonaldsDailyMeal = {
    id: "mcDonaldsDailyMeal",
    prompt: `In percent, how much of the US population eats per day at McDonalds?`,
    answer: 7,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 10,
            points: 5,
        },
        {
            threshold: 20,
            points: 3,
        },
    ]
}

const blinksPerDay = {
    id: "blinksPerDay",
    prompt: `How many times does a human blink per day?`,
    answer: 25000,
    pointRanges: [
        {
            threshold: 5000,
            points: 10,
        },
        {
            threshold: 10000,
            points: 5,
        },
        {
            threshold: 20000,
            points: 3,
        },
    ]
}

const landOwnedByGovernment = {
    id: "landOwnedByGovernment",
    prompt: `In percent, how much of the land of the United States is owned by the government?`,
    answer: 32,
    pointRanges: [
        {
            threshold: 10,
            points: 10,
        },
        {
            threshold: 20,
            points: 5,
        },
        {
            threshold: 30,
            points: 3,
        },
    ]
}

const daVinciMonaLisa = {
    id: "daVinciMonaLisa",
    prompt: `How many years did it take for Lenoardo Da Vinci to paint the Mona Lisa?`,
    answer: 10,
    pointRanges: [
        {
            threshold: 3,
            points: 10,
        },
        {
            threshold: 6,
            points: 5,
        },
        {
            threshold: 8,
            points: 3,
        },
    ]
}

const womenManagingMoney = {
    id: "womenManagingMoney",
    prompt: `In percent, in how many households of the US do women manage the money and pay the bills?`,
    answer: 75,
    pointRanges: [
        {
            threshold: 15,
            points: 10,
        },
        {
            threshold: 30,
            points: 5,
        },
        {
            threshold: 45,
            points: 3,
        },
    ]
}

const meteoritesPerYear = {
    id: "meteoritesPerYear",
    prompt: `How many meteorites hit the earth per year?`,
    answer: 500,
    pointRanges: [
        {
            threshold: 100,
            points: 10,
        },
        {
            threshold: 250,
            points: 5,
        },
        {
            threshold: 400,
            points: 3,
        },
    ]
}

const brokenBone = {
    id: "brokenBone",
    prompt: `How many percent of people have ever broken a bone?`,
    answer: 44,
    pointRanges: [
        {
            threshold: 15,
            points: 10,
        },
        {
            threshold: 25,
            points: 5,
        },
        {
            threshold: 40,
            points: 3,
        },
    ]
}

const makingBedInTheMorning = {
    id: "makingBedInTheMorning",
    prompt: `How many percent of people DO NOT make their bed in the morning?`,
    answer: 21,
    pointRanges: [
        {
            threshold: 10,
            points: 10,
        },
        {
            threshold: 20,
            points: 5,
        },
        {
            threshold: 30,
            points: 3,
        },
    ]
}

const cowMilkPerDay = {
    id: "cowMilkPerDay",
    prompt: `Per day, how many glasses of milk does a cow produce?`,
    answer: 40,
    pointRanges: [
        {
            threshold: 20,
            points: 10,
        },
        {
            threshold: 100,
            points: 5,
        },
        {
            threshold: 150,
            points: 3,
        },
    ]
}

const pandaEating = {
    id: "pandaEating",
    prompt: `How many hours of the day does a panda spend eating bamboo?`,
    answer: 12,
    pointRanges: [
        {
            threshold: 2,
            points: 10,
        },
        {
            threshold: 5,
            points: 5,
        },
        {
            threshold: 8,
            points: 3,
        },
    ]
}

export const questions = [
    starWarsReleaseDate,
    titanicProductionCosts,
    arnoldSchwarzeneggerBodyCount,
    lordOfTheRingsOscars,
    nicolasCageMovies,
    arnieIllBeBack,
    arnieBenchPress,
    mostExtras,
    picassoPaintings,
    stephenKingNovels,
    stephenKingShortStories,
    harryPotterWordCount,
    friendsEpisodes,
    jrrTolkienAgeLotr,
    psychoCameraAngles,
    spiderManTakes,
    oldestTurtleJonathan,
    largestKittenLitter,
    spotsOnGiraffe,
    jkRowlingPublishers,
    hawkingIq,
    oldestCat,
    amountOfLanguages,
    spanishSpeakingCountries,
    englishSpeakingCountries,
    peopleOnMoon,
    longestMovie,
    readingSpeed,
    satellites,
    flightsEachDay,
    bananasOnATree,
    cupsPerDay,
    pizzeriasInUs,
    leftHanded,
    sugarInACocaCola,
    elvisTheActor,
    sinatraIndividualSongs,
    beetlesNumberOnes,
    queenAlbums,
    starWarsBooks,
    indianaJonesWhip,
    jamesBondMartinis,
    queenCorgis,
    eminemRapGodWords,
    mAndMs,
    upBalloons,
    extraRib,
    hawaiianAlphabet,
    chickenLongestFlight,
    koalasSleep,
    brainWater,
    lightningEarth,
    firstTelephoneBook,
    golfBallDimples,
    candlesWomen,
    jamaicaRivers,
    riceStapleFood,
    paperFolding,
    eiffelTowerSteps,
    leftHandedDeaths,
    henEggLays,
    niagaraFallsBathTubs,
    vendingMachineDeaths,
    fullMoonBrighter,
    mcDonaldsDailyMeal,
    blinksPerDay,
    landOwnedByGovernment,
    daVinciMonaLisa,
    womenManagingMoney,
    meteoritesPerYear,
    brokenBone,
    makingBedInTheMorning,
    cowMilkPerDay,
    pandaEating,
]
