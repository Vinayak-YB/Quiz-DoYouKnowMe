var readlineSync = require('readline-sync');
var name = readlineSync.question('What is your name?');
console.log('Hi '+ name + '! Welcome to : How well do you know Vin?');
var score = 0
var highscore = 0
//Play function
function play(question, answer){
  var useranswer = readlineSync.question(question);
  if (answer.toUpperCase() === useranswer.toUpperCase()){
    console.log("Right answer!");
    score = score + 1;
    console.log('Your current score is ',score);
    console.log('---------------')
  }
  else{
    console.log('Wrong answer! The correct answer is ', answer);
    score = score - 1;
    console.log('Your current score is ',score);
    console.log('---------------')
  }
  
}
var questionOne = {
  question :'Where do I live ? ',
  answer  : 'Bangalore'
}
var questionTwo = {
  question : 'Who is my favorite Suits character ?',
  answer : 'Harvey Specter'
}
var questionThree = {
  question : 'Am I am introvert or extrovert ? ',
  answer : 'Trick question, Im an ambivert! :) '
}
var questionFour = {
  question : 'Which is my preferred social media platform ? ',
  answer : 'Twitter'
}
var questionFive = {
  question : 'Who is my favorite Superhero ?',
  answer : 'Batman',
}
var questions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
for (var i = 0; i<questions.length;i++){
  var currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer);
}
console.log('YAY!! You scored ', score);
if (score > highscore){
  highscore = score;
  console.log('Highscore is ', highscore)
}
else{
  console.log('Highscore is ', highscore)
}