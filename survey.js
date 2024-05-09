/*
Cody Breitling
Assignment: Final Project                              
*/

// array of questions
const questions = [
  {question:"Please Enter Your Name",
  id:"q0"},

  {question:"Please Enter Your Email",
  id:"q1"}, 

  {question:"Please Enter Your Zip Code",
  id:"q2"}, 

  {question:"Please Enter Your Number", 
  id:"q3"},
  
  {question:"Please Enter Your Age", 
  id:"q4"},

  {question:"Would you be interested in participating in a loyalty program for our store?",
   id:"q5"},

  {question:"How did you hear about us?",
   id:"q6"},

  {question:"How likely are you to recommend our store to a friend or family member?",
   id:"q7"},

  {question:"How often do you buy shoes online versus in-store?",
   id:"q8"},

  {question:"How likely are you to shop at our store again?",
   id:"q9"},

  {question:"How often do you seek assistance from staff during your shopping experience?",
   id:"q10"},

  {question:"Are the prices reasonable?",
   id:"q11"},

  {question:"On a scale of 1 to 5, how satisfied are you with the variety of shoe styles offered in our store?",
   id:"q12"},

  {question:"Have you returned any shoes?", 
  id:"q13"},

  {question:"Please specify what shoes you returned and why so we can better our quality for you!",
   id:"q14"},

  {question:"Rate your overall shopping experience 1-5",
   id:"q15"},

   {question:"We are sorry to hear you had a bad experience. Please tell us why you had a bad experience.",
   id:"q16"},

  {question:"Submit page",
   id:"q17"}
];

// code that is called on start
const onStart = () => {
  document.getElementById('questionTitle').innerHTML = questions[0].question;

  document.getElementById('q0').style.visibility='visible';

  document.getElementById('start-button').style.visibility='hidden';

  document.getElementById('fwd-btn').style.visibility='visible';
  document.getElementById('bck-btn').style.visibility='visible';
  document.getElementById('bck-btn').style.opacity=0.6;
}

// code that is called on submit
const onSubmit = () => {
  document.getElementById('q17').style.visibility='hidden';
  document.getElementById('questionTitle').style.visibility='hidden';
  document.getElementById('fwd-btn').style.visibility='hidden';
  document.getElementById('bck-btn').style.visibility='hidden';
  document.getElementById('results').style.visibility='visible';
}

// disable / enable buttons
const enableFwdBtn = (fwdBtn) => {
  fwdBtn.style.opacity=1;
  fwdBtn.style.cursor='pointer';
  fwdBtn.style.pointerEvents='all';  
}
const disableFwdBtn = (fwdBtn) => {
  fwdBtn.style.opacity=0.6;
  fwdBtn.style.cursor='allowed';
  fwdBtn.style.pointerEvents='none';  
}
const enableBckBtn = (bckBtn) => {
  bckBtn.style.opacity=1;
  bckBtn.style.cursor='pointer';
  bckBtn.style.pointerEvents='all';  
}

const disableBckBtn = (bckBtn) => {
  bckBtn.style.opacity=0.6;
  bckBtn.style.cursor='allowed';
  bckBtn.style.pointerEvents='none';  
}

// function that displays the current question when called
const displayQuestion = (currQuestion, prevQuestion) => {
  document.getElementById('questionTitle').innerHTML = currQuestion.question;
  document.getElementById(prevQuestion.id).style.visibility='hidden';
  document.getElementById(currQuestion.id).style.visibility='visible';
  let isQuestion7 = currQuestion.id == 'q6';
  if (prevQuestion.id === 'q6' && document.getElementById('otherChecked').checked === true) {
    document.getElementById('ifOtherChecked').style.visibility = 'hidden';
  }
  if (isQuestion7 && document.getElementById('otherChecked').checked === true) {
    document.getElementById('ifOtherChecked').style.visibility = 'visible';
  
  }

}

// set question index to keep track of which question you are on
let questionIndex = 0;

// code that is ran when the forward button is pressed
const onFwd = () => {
  questionIndex++;
  let currQuestion = questions[questionIndex];
  let prevQuestion = questions[questionIndex - 1]

  // first conditional question
  if ((currQuestion.id === 'q14' && document.getElementById('no-checked').checked === true && prevQuestion.id === 'q13') 
      || 
      (currQuestion.id === 'q14' && document.getElementById('no-checked').checked === false && document.getElementById('yes-checked').checked === false && prevQuestion.id === 'q13')) {
    questionIndex++;
    currQuestion = questions[questionIndex]
  }

  // second conditional question
  if (currQuestion.id === 'q16' && document.getElementById('range-two').value >= 3 && prevQuestion.id === 'q15') { 
    questionIndex++;
    currQuestion = questions[questionIndex]
  }

  const fwdBtn = document.getElementById('fwd-btn');
  const bckBtn = document.getElementById('bck-btn');
  displayQuestion(currQuestion, prevQuestion);

  if (currQuestion.question === questions[1].question) {
    enableBckBtn(bckBtn)  
  } else if (currQuestion.question === questions[17].question) {
    disableFwdBtn(fwdBtn)
  }
}

// code that is ran when the back button is pressed
const onBck = () => {
  questionIndex--;
  let currQuestion = questions[questionIndex];
  let prevQuestion = questions[questionIndex + 1]
  let isQuestion16Showing = true

  // first conditional question
  if ((currQuestion.id === 'q14' && document.getElementById('no-checked').checked === true && prevQuestion.id === 'q15') 
      || 
      (currQuestion.id === 'q14' && document.getElementById('no-checked').checked === false && document.getElementById('yes-checked').checked === false && prevQuestion.id === 'q15')) {
    questionIndex--;
    currQuestion = questions[questionIndex]
  }

  // second conditional question
  if (currQuestion.id === 'q16' && document.getElementById('range-two').value >= 3 && prevQuestion.id === 'q17') { 
    questionIndex--;
    currQuestion = questions[questionIndex]
    isQuestion16Showing = false
  }

  const fwdBtn = document.getElementById('fwd-btn');
  const bckBtn = document.getElementById('bck-btn');
  displayQuestion(currQuestion, prevQuestion);

  if (currQuestion.question === questions[0].question) {
    disableBckBtn(bckBtn)
  } else if ( isQuestion16Showing === false) {
    if (currQuestion.question === questions[15].question) {
      enableFwdBtn(fwdBtn)
    }
  } else if (currQuestion.question === questions[16].question) {
    enableFwdBtn(fwdBtn)
  }
}

// code that is called when the "other" option is pressed to display code for input
const otherCheck = () => {
  if (document.getElementById('otherChecked').checked) {
    document.getElementById('ifOtherChecked').style.visibility = 'visible';
  } else {
    document.getElementById('ifOtherChecked').style.visibility = 'hidden';
  }
}

// code for the sliders
var sliderOne = document.getElementById("range");
var sliderTwo = document.getElementById("range-two");

var outputOne = document.getElementById("range-value");
var outputTwo = document.getElementById("range-value-two");

outputOne.innerHTML = sliderOne.value + "/" + "5";
outputTwo.innerHTML = sliderTwo.value + "/" + "5";

sliderOne.oninput = function() {
  outputOne.innerHTML = this.value + "/" + "5";
}

sliderTwo.oninput = function() {
  outputTwo.innerHTML = this.value + "/" + "5";
}