// array for questions and answers
var questions = [
    {
      question: "Is it raining?",
      answer1: "Yes",
      answer2: "No",
      answer3: "Maybe",
      answer4: "Heck naw!",
      correctAnswer: "Maybe"
    },
    {
      question: "What kind of pet do I have?",
      answer1: "Dog",
      answer2: "Cat",
      answer3: "Snake",
      answer4: "Fish",
      correctAnswer: "Dog"
    },
    {
      question: "What's Too Short's Favorite word?",
      answer1: "Snitch",
      answer2: "Glitch",
      answer3: "Rich",
      answer4: "Bea*tch",
      correctAnswer: "Bea*tch"
    }
  ];
// Variables
  // keeps track of what has been clicked
  var counter = 0;
  // keeps track of time in seconds
  var timer = 10;
  // count for correct questions answered 
  var correct = 0;
  // count for incorrect questions answered
  var incorrect = 0;

  // below are variables that will be put in the html spot
  var questionEl = document.getElementById("question");
  var answer1El = document.getElementById("answer1");
  var answer2El = document.getElementById("answer2");
  var answer3El = document.getElementById("answer3");
  var answer4El = document.getElementById("answer4");

  // this selects all the items with the class answer  
  var answers = document.querySelectorAll(".answer");
  
  // below are variables that will be put in the html spot
  var correctEl = document.getElementById("correct");
  var incorrectEl = document.getElementById("incorrect");
  var timerEl = document.getElementById("time");


  // Then function declarations 
  // function that takes the var timer and subtracts time 
  function decrement() {
      //   -- reduces time
      timer--;
      // timerEl is shown on html bc ln.50, now timer is shown instead.
      timerEl.textContent = timer;
      // if timer equals 0
      if (timer === 0) {
          // not exactly sure what it does, but it's supposed to stop timer at zero, but it doesn't
          clearInterval(timer);
          console.log(clearInterval);
          // this is supposed to change the question when timer equals 0, but it's not working
          displayQuestion();
          console.log(displayQuestion);
      }
    };
  
  // function to display array   
  function displayQuestion() {
    // 
    //clearInterval(intervalID);
    // 
   intervalID = setInterval(decrement, 1000);
    // below takes ln.39-43 and sets them to the  var counter
    questionEl.textContent = questions[counter].question;
    answer1El.textContent = questions[counter].answer1;
    answer2El.textContent = questions[counter].answer2;
    answer3El.textContent = questions[counter].answer3;
    answer4El.textContent = questions[counter].answer4;
  
  };

// makes the submit button a click event that runs display quesstion.
// issue with function, multiple clicks speed up timers decrement
document.getElementById("submit").addEventListener("click", function() {
    displayQuestion();
    
});

// arrow loop for array by the class = "answer"
answers.forEach(answer =>
  // adds a click event to all with class = "answer"   
  answer.addEventListener("click", event => {
      // not sure about this clearInterval bc it's not working
      clearInterval(intervalID);
    //   console.log(clearInterval);
      // if answer clicked equals correctAnwer in array,  
      if (event.target.textContent === questions[counter].correctAnswer) {
          // var correct is incremented    
          correct++;
          // it is also console logged  
          console.log(correct);
          // not sure about this counter  
          counter++;
          // correctEl is set to incremented correct and displayed  
          correctEl.textContent = correct;
          // change to next question if answer is correct.
          displayQuestion();
        // else does the same as if above but for incorrect  
      } else {
          incorrect++;
          console.log(incorrect);
          incorrectEl.textContent = incorrect;
          counter++;
          // change to next question if answer is incorrect
          displayQuestion();
      }    
  })
  );
  
    // I'm not sure what this does from ln.127-129
    correctEl.textContent = correct;
    incorrectEl.textContent = incorrect;
    timerEl.textContent = timer;
    
   
   
    
    
    // Last would be calls for functions
    
    
    // $(".answer").on("click", function(event) {
        //     clearInterval(intervalID);
        //     if (event.target.textContent === questions[counter].correctAnswer) {
            //       correct++;
            //       console.log(correct);
            //       correctEl.textContent = correct;
            //       counter++;
            //       // update the DOM with the new Correct
            //       displayQuestion();
            //     } else {
                //       incorrect++;
                //       incorrectEl.textContent = incorrect;
                //       // update the DOM with the new Correct
                //       counter++;
                //       displayQuestion();
                //     }
                //   });
                
                
                
                //   Below is a interval function that I'm not sure how to add it to the code
            //       var timer = setInterval(function() {
            //         if (startTime === 1){
            //             clearInterval(timer);
            //             newTimer.innerHTML= "";
            //             //placeholder. need to create a third container
            //             //Make consistent. invisible/visible 
            //             newJumbotron[0].style.display = "Initial";
                        
            //         };
            //         console.log(startTime -= 1);
            //         newTimer.innerHTML = startTime;
            //     }, 1000);
            // };