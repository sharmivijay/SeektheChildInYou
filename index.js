var questionOne ={
  question : "Who is the evil master of minions ? \na.Stuart  \nb.Kelvin \nc.Gru \nd.Bob \nYour answer: ",
  answer : "c"
}

var questionTwo = {
  question : "What is the name of the fourth penguin that joined the Spy team? \na.Skipper \nb.Private \nc.Kowalski \nd.Rico \nYour answer: ",
  answer :  "b"
}

 var questionThree = {
   question : "what is the name of the frozen princess? \na.Anna \nb.Elsa \nYour answer: ",
   answer :"b"
 }
 var questionFour = {
   question : "Who appoints the guardians to watch over the children of the world? \na.Man in the Moon \nb.Father Christmas \nYour answer: ",
   answer :"b"
 }

 var questionFive = {
   question : "What is the name of the bunny in Zootopia? \na.Judy Hopp \nb.Nick Wilde \nYour answer: ",
   answer :"b"
 }

var questionList =[questionOne, questionTwo, questionThree,questionFour, questionFive];
var score = 0;

var highestScore =[
  {
  name : "Sharmila" ,
  score :  5
  },
  {
    name : "Aneena" ,
  score :  5
  }
]
function checkAnswerAndIncrementScore(question, answer){
    var userResponse = readLineSync.question(question);
    
    if(answer.toUpperCase() === userResponse.toUpperCase()){
      score = score + 1;
      console.log("Yes.. you are right!");
      console.log("Score: "+score);
      
    }
    else{
      console.log("No.. Better luck next time!");
    }
}

var readLineSync = require("readline-sync");
var username =  readLineSync.question ("May I know your name please ? ");
console.log("Welcome "+username +"!!");
var response = readLineSync.question("Do you watch Animated movies ? (Yes/No)");
if(response.toUpperCase() === "yes".toUpperCase()){
  console.log("Wow thats so cool lets play the game\nPlease enter the option a or b or c ");
  console.log("-----------------------------------");
  for (var i = 0; i<questionList.length;i++){
      checkAnswerAndIncrementScore(questionList[i].question, questionList[i].answer);
      console.log("---------------------------");
  }
  if(score ==3 ){
 console.log(username+"!! you are champ and your final score : "+ score);
  }else{
    console.log(username+"'s final score : "+ score);
  }
  
  console.log("------------------------");
  console.log("Lists of champs :");
  console.log("------------------------");

  //To display the highestScore
  for(var j=0; j<highestScore.length;j++){
    console.log("Name: " +highestScore[j].name +"\nScore :" + highestScore[j].score);
    console.log("------------------------");
  }
  
}
else{
  console.log("Sorry .. you are not eligible to play this game");
}