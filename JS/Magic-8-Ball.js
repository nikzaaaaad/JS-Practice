randomNumber = Math.floor(Math.random() * 8);

eightBall = "";
switch (randomNumber) {
  case 0:
    eightBall = "It is certain";
    break;

  case 1:
    eightBall = "It is decidedly so";
    break;

  case 2:
    eightBall = "Reply hazy try again";
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
    eightBall = "Signs point to yes";
    break;
}

// in case you want to check the value of the random number
console.log("the value of the random number: " + randomNumber);

// if you want to console log the answer:
console.log("the message: " + eightBall);

//if you want to show the answer on the web page:
let outputMessage = document.getElementById("magicBallMessage");
outputMessage.innerText = `\"${eightBall}\"`;
