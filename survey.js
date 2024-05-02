/*
  survey for store that sells shoes
  questions: 
    1) name                                                                                            
    2) email                                                                                                
    3) address                                                                                                
    4) number                                                                                                
    5) age                                                                                            
    6) Do you want to enroll in our loyalty program for our store?                                          
    7) How did you hear about us?                                                                            
    8) How likely are you to recommend our store to a friend or family member?                                 
    9) How often do you buy shoes online versus in-store?                                                     
    10) How likely are you to shop at our store again?                                                        
    11) How often do you seek assistance from sales staff during your shopping experience?                   
    12) What do you consider the most important aspect when purchasing shoes                                
    13) On a scale of 1 to 10, how satisfied are you with the variety of shoe styles offered in our store?    
    14) Have you returned any shoes? -> if yes ask why                                                    
    15) Rate your overall shopping experience 1-10 -> if below a 6 ask why                                 
*/

// list of question objects
const questions = [
  {question:"Please Enter Your Name:",
  type:"text",
  id:"q1",
  answers: null}, 

  {question:"Please Enter Your Email:",
  type:"text",
  id:"q2", 
  answers: null}, 

  {question:"Please Enter Your Zip Code:",
  type:"text",
  id:"q3", 
  answers: null}, 

  {question:"Please Enter Your Number:", 
  type:"text",
  id:"q4", 
  answers: null},
  
  {question:"Please Enter Your Age:", 
  type:"date",
  id:"q5", 
  answers: null},

  {question:"Would you be interested in participating in a loyalty program for our store?",
   type:"checkbox",
   id:"q6",
   answers: null},

  {question:"How did you hear about us?",
   type:"radio",
   id:"q7",
   answers:["Friend or Family", "Advertisement", "Social Media", "Search Engine", "Email", "Other"]},

  {question:"How likely are you to recommend our store to a friend or family member?",
   type:"radio",
   id:"q8",
   answers:["Very Likely", "Likely", "Maybe", "Not Likely"]},

  {question:"How often do you buy shoes online versus in-store?",
   type:"radio",
   id:"q9",
   answers:["Often", "Sometimes", "Not Often", "Never"]},

  {question:"How likely are you to shop at our store again?",
   type:"radio",
   id:"q10",
   answers:["Very Likely", "Likely", "Maybe", "Not Likely"]},

  {question:"How often do you seek assistance from staff during your shopping experience?",
   type:"radio",
   id:"q11",
   answers:["Often", "Sometimes", "Not Often", "Never"]},

  {question:"Are the prices reasonable?",
   type:"radio",
   id:"q12",
   answers:["Yes", "Somewhat", "No"]},

  {question:"On a scale of 1 to 10, how satisfied are you with the variety of shoe styles offered in our store?",
   type:"range",
   id:"q13",
   answers: null},

  {question:"Have you returned any shoes? -> if yes ask why", 
  type:"radio",
  id:"q14", 
  answers:["Yes", "No"]},

  {question:"Rate your overall shopping experience 1-10 -> if below a 5 ask why",
   type:"range",
   id:"q15",
   answers: null},

  {question:"Submit page",
   type:"button",
   id:"q16",
   answers: null}
];

const conditionalQuestions = [
  {question:"We are sad to hear you had a bad experience. Please tell us why you had a bad experience.",
   type:"text-box",
   id:"q17",
   answers: null},

  {question:"Please specify what shoes you returned and why so we can better our quality for you!",
   type:"text-box",
   id:"q18",
   answers: null}
];

const onStart = () => {
  document.getElementById('questionTitle').innerHTML = questions[0].question;

  document.getElementById('q1').style.visibility='visible';

  document.getElementById('start-button').style.visibility='hidden';

  document.getElementById('fwd-btn').style.visibility='visible';
  document.getElementById('bck-btn').style.visibility='visible';
  document.getElementById('bck-btn').style.opacity=0.6;
}

const onSubmit = () => {
  document.getElementById('q16').style.visibility='hidden';
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

const displayQuestion = (currQuestion, prevQuestion) => {
  document.getElementById('questionTitle').innerHTML = currQuestion.question;
  document.getElementById(prevQuestion.id).style.visibility='hidden';
  document.getElementById(currQuestion.id).style.visibility='visible';
  let isQuestion7 = currQuestion.id == 'q7';
  if (prevQuestion.id === 'q7' && document.getElementById('otherChecked').checked === true) {
    document.getElementById('ifOtherChecked').style.visibility = 'hidden';
  }
  if (isQuestion7 && document.getElementById('otherChecked').checked === true) {
    document.getElementById('ifOtherChecked').style.visibility = 'visible';
  }
}

let questionIndex = 0;
let conditionalQuestionIndex = 0;

const onFwd = () => {
  questionIndex++;
  const currQuestion = questions[questionIndex];
  const prevQuestion = questions[questionIndex - 1]
  const fwdBtn = document.getElementById('fwd-btn');
  const bckBtn = document.getElementById('bck-btn');
  displayQuestion(currQuestion, prevQuestion);

  if (currQuestion.question === questions[1].question) {
    enableBckBtn(bckBtn)  
  } else if (currQuestion.question === questions[15].question) {
    disableFwdBtn(fwdBtn)
  }
}

const onBck = () => {
  questionIndex--;
  const fwdBtn = document.getElementById('fwd-btn');
  const bckBtn = document.getElementById('bck-btn');
  const currQuestion = questions[questionIndex];
  const prevQuestion = questions[questionIndex + 1]
  displayQuestion(currQuestion, prevQuestion);

  if (currQuestion.question === questions[0].question) {
    disableBckBtn(bckBtn)
  } else if (currQuestion.question === questions[14].question) {
    enableFwdBtn(fwdBtn)
  }
}

const otherCheck = () => {
  if (document.getElementById('otherChecked').checked) {
    document.getElementById('ifOtherChecked').style.visibility = 'visible';
  } else {
    document.getElementById('ifOtherChecked').style.visibility = 'hidden';
  }
}

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