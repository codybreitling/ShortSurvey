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

// setting some commonly used stuff so i dont have to keep getting the element by id
const fwdBtn = document.getElementById('fwd-btn');
const bckBtn = document.getElementById('bck-btn');
const questionTitle = document.getElementById('questionTitle');

// setting these two for validation later
let isTakingSurveyAgain = false;
let isSubmitButtonPressed = false;

// set question index to keep track of which question you are on
let questionIndex = 0;

// setting an object to hold the current survey answers
let currentSurvey = {};

// setting an array to hold all of the survey response objects
const surveys = [];

// code that is called on start
const onStart = () => {
  currentSurvey = {};
  questionIndex = 0;

  // edit elements
  questionTitle.innerHTML = questions[0].question;
  document.getElementById('q0').style.visibility='visible';
  document.getElementById('start-button').style.visibility='hidden';
  fwdBtn.style.visibility='visible';
  bckBtn.style.visibility='visible';
  enableFwdBtn(fwdBtn);
  disableBckBtn(bckBtn);
}

// code that is called on submit
const onSubmit = () => {
  isSubmitButtonPressed = true;

  // edit elements
  document.getElementById('scrollable').style.visibility='visible';
  document.getElementById('reset-btn').style.visibility='visible';
  document.getElementById('q17').style.visibility='hidden';
  questionTitle.style.visibility='hidden';
  fwdBtn.style.visibility='hidden';
  bckBtn.style.visibility='hidden';
  document.getElementById('resultsHeading').style.visibility='visible';

  // setting answers and trimming them
  let name = document.getElementById('q0-input').value;
  name = name.trim();
  let email = document.getElementById('q1-input').value;
  email = email.trim();
  let zip = document.getElementById('q2-input').value;
  zip = zip.trim();
  let phone = document.getElementById('q3-input').value;
  phone = phone.trim();
  const age = document.getElementById('q4-input').value;

  // setting the rest of answers to empty strings so they can be edited later
  let loyaltyProgram = '';
  let reference = '';
  let recommend = '';
  let onlineOrInStore = '';
  let likelyToComeBack = '';
  let seekAssistance = '';
  let reasonablePrices = '';
  let howSatisfiedWithVariety = '';
  let returnedAnyShoes = '';
  let overall = '';

  // setting answerId and answer to be able to easier get the users answers
  let answerId = '';
  let answer = null;

  // setting loyaltyProgram to a readable format
  const loyaltyProgramChecked = document.getElementById('q4-input').checked;
  if (loyaltyProgramChecked) {
    loyaltyProgram = 'Enrolled';
  } else {
    loyaltyProgram = 'Not enrolled';
  }

  // setting the refference question to what was answered by the user
    // check if the other answers were chosen (not the "other" option)
  for (let x = 1; x < 5; x++) {
    answerId = 'a' + x;
    answer = document.getElementById(answerId);
    if (answer.checked) {
      reference = answer.value;
    }
  }
    // if reference has no value, that means "option" option must be selected since we already tested if the questions were answered or not
  if (reference === '') {
    reference = document.getElementById('ifOtherChecked').value;
    reference = reference.trim();
  }

  // setting the recommend question to what was answered by the user
  for (let x = 5; x < 9; x++) {
    answerId = 'a' + x;
    answer = document.getElementById(answerId);
    if (answer.checked) {
      recommend = answer.value;
    }
  }

  // setting the onlineOrInStore question to what was answered by the user
  for (let x = 9; x < 13; x++) {
    answerId = 'a' + x;
    answer = document.getElementById(answerId);
    if (answer.checked) {
      onlineOrInStore = answer.value;
    }
  }

  // setting the likelyToComeBack question to what was answered by the user
  for (let x = 13; x < 17; x++) {
    answerId = 'a' + x;
    answer = document.getElementById(answerId);
    if (answer.checked) {
      likelyToComeBack = answer.value;
    }
  }

  // setting the seekAssistance question to what was answered by the user
  for (let x = 17; x < 21; x++) {
    answerId = 'a' + x;
    answer = document.getElementById(answerId);
    if (answer.checked) {
      seekAssistance = answer.value;
    }
  }

  // setting the reasonablePrices question to what was answered by the user
  for (let x = 21; x < 24; x++) {
    answerId = 'a' + x;
    answer = document.getElementById(answerId);
    if (answer.checked) {
      reasonablePrices = answer.value;
    }
  }

  // setting the howSatisfiedWithVariety question with what the slider was set to by the user
  howSatisfiedWithVariety = document.getElementById('range').value + '/' + '5';

  // setting the returnedAnyShoes question with what was answered by the user (if yes was checked, include the explanation. else, do not include it)
  if (document.getElementById('yes-checked').checked) {
    returnedAnyShoes = "Yes, " + document.getElementById('conditional-question-1').value.trim();
  } else if (document.getElementById('no-checked').checked) {
    returnedAnyShoes = 'No';
  }

  // setting the overall question with what the slider was set to (if it is below 3, include the explanation. else, do not)
  let range2Value = document.getElementById('range-two').value;
  if (range2Value >= 3) {
    overall = range2Value + "/ 5";
  } else {
    overall = range2Value + "/" + "5, " + document.getElementById('conditional-question-2').value.trim();
  }

  // storing all answers into the current survey object
  currentSurvey = {
    name,
    email,
    zip,
    phone,
    age,
    loyaltyProgram,
    reference,
    recommend,
    onlineOrInStore,
    likelyToComeBack,
    seekAssistance,
    reasonablePrices,
    howSatisfiedWithVariety,
    returnedAnyShoes,
    overall
  };

  // putting the current survey object into the array of surveys completed
  surveys.push(currentSurvey);
  
  // putting the surveys array into localStorage
  localStorage.setItem('surveys', JSON.stringify(surveys));

  // calling a function that displays all of the surveys
  displaySurveyResponses()
}

// code that is called when the survey is submitted to display all survey responses
const displaySurveyResponses = () => {
  // get the ul tag
  const responsesList = document.getElementById('responsesList')
  responsesList.innerHTML = '';

  // loop through and add each survey out of the surveys array to the list
  for (let x = 0; x < surveys.length; x++) {
    const survey = surveys[x];
      const listItem = document.createElement('li');
      listItem.textContent = `Survey ${x + 1}: ${survey.name}`;
      listItem.dataset.index = x;
      listItem.addEventListener('click', showSurveyDetails); // add event listener to be able to click on each survey to get more details on it
      responsesList.appendChild(listItem);
  }
}

// code that shows the specific surveys details when a specific survy is pressed from all of the survey responses
const showSurveyDetails = (event) => {
  // get the survey index and survey
  const index = event.currentTarget.dataset.index;
  const survey = surveys[index];

  // set an array that holds the answers for the survey clicked on
  let details = [
    `Survey ${parseInt(index) + 1} Details`,
    `Name: ${survey.name}`,
    `Email: ${survey.email}`,
    `Zip Code: ${survey.zip}`,
    `Phone Number: ${survey.phone}`,
    `Age: ${survey.age}`,
    `Loyalty Program: ${survey.loyaltyProgram}`,
    `Reference: ${survey.reference}`,
    `How Likely To Recommend: ${survey.recommend}`,
    `Shops Online: ${survey.onlineOrInStore}`,
    `How Likely To Come Back: ${survey.likelyToComeBack}`,
    `Seeks Assistance: ${survey.seekAssistance}`,
    `Resonable Prices: ${survey.reasonablePrices}`,
    `Satisfied With Variety: ${survey.howSatisfiedWithVariety}`,
    `Returned Shoes: ${survey.returnedAnyShoes}`,
    `Overall Experience: ${survey.overall}`
  ];


  // edit elements
  document.getElementById('result-back-button').style.visibility='visible';
  document.getElementById('scrollable').style.visibility='hidden';
  document.getElementById('resultsHeading').style.visibility='hidden';
  document.getElementById('reset-btn').style.visibility='hidden';
  document.getElementById('scrollable2').style.visibility='visible';
  document.getElementById('resultHeading').style.visibility='visible';
  document.getElementById('resultHeading').innerHTML=details[0];
  document.getElementById('view-past-surveys').style.visibility='hidden';

  // checking to see if i should display the back to questions button or not depending on where the user is
  if (isTakingSurveyAgain && !isSubmitButtonPressed) {
    document.getElementById('backToQuestionsBtn').style.visibility='hidden';
  }

  // sets ul tag
  const responseList = document.getElementById('responseList');
  responseList.innerHTML = '';

  // loop through and add each answer out of the survey array to the list
  for (let x = 1; x < details.length; x++) {
    const response = details[x];
      const listItem = document.createElement('li');
      listItem.textContent = response;
      listItem.dataset.index = x;
      styleListItem(listItem);
      listItem.style.cursor="default";
      responseList.appendChild(listItem);
  }
}

// code that is called when the back button is clicked going from the specific survey details back to the whole list of surveys
const backToResultsPage = () => {
  // just editing elements visibilitys here
  document.getElementById('result-back-button').style.visibility='hidden';
  document.getElementById('scrollable').style.visibility='visible';
  document.getElementById('resultsHeading').style.visibility='visible';
  if (isTakingSurveyAgain && !isSubmitButtonPressed) {
    document.getElementById('reset-btn').style.visibility='hidden';
    document.getElementById('backToQuestionsBtn').style.visibility='visible';
  } else {
    document.getElementById('reset-btn').style.visibility='visible';
  }
  document.getElementById('scrollable2').style.visibility='hidden';
  document.getElementById('resultHeading').style.visibility='hidden';
}

// code that is called on take survey again, clears the questions and starts a new survey
const onTakeSurveyAgain = () => {
  isTakingSurveyAgain = true;

  // editing elements
  document.getElementById('reset-btn').style.visibility='hidden';
  document.getElementById('surveyForm').reset(); // reseting the questions
  document.getElementById('resultsHeading').style.visibility='hidden';
  document.getElementById('scrollable').style.visibility='hidden';
  document.getElementById('view-past-surveys').style.visibility='visible';
  document.getElementById('questionTitle').style.visibility='visible';
  onStart(); // brings you back to question one to complete another survey
}

// code that is called when the user is taking the survey again and is trying to view the results from the questions
const viewResultsFromQuestions = () => {
  isSubmitButtonPressed = false;

  // editing elements visibilitys nothing crazy here
  document.getElementById(questions[questionIndex].id).style.visibility="hidden";
  document.getElementById('questionTitle').style.visibility="hidden";
  document.getElementById('scrollable').style.visibility='visible';
  document.getElementById('resultsHeading').style.visibility='visible';
  document.getElementById('view-past-surveys').style.visibility='hidden';
  document.getElementById('backToQuestionsBtn').style.visibility='visible';
  fwdBtn.style.visibility='hidden';
  bckBtn.style.visibility='hidden';
}

// code that is called when user is taking the survey again and is viewing results from the questions, then want to go back to their questions
const backToQuestions = () => {
  // editing elements visibilitys here as well
  document.getElementById(questions[questionIndex].id).style.visibility="visible";
  document.getElementById('questionTitle').style.visibility="visible";
  document.getElementById('scrollable').style.visibility='hidden';
  document.getElementById('resultsHeading').style.visibility='hidden';
  document.getElementById('view-past-surveys').style.visibility='visible';
  document.getElementById('backToQuestionsBtn').style.visibility='hidden';
  fwdBtn.style.visibility='visible';
  bckBtn.style.visibility='visible';
}

// function that displays the current question when called
const displayQuestion = (currQuestion, prevQuestion) => {
  questionTitle.innerHTML = currQuestion.question; // sets the question title

  // hide last question, show current question
  document.getElementById(prevQuestion.id).style.visibility='hidden';
  document.getElementById(currQuestion.id).style.visibility='visible';

  // code for the "other" option
  // if previous question is question 6 and other is checked, hide the input
  if (prevQuestion.id === 'q6' && document.getElementById('otherChecked').checked === true) {
    document.getElementById('ifOtherChecked').style.visibility = 'hidden';
  }
  // if current question is question 6 and other is checked, show the input
  if (currQuestion.id === 'q6' && document.getElementById('otherChecked').checked === true) {
    document.getElementById('ifOtherChecked').style.visibility = 'visible';
  
  }

}

// code that is called when the forward button is pressed
const onFwd = () => {
  questionIndex++;
  let currQuestion = questions[questionIndex];
  let prevQuestion = questions[questionIndex - 1]

  // first conditional question code deciding wheter it should be shown or not
  if ((currQuestion.id === 'q14' && document.getElementById('no-checked').checked === true && prevQuestion.id === 'q13') 
      || 
      (currQuestion.id === 'q14' && document.getElementById('no-checked').checked === false && document.getElementById('yes-checked').checked === false && prevQuestion.id === 'q13')) {
    questionIndex++;
    currQuestion = questions[questionIndex]
  }

  // second conditional question code deciding wheter it should be shown or not
  if (currQuestion.id === 'q16' && document.getElementById('range-two').value >= 3 && prevQuestion.id === 'q15') { 
    questionIndex++;
    currQuestion = questions[questionIndex]
  }

  displayQuestion(currQuestion, prevQuestion);

  // enable / disable the forward and back buttons if necessary
  if (currQuestion.question === questions[1].question) {
    enableBckBtn(bckBtn)  
  } else if (currQuestion.question === questions[17].question) {
    disableFwdBtn(fwdBtn)
  }
}

// code that is called when the back button is pressed
const onBck = () => {
  questionIndex--;
  let currQuestion = questions[questionIndex];
  let prevQuestion = questions[questionIndex + 1]
  let isQuestion16Showing = true

  // first conditional question code deciding wheter it should be shown or not
  if ((currQuestion.id === 'q14' && document.getElementById('no-checked').checked === true && prevQuestion.id === 'q15') 
      || 
      (currQuestion.id === 'q14' && document.getElementById('no-checked').checked === false && document.getElementById('yes-checked').checked === false && prevQuestion.id === 'q15')) {
    questionIndex--;
    currQuestion = questions[questionIndex]
  }

  // second conditional question code deciding wheter it should be shown or not
  if (currQuestion.id === 'q16' && document.getElementById('range-two').value >= 3 && prevQuestion.id === 'q17') { 
    questionIndex--;
    currQuestion = questions[questionIndex]
    isQuestion16Showing = false
  }

  displayQuestion(currQuestion, prevQuestion);

  // enable / disable the forward and back buttons if necessary
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

// disable / enable buttons with styling
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

// code that is called when the an option is pressed from q6 to decide to display the code for the input or not
const otherCheck = () => {
  if (document.getElementById('otherChecked').checked) {
    document.getElementById('ifOtherChecked').style.visibility = 'visible';
  } else {
    document.getElementById('ifOtherChecked').style.visibility = 'hidden';
  }
}

// get the 1st slider elements
var sliderOne = document.getElementById("range");
var outputOne = document.getElementById("range-value");

// get the 2nd slider elements
var sliderTwo = document.getElementById("range-two");
var outputTwo = document.getElementById("range-value-two");

// concat the sliders value with /5
outputOne.innerHTML = sliderOne.value + "/5";
outputTwo.innerHTML = sliderTwo.value + "/5";

// anonomys function for the 1st slider
sliderOne.oninput = function() {
  outputOne.innerHTML = this.value + "/" + "5";
}

// anonomys function for the 2nd slider
sliderTwo.oninput = function() {
  outputTwo.innerHTML = this.value + "/" + "5";
}

// Load stored surveys from localStorage
const storedSurveys = JSON.parse(localStorage.getItem('surveys')) || [];
surveys.push(...storedSurveys);