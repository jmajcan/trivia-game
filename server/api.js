const { Pool, Client } = require('pg')

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'trivia_game_db',
    password: '13maplewood',
    port: 5432
});

const inMemoryTriviaCategories = [
    {
        id: 1,
        name: "CANADA"
    },
    {
        id: 2,
        name: "WORDS WITH 5 VOWELS"
    },
    {
        id: 3,
        name: "SOUNDS LIKE IT TO ME"
    },
    {
        id: 4,
        name: "SINGLE-NAMED CELEBS"
    },
    {
        id: 5,
        name: "MOVIE CHALLENGE"
    },
    {
        id: 6,
        name: "RED"
    }
];
const inMemoryTriviaQuestions = [
    {
        id: 1,
        category_id: 1,
        value: 200,
        question: "How many provinces and territories are there in Canada?",
        answer: "Canada has ten provinces and three territories.",
    },
    {
        id: 2,
        category_id: 1,
        value: 400,
        question: "How many time zones are there in Canada?",
        answer: "Canada has six time zones."
    },
    {
        id: 3,
        category_id: 1,
        value: 600,
        question: "True/False: Canada is the third largest country in the world?",
        answer: "False. Canada is the second largest country in the world."
    },
    {
        id: 4,
        category_id: 1,
        value: 800,
        question: "What are Canada's national sports?",
        answer: "Hockey and lacrosse are Canada’s national sports."
    },
    {
        id: 5,
        category_id: 1,
        value: 1000,
        question: "How much of the world’s renewable water does Canada have?",
        answer: "Canada has 7% of the world's renewable fresh water."
    },
    {
        id: 6,
        category_id: 2,
        value: 200,
        question: "This adjective means showy & intended to impress",
        answer: "OSTENTATIOUS"
    },
    {
        id: 7,
        category_id: 2,
        value: 400,
        question: "To inject someone with a small amount of a disease so that they can become immune to it",
        answer: "TO INOCULATE"
    },
    {
        id: 8,
        category_id: 2,
        value: 600,
        question: "Dancing Queen can feel the beat from this instrument",
        answer: "TAMBOURINE"
    },
    {
        id: 9,
        category_id: 2,
        value: 800,
        question: "It sounds like you're writing a novel but it means to empower or formally sanction an act",
        answer: "AUTHORIZE"
    },
    {
        id: 10,
        category_id: 2,
        value: 1000,
        question: "Ecstatic happiness",
        answer: "EUPHORIA"
    },
    {
        id: 11,
        category_id: 3,
        value: 200,
        question: "If your high-flying idea turns out to be a dud it lands with this sound that rhymes with dud",
        answer: "THUD"
    },
    {
        id: 12,
        category_id: 3,
        value: 400,
        question: "Hearing this hyphenated sound of tiny feet means you have kids in the house or mice",
        answer: "PITTER-PATTER"
    },
    {
        id: 13,
        category_id: 3,
        value: 600,
        question: "After a few hours in the hot sun I'm ready to drink a cold beverage this way also an engine sound",
        answer: "CHUG"
    },
    {
        id: 14,
        category_id: 3,
        value: 800,
        question: "Large ones can measure more than 5 feet across",
        answer: "A GONG"
    },
    {
        id: 15,
        category_id: 3,
        value: 1000,
        question: "Hey! It's a 6-letter bray from Mr. Ed",
        answer: "WHINNY"
    },
    {
        id: 16,
        category_id: 4,
        value: 200,
        question: "She's been caught in Peter Parker's web playing MJ in Marvel's Spider-Man flicks",
        answer: "ZENDAYA"
    },
    {
        id: 17,
        category_id: 4,
        value: 400,
        question: "In 2010 back when she still spelled her name with a dollar sign she had a No. 1 hit with We R Who We R",
        answer: "KE$HA"
    },
    {
        id: 18,
        category_id: 4,
        value: 600,
        question: "Bassist for the Red Hot Chili Peppers he's acted in films like Baby Driver & The Big Lebowski",
        answer: "FLEA"
    },
    {
        id: 19,
        category_id: 4,
        value: 800,
        question: "This British model almost had a date with Elwood in The Blues Brothers but it didn't stick",
        answer: "TWIGGY"
    },
    {
        id: 20,
        category_id: 4,
        value: 1000,
        question: "This Mogadishu-born supermodel was smokin' on the big screen opposite James Kirk in Star Trek VI",
        answer: "IMAN"
    },
    {
        id: 21,
        category_id: 5,
        value: 200,
        question: "Hiccup is the hero of this animated trilogy about Vikings & the creatures they once feared",
        answer: "HOW TO TRAIN YOUR DRAGON"
    },
    {
        id: 22,
        category_id: 5,
        value: 400,
        question: "Bo Derek played this man's stepmother in Tommy Boy",
        answer: "CHRIS FARLEY"
    },
    {
        id: 23,
        category_id: 5,
        value: 600,
        question: "In 2019 Christina Hendricks revealed that's her hand holding the rose on the poster for this 1999 Best Picture Oscar winner",
        answer: "AMERICAN BEAUTY"
    },
    {
        id: 24,
        category_id: 5,
        value: 800,
        question: "Spanish slang for hitman provides the title of this drug cartel thriller with Benicio del Toro & its Day of the Soldado sequel",
        answer: "SICARIO"
    },
    {
        id: 25,
        category_id: 5,
        value: 1000,
        question: "Name of the leopard Katharine Hepburn is Bringing Up in a screwball classic",
        answer: "BABY"
    },
    {
        id: 26,
        category_id: 6,
        value: 200,
        question: "It's the Red Planet",
        answer: "MARS"
    },
    {
        id: 27,
        category_id: 6,
        value: 400,
        question: "When blood goes through these organs it turns red",
        answer: "LUNGS"
    },
    {
        id: 28,
        category_id: 6,
        value: 600,
        question: "Pennyworth or E. Neuman",
        answer: "ALFRED"
    },
    {
        id: 29,
        category_id: 6,
        value: 800,
        question: "Prey's proverbial foe",
        answer: "PREDATOR"
    },
    {
        id: 30,
        category_id: 6,
        value: 1000,
        question: "The name of this cosmetic that can turn your cheeks red mean red",
        answer: "ROUGE"
    }
];

const inMemoryHorrors = [
    {
        name: 'The Hills Have Eyes',
        rating: 7.8
    },
    {
        name: 'Night of the Living Dead',
        rating: 9.0
    },
    {
        name: 'Scream',
        rating: 7.2
    }
];

const getAllQuestions = async (request, response) => {
    console.log('GET ALL QUESTIONS...')
    pool.query('SELECT * FROM questions ORDER BY question_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getQuestionById = (request, response) => {
    const id = parseInt(request.params.id);
    console.log('GET QUESTION AT '+id+'...')
    pool.query('SELECT * FROM questions WHERE question_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getAllCategories = async (request, response) => {
    console.log('GET ALL CATEGORIES...')
    pool.query('SELECT * FROM categories ORDER BY category_id ASC', (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getCategoryById = (request, response) => {
    const id = parseInt(request.params.id);
    console.log('GET CATEGORY AT '+id+'...')
    pool.query('SELECT * FROM categories WHERE category_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};

const getQuestionsCategoryId = (request, response) => {
    const id = parseInt(request.params.id);
    console.log('GET QUESTIONS BY CATEGORY ID '+id+'...')
    pool.query('SELECT * FROM questions WHERE category_id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
};


module.exports = {
    getAllQuestions,
    getQuestionById,
    getAllCategories,
    getCategoryById,
    getQuestionsCategoryId
};