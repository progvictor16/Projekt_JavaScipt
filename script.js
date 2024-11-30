const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()

}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])

}

function showQuestion(question) {

    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct

        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })

}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
            (answerButtonsElement.firstChild)
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
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
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

const questions = [
    {
        question: 'Który język skryptowy ogólnego przeznaczenia należy wykorzystać do tworzenia aplikacji WWW, zagnieżdżanych w języku HTML i uruchamianych po stronie serwera?',
        answers: [
            { text: 'PHP', correct: true },
            { text: 'JavaScript', correct: false },
            { text: 'C#', correct: false },
            { text: 'Perl', correct: false },
        ]
    },
    {
        question: 'Którego znacznika NIE NALEŻY umieszczać w nagłówku dokumentu HTML?',
        answers: [
            { text: ' <meta>', correct: false },
            { text: '<title>', correct: false },
            { text: '<h2>', correct: true },
            { text: '<link>', correct: false },

        ]
    },
    {
        question: 'W instrukcji warunkowej języka JavaScript należy sprawdzić przypadek, gdy wartość zmiennej a jest z przedziału (0, 100), natomiast wartość zmiennej b jest większa od zera. Warunek taki jest prawidłowo zapisany w nastepujący sposób:',
        answers: [
            { text: 'if ((a>0 && a<100) || b<0)', correct: false },
            { text: 'if (a>0 && a<100 && b>0)', correct: true },
            { text: 'if (a>0 || a<100 || b<0)', correct: false },
            { text: 'if ((a>0 || a<100) && b>0)', correct: false },

        ]
    },

    {
        question: 'Która z przedstawionych metod pozwoli wypisać w języku JavaScript komunikat w konsoli przeglądarki internetowej?',
        answers: [
            { text: 'console.print("test");', correct: false },
            { text: 'console.write("test");', correct: false },
            { text: 'console.log("test");', correct: true },
            { text: 'console.echo("test");', correct: false },

        ]


    },

    {
        question: 'Zapisując hasło użytkownika serwisu WWW (np. bankowości internetowej), w celu jego zabezpieczenia przed odtajnieniem, zwykle używa się funkcji',
        answers: [
            { text: 'cyklometrycznych', correct: false },
            { text: 'abstrakcyjnych', correct: false },
            { text: 'mieszających', correct: false },
            { text: 'klucza', correct: true },

        ]


    },


]