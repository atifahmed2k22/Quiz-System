#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.bold.italic.cyan("*****WelCome To CLI Quiz*****"));

const quiz: {
  question1: string;
  question2: string;
  question3: string;
  question4: string;
  question5: string;
} = await inquirer.prompt([
  {
    name: "question1",
    type: "list",
    message:
      "Q1. What is the correct way to check if two values are not equal in typescript?",
    choices: ["a == b", "a === b", "a = b", "a !== b"],
  },
  {
    name: "question2",
    type: "list",
    message:
      "Q2. What of the following characters is commonly allowed in variable names in typescript?",
    choices: ["#", "@", "$", "&"],
  },
  {
    name: "question3",
    type: "list",
    message:
      "Q3. Which operator is commonly used for string concatenation in typescript?",
    choices: ["+", "-", "*", "/"],
  },
  {
    name: "question4",
    type: "list",
    message:
      "Q4. In typescript, which symbol is commonly used to terminate a statement?",
    choices: [".", ":", ",", ";"],
  },
  {
    name: "question5",
    type: "list",
    message:
      "Q5. Which method of inquirer.js is used to start the prompt interface and receive user input?",
    choices: ["start()", "prompt()", "init()", "run()"],
  },
]);

let score: number = 0;
switch (quiz.question1) {
  case "a !== b":
    console.log(chalk.bold.italic.blue("1. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.italic.red("1. Incorrect!"));
}
switch (quiz.question2) {
  case "$":
    console.log(chalk.bold.italic.blue("2. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.italic.red("2. Incorrect!"));
}
switch (quiz.question3) {
  case "+":
    console.log(chalk.bold.italic.blue("3. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.italic.red("3. Incorrect!"));
}
switch (quiz.question4) {
  case ";":
    console.log(chalk.bold.italic.blue("4. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.italic.red("4. Incorrect!"));
}
switch (quiz.question5) {
  case "prompt()":
    console.log(chalk.bold.italic.blue("5. Correct!"));
    ++score;
    break;
  default:
    console.log(chalk.bold.italic.red("5. Incorrect!"));
}

console.log(`Score: ${score}`);
