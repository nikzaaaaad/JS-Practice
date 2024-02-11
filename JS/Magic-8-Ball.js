randomNumber = Math.floor(Math.random() * 8);

eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall =
      "You know, I've got a better idea. How about you shake me up, and whatever answer I give, we both just pretend it's profound?";
    break;

  case 1:
    eightBall =
      "You're looking for wisdom in a ball? Might as well ask a kangaroo to balance your checkbook while you're at it";
    break;

  case 2:
    eightBall = "Thanks to ChatGPT for generating this nonsense";
    break;

  case 3:
    eightBall = "Cannot predict now";
    break;

  case 4:
    eightBall = "Do not count on it";
    break;

  case 5:
    eightBall = "My sources say no";
    break;

  case 6:
    eightBall = "Outlook not so good";
    break;

  case 7:
    eightBall = "Just do it (or not)";
    break;
}

// in case you want to check the value of the random number
console.log("the value of the random number: " + randomNumber);

// if you want to console log the answer:
console.log("the message: " + eightBall);

//if you want to show the answer on the web page:
let outputMessage = document.getElementById("magicBallMessage");
outputMessage.innerText = `\"${eightBall}\".`;
