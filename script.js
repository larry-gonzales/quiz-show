// Quiz category buttons
const moviesButton = document.getElementById('movies')
const sportsButton = document.getElementById('sports')
const cartoonsButton = document.getElementById('cartoons')
const musicButton = document.getElementById('music')
const nextButton = document.getElementById('next')
const restartButton = document.getElementById('restart')
const questionCount = document.getElementById('question-count')

// Quiz container cards
const startContainer = document.getElementById('start-container')
const questionsContainer = document.getElementById('questions-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-btn')

let shuffledQuestions, currentQuestionIndex

// Button events
moviesButton.addEventListener('click', beginMovieQuiz)
sportsButton.addEventListener('click', beginSportsQuiz)
cartoonsButton.addEventListener('click', beginCartoonsQuiz)
musicButton.addEventListener('click', beginMusicQuiz)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    nextQuestion()
})
restartButton.addEventListener('click', restartQuiz)

function beginMovieQuiz() {
    startContainer.classList.add('hide')
    shuffledQuestions = movieQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionsContainer.classList.remove('hide')
    nextQuestion()
}

function beginSportsQuiz() {
    startContainer.classList.add('hide')
    shuffledQuestions = sportsQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionsContainer.classList.remove('hide')
    nextQuestion()
}

function beginCartoonsQuiz() {
    startContainer.classList.add('hide')
    shuffledQuestions = cartoonsQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionsContainer.classList.remove('hide')
    nextQuestion()
}

function beginMusicQuiz() {
    startContainer.classList.add('hide')
    shuffledQuestions = musicQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionsContainer.classList.remove('hide')
    nextQuestion()
}

function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
        questionCount.innerText = 'Question ' + (currentQuestionIndex + 1) + ' of ' + movieQuestions.length
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide')
    } else {
        nextButton.classList.add('hide')
        restartButton.classList.remove('hide')
        restartButton.addEventListener('click', restartQuiz)
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
      element.classList.add('correct')
    } else {
      element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

function restartQuiz() {
    location.reload()
}

// Movie category questions
const movieQuestions = [
    { 
        question: 'In what film does Robert De Niro famously say “You talkin’ to me?”',
        answer: [
        {text: 'Goodfellas', correct: false},
        {text: 'Raging Bull', correct: false},
        {text: 'Taxi Driver', correct: true},
        {text: 'A Bronx Tale', correct: false}
        ]
    },
    {
        question: 'Which movie star is killed off in the opening scene of Scream?',
        answer: [
        {text: 'Courteney Cox', correct: false},
        {text: 'Rose McGowan', correct: false},
        {text: 'Neve Campbell', correct: false},
        {text: 'Drew Barrymore', correct: true}
        ]
    },
    {
        question: 'In the movie Elf, what flavor of Pop Tarts does Buddy use in his spaghetti?',
        answer: [
        {text: 'Strawberry', correct: false},
        {text: 'Chocolate', correct: true},
        {text: 'Cherry', correct: false},
        {text: 'Blueberry', correct: false}
        ]
    },
    {
        question: 'Which character does Tom Cruise play in Top Gun?',
        answer: [
        {text: 'Maverick', correct: true},
        {text: 'Cougar', correct: false},
        {text: 'Goose', correct: false},
        {text: 'Iceman', correct: false}
        ]
    },
    {
        question: 'Which musical based on Romeo and Juliet was a 60s Oscar winner?',
        answer: [
        {text: 'Follow That Girl', correct: false},
        {text: 'Ernest in Love', correct: false},
        {text: 'Beg, Borrow or Steal', correct: false},
        {text: 'West Side Story', correct: true}
        ]
    },
    {
        question: 'What pop vocal group performs at the wedding in Bridesmaids?',
        answer: [
        {text: 'Hanson', correct: false},
        {text: 'Wilson Phillips', correct: true},
        {text: 'Spin Doctors', correct: false},
        {text: 'Spice Girls', correct: false}
        ]
    },
    {
        question: 'Who is the only Disney princess who was inspired by an actual person?',
        answer: [
        {text: 'Jasmine', correct: false},
        {text: 'Moana', correct: false},
        {text: 'Pocahontas', correct: true},
        {text: 'Mulan', correct: false}
        ]
    },
    {
        question: 'What is the name of the hobbit played by Elijah Wood in the Lord of the Rings movies?',
        answer: [
        {text: 'Frodo Baggins', correct: true},
        {text: 'Meriadoc Brandybuck', correct: false},
        {text: 'Samwise Gamgee', correct: false},
        {text: 'Peregrin Took', correct: false}
        ]
    },
    {
        question: 'Which show about Danny and Sandy was made into a film with John Travolta and Olivia Newton-John?',
        answer: [
        {text: 'Saturday Night Live', correct: false},
        {text: 'Grease', correct: true},
        {text: 'Xanadu', correct: false},
        {text: 'The Midnight Special', correct: false}
        ]
    },
    {
        question: 'Aaron Sorkin won an Oscar for writing what 2010 drama about the creation of Facebook?',
        answer: [
        {text: 'Unfriended', correct: false},
        {text: 'The Circle', correct: false},
        {text: 'The Social Network', correct: true},
        {text: 'Catfish', correct: false}
        ]
    }
]

// Sports category questions
const sportsQuestions = [
    { 
        question: 'What’s the diameter of a basketball hoop in inches?',
        answer: [
        {text: '12 inches', correct: false},
        {text: '18 inches', correct: true},
        {text: '20 inches', correct: false},
        {text: '14 inches', correct: false}
        ]
    },
    {
        question: 'What do you call it when a player makes three back-to-back strikes in bowling?',
        answer: [
        {text: 'Turkey', correct: true},
        {text: 'Triple', correct: false},
        {text: 'Eagle', correct: false},
        {text: 'Bucket', correct: false}
        ]
    },
    {
        question: 'A sporting event is held every year on Memorial Day. What is it?',
        answer: [
        {text: 'The World Cup', correct: false},
        {text: 'Wimbledon', correct: false},
        {text: 'The Masters', correct: false},
        {text: 'Indianapolis 500', correct: true}
        ]
    },
    {
        question: 'How many players are on a baseball team?',
        answer: [
        {text: '11', correct: false},
        {text: '7', correct: false},
        {text: '9', correct: true},
        {text: '10', correct: false}
        ]
    },
    {
        question: 'Which country has competed the most times in the summer Olympics without winning a gold medal?',
        answer: [
        {text: 'The Philippines', correct: true},
        {text: 'Guam', correct: false},
        {text: 'Ethiopia', correct: false},
        {text: 'Hungary', correct: false}
        ]
    },
    {
        question: 'How many dimples are there on an average golf ball?',
        answer: [
        {text: '100', correct: false},
        {text: '256', correct: false},
        {text: '336', correct: true},
        {text: '501', correct: false}
        ]
    },
    {
        question: 'What is the only team in the NFL to neither host nor play in the Super Bowl?',
        answer: [
        {text: 'Buffalo Bills', correct: false},
        {text: 'Cleveland Browns', correct: true},
        {text: 'Tennessee Titans', correct: false},
        {text: 'Oakland Raiders', correct: false}
        ]
    },
    {
        question: 'What year did the players go on strike, resulting in no baseball World Series?',
        answer: [
        {text: '1987', correct: false},
        {text: '1998', correct: false},
        {text: '2005', correct: false},
        {text: '1994', correct: true}
        ]
    },
    {
        question: 'What number is next (right) to the number "20" on a standard British dart board?',
        answer: [
        {text: '9', correct: false},
        {text: '4', correct: false},
        {text: '1', correct: true},
        {text: '5', correct: false}
        ]
    },
    {
        question: 'Which team holds the NHL record for the longest winning streak?',
        answer: [
        {text: 'Vancouver Canucks', correct: false},
        {text: 'Pittsburgh Penguins', correct: true},
        {text: 'Montreal Canadiens', correct: false},
        {text: 'New Jersey Devils', correct: false}
        ]
    }
]

// Cartoons category questions
const cartoonsQuestions = [
    { 
        question: 'In Rick and Morty, from which dimension do Rick and Morty originate from?',
        answer: [
        {text: 'Doopidoo Dimension', correct: false},
        {text: 'Dimension C-137', correct: true},
        {text: 'Fourth Dimension', correct: false},
        {text: 'Blender Dimension', correct: false}
        ]
    },
    {
        question: 'Which of these is NOT a Disney cartoon character?',
        answer: [
        {text: 'Donald Duck', correct: false},
        {text: 'Buzz Lightyear', correct: false},
        {text: 'Daffy Duck', correct: true},
        {text: 'Sulley', correct: false}
        ]
    },
    {
        question: 'Who plays the voice of Sideshow Bob in The Simpsons?',
        answer: [
        {text: 'Dan Castellaneta', correct: false},
        {text: 'Seth MacFarlane', correct: false},
        {text: 'Billy West', correct: false},
        {text: 'Kelsey Grammer', correct: true}
        ]
    },
    {
        question: 'What does Ren often call Stimpy?',
        answer: [
        {text: 'A dummy', correct: false},
        {text: 'A halfwit', correct: false},
        {text: 'An idiot', correct: true},
        {text: 'A dimwit', correct: false}
        ]
    },
    {
        question: 'On the show Futurmama, what company does Dr. Farnsworth run?',
        answer: [
        {text: 'Space Express', correct: false},
        {text: 'Earth Express', correct: false},
        {text: 'Planet Express', correct: true},
        {text: 'Federal Express', correct: false}
        ]
    },
    {
        question: 'How many years after the debut of Mickey Mouse was it before Minnie Mouse made her first appearance?',
        answer: [
        {text: '1 year', correct: false},
        {text: 'Same year', correct: true},
        {text: '5 years', correct: false},
        {text: '2 years', correct: false}
        ]
    },
    {
        question: 'Which of the following superheroes did NOT appear in the Super Friends cartoons?',
        answer: [
        {text: 'Hawkgirl', correct: true},
        {text: 'Apache Chief', correct: false},
        {text: 'Green Lantern', correct: false},
        {text: 'Black Vulcan', correct: false}
        ]
    },
    {
        question: 'Which Family Guy character is obsessed with world domination?',
        answer: [
        {text: 'Meg', correct: false},
        {text: 'Brian', correct: false},
        {text: 'Stewie', correct: true},
        {text: 'Chris', correct: false}
        ]
    },
    {
        question: 'What did Hank Hill sell in King of the Hill?',
        answer: [
        {text: 'Propane', correct: true},
        {text: 'Home heating oil', correct: false},
        {text: 'Refrigerator', correct: false},
        {text: 'Insurance', correct: false}
        ]
    },
    {
        question: 'This Peanuts character first appeared in 1966 but was not named until four years later.',
        answer: [
        {text: 'Marcie', correct: false},
        {text: 'Pigpen', correct: false},
        {text: 'Woodstock', correct: true},
        {text: 'Franklin', correct: false}
        ]
    }
]

// Music category questions
const musicQuestions = [
    { 
        question: 'Who replaced David Lee Roth as lead singer of the group Van Halen?',
        answer: [
        {text: 'Ronnie James Dio', correct: false},
        {text: 'Sammy Hagar', correct: true},
        {text: 'David Coverdale', correct: false},
        {text: 'Ritchie Blackmore', correct: false}
        ]
    },
    {
        question: 'What was Nirvana‘s first album called?',
        answer: [
        {text: 'Insecticide', correct: false},
        {text: 'Bleach', correct: true},
        {text: 'In Utero', correct: false},
        {text: 'Nevermind', correct: false}
        ]
    },
    {
        question: 'Which Beatle performed a James Bond theme song?',
        answer: [
        {text: 'John Lennon', correct: false},
        {text: 'George Harrison', correct: false},
        {text: 'Ringo Starr', correct: false},
        {text: 'Paul McCartney', correct: true}
        ]
    },
    {
        question: 'At the end of what month does Green Day want you to wake them up?',
        answer: [
        {text: 'September', correct: true},
        {text: 'August', correct: false},
        {text: 'October', correct: false},
        {text: 'November', correct: false}
        ]
    },
    {
        question: 'Which of these is NOT a song by Queen?',
        answer: [
        {text: 'Don’t Stop Me Now', correct: false},
        {text: 'Bicycle Race', correct: false},
        {text: 'I Want It All', correct: false},
        {text: 'Born to Run', correct: true}
        ]
    },
    {
        question: 'Of Pink Floyd’s four most popular albums, which one came out first?',
        answer: [
        {text: 'Animals', correct: false},
        {text: 'Dark Side of the Moon', correct: true},
        {text: 'The Wall', correct: false},
        {text: 'Wish You Were Here', correct: false}
        ]
    },
    {
        question: 'Who was not a member of the traveling Wilburys?',
        answer: [
        {text: 'Bob Dylan', correct: false},
        {text: 'Roy Orbison', correct: false},
        {text: 'Eric Clapton', correct: true},
        {text: 'Tom Petty', correct: false}
        ]
    },
    {
        question: 'David Bowie appeared in what fantasy film?',
        answer: [
        {text: 'Labyrinth', correct: true},
        {text: 'The Lord of the Rings', correct: false},
        {text: 'Eragon', correct: false},
        {text: 'The Hobbit', correct: false}
        ]
    },
    {
        question: 'What was the title of Eminem’s “greatest hits” album?',
        answer: [
        {text: 'Marshall Mathers LP', correct: false},
        {text: 'Curtain Call', correct: true},
        {text: 'Encore', correct: false},
        {text: 'The Eminem Show', correct: false}
        ]
    },
    {
        question: 'What was Pearl Jam’s orginial name?',
        answer: [
        {text: 'The Lumberjacks', correct: false},
        {text: 'Seattle Suckers', correct: false},
        {text: 'Mookie Blaylock', correct: true},
        {text: 'Wasteland', correct: false}
        ]
    }
]