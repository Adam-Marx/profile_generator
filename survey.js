const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What's your name? Nicknames are also acceptable :)",
  "What's an activity you like doing?",
  "What do you listen to while doing that?",
  "Which meal is your favourite (eg: dinner, brunch, etc.)",
  "What's your favourite thing to eat for that meal?",
  "Which sport is your absolute favourite?",
  "What is your superpower? In a few words, tell us what you are amazing at!"
];

let answers = [];


const askAndAnswer = function (number = 0) {

  if (number >= questions.length) {
    console.log(`
    \nThe user's name/nickname is ${answers[0]}. 
    An activity they like doing is ${answers[1]}, and they listen to ${answers[2]} while doing it. 
    Their favorite meal is ${answers[3]}, and their specific favorite thing for that meal is ${answers[4]}.
    ${answers[0]}'s favorite sport is ${answers[5]}. Thei super power is ${answers[6]}`);
    return rl.close();
  } 

  rl.question(questions[number], (answer) => {
    answers.push(answer);
    askAndAnswer(number + 1);
  });
};

askAndAnswer();

/* GAVE UP ON TRYING TO LOOP :( TRYING RECURSION ABOVE
const askAndAnswer = () => {
  for (const question of questions) {
    if (questions.indexOf(question) <= 7) {
    rl.question(question, (answer) => {
      answers.push(answer);

    });
  }
  rl.close();
  }
};

askAndAnswer();

*/