/*
  survey for store that sells shoes
  questions: 
    1) name                                                                                                    -> input type text
    2) age                                                                                                     -> input type date
    3) email                                                                                                   -> input type text
    4) address                                                                                                 -> input type text
    5) number                                                                                                  -> input type text
    6) Do you want to enroll in our loyalty program for our store?                                             -> checkbox
    7) How did you hear about us?                                                                              -> radio button & input type text
    8) How likely are you to recommend our store to a friend or family member?                                 -> radio button 
    9) How often do you buy shoes online versus in-store?                                                      -> radio button
    10) How likely are you to shop at our store again?                                                         -> radio button
    11) How often do you seek assistance from sales staff during your shopping experience?                     -> radio button
    12) What do you consider the most important aspect when purchasing shoes                                   -> radio button
    13) On a scale of 1 to 10, how satisfied are you with the variety of shoe styles offered in our store?     -> radio button
    14) Rate your overall shopping experience 1-10 -> if below a 6 ask why                                     -> input type range & text area
    15) Have you returned any shoes? -> if yes ask why                                                         -> radio button & text area
*/

let questionIndex = 0;
let conditionalQuestionIndex = 0;

// probably need to make this an array of objects ltr
const questions = [
  "name", 
  "age", 
  "email", 
  "address", 
  "number", 
  "Would you be interested in participating in a loyalty program for our store?",
  "How did you hear about us?",
  "How likely are you to recommend our store to a friend or family member?",
  "How often do you buy shoes online versus in-store?",
  "How likely are you to shop at our store again?",
  "How often do you seek assistance from sales staff during your shopping experience?",
  "What do you consider the most important aspect when purchasing shoes (price, comfort, style, brand reputation, etc.)?",
  "On a scale of 1 to 10, how satisfied are you with the variety of shoe styles offered in our store?",
  "Have you returned any shoes? -> if yes ask why",
  "Rate your overall shopping experience 1-10 -> if below a 5 ask why",
  "Submit page"
];

const conditionalQuestions = [
  "We are sad to hear you had a bad experience. Please tell us why you had a bad experience.",
  "Please specify what shoes you returned and why so we can better our quality for you!"
];


const onStart = () => {
  document.getElementById('questionTitle').innerHTML = questions[0];
  document.getElementById('start-button').style.visibility='hidden';
  document.getElementById('fwd-btn').style.visibility='visible';
  document.getElementById('bck-btn').style.visibility='visible';
  document.getElementById('bck-btn').style.opacity=0.6;
}

// disable / enable buttons
const enableFwdBtn = () => {
  document.getElementById('fwd-btn').style.opacity=1;
  document.getElementById('fwd-btn').style.cursor='pointer';
  document.getElementById('fwd-btn').style.pointerEvents='all';  
}
const disableFwdBtn = () => {
  document.getElementById('fwd-btn').style.opacity=0.6;
  document.getElementById('fwd-btn').style.cursor='allowed';
  document.getElementById('fwd-btn').style.pointerEvents='none';  
}
const enableBckBtn = () => {
  document.getElementById('bck-btn').style.opacity=1;
  document.getElementById('bck-btn').style.cursor='pointer';
  document.getElementById('bck-btn').style.pointerEvents='all';  
}

const disableBckBtn = () => {
  document.getElementById('bck-btn').style.opacity=0.6;
  document.getElementById('bck-btn').style.cursor='allowed';
  document.getElementById('bck-btn').style.pointerEvents='none';  
}


const onFwd = () => {
  questionIndex++;
  const currQuestion = document.getElementById('questionTitle').innerHTML = questions[questionIndex];
  currQuestion;
  if (currQuestion === questions[1]) {
    enableBckBtn()  
  } else if (currQuestion === questions[15]) {
    disableFwdBtn()
  }
}

const onBck = () => {
  questionIndex--;
  const currQuestion = document.getElementById('questionTitle').innerHTML = questions[questionIndex];
  currQuestion;
  if (currQuestion === questions[0]) {
    disableBckBtn()
  } else if (currQuestion === questions[14]) {
    enableFwdBtn()
  }
}