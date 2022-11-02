var readlineSync = require('readline-sync')
console.log('Welcome to Harry Potter Quiz !!!')
console.log('-------------------------------------------------- \n')
var name = readlineSync.question("Please enter your name: ")
console.log("\nLet's see how well you know the world of Wizardry,", name)
const questions = [
  {

    question: '1. What does Harry accidentally do when he goes to the zoo? \n a. makes the glass in the snake enclosure disappear \n b. Teaches a monkey to sing \n c. Turns a flamingo blue \n Ans:',
    answer: "a"

  },
  {

    question: '2. What\'s the name of Dudley Dursely\'s dad? \n a. Victor \n b. Ivon \n c. Vernon \n Ans:',
    answer: 'c'

  },
  {

    question: '3. How many Harry Potter books are there in total? \n a. 6 \n b. 7 \n c. 8 \n Ans:',
    answer: 'b'

  },
  {

    question: '4. What shape scar does Harry have on his forehead? \n a. A Cat \n b. A Moon \n c. A lightening bolt \n Ans:',
    answer: 'c'

  },
  {

    question: '5. What is the name of Hermione Granger\'s cat? \n a. Bart \n b. Crookshanks \n c. Peppa \n Ans:',
    answer: 'b'

  }
]

score = 0

const display = (questions) => {
  for (i in questions) {
    console.log('\n')
    var resp = readlineSync.question(questions[i].question)
    if (questions[i].answer.toLowerCase() === resp.toLowerCase()) {
      console.log("Right Answer!")
      score += 1
      console.log("Score: \t", score)
    }
    else {
      console.log("Wrong Answer!")
      console.log("Score:", score)
    }
  }
  console.log("You've completed the quiz!\n")
  console.log(name + '\'s score: ' + score)
}

display(questions)