/*
  survey for store that sells shoes
  questions: 
    1) name
    2) age
    3) email
    4) address
    5) number
    6) How did you hear about us?
    7) How often do you buy shoes online versus in-store?
    8) How likely are you to shop at our store again?
    9) Rate your overall shopping experience 1-10 -> if below a 6 ask why
    10) Have you returned any shoes? -> if yes ask why
*/

const onStart = () => {
  document.getElementById('questionTitle').style.visibility='visible';
  document.getElementById('start-button').style.visibility='hidden';
}