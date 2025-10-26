(function(){
  
  //import myQuestions from './questions.json' with { type: "json" };

  // Functions
  function buildQuiz(){


    // variable to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach(
      (currentQuestion, questionNumber) => {

        // variable to store the list of possible answers
        const answers = [];

        // and for each available answer...
        for(letter in currentQuestion.answers){

          // ...add an HTML radio button
          answers.push(
            `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${currentQuestion.answers[letter]}
            </label>`
          );
        }

        // add this question and its answers to the output
        output.push(
          `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
          </div>`
        );
      }
    );

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join('');
  }

  function showResults(){

    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll('.answers');

    // keep track of user's answers
    let numCorrect = 0;

    // for each question...
    myQuestions.forEach( (currentQuestion, questionNumber) => {

      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if(userAnswer === currentQuestion.correctAnswer){
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = 'darkgreen';
      }
      // if answer is wrong or blank
      else{
        // color the answers red
        answerContainers[questionNumber].style.color = 'maroon';
      }
    });

    // show number of correct answers out of total
    if (myQuestions.length != numCorrect) {
      resultsContainer.innerHTML = `<br>${numCorrect} oikein ${myQuestions.length} kysymyksestä. <br><br>Voit siirtyä edellisiin kysymyksiin nähdäksesi mitkä kannattaa korjata. <br><br>Vastausten väri vaihtuu oikeaksi vasta menemällä loppuun uudestaan ja valitsemalla Tarkista`;

    } else {
      resultsContainer.innerHTML = `<br>${numCorrect} oikein ${myQuestions.length} kysymyksestä`;

    }
  }

  function showSlide(n) {
    slides[currentSlide].classList.remove('active-slide');
    slides[n].classList.add('active-slide');
    currentSlide = n;
    if(currentSlide === 0){
      previousButton.style.display = 'none';
    }
    else{
      previousButton.style.display = 'inline-block';
    }
    if(currentSlide === slides.length-1){
      nextButton.style.display = 'none';
      submitButton.style.display = 'inline-block';
    }
    else{
      nextButton.style.display = 'inline-block';
      submitButton.style.display = 'none';
    }
  }

  function showNextSlide() {
    showSlide(currentSlide + 1);
  }

  function showPreviousSlide() {
    showSlide(currentSlide - 1);
  }

  // Variables
  const quizContainer = document.getElementById('quiz');
  const resultsContainer = document.getElementById('results');
  const submitButton = document.getElementById('submit');

  const myQuestions = [
    {
      question: "Oletko hiiri?",
      answers: {
        a: "Are you a mouse?",
        b: "Are you mouse?",
        c: "Are you moude?",
        d: "Where is a moude?"
      },
      correctAnswer: "a"
    },
    {
      question: "Olohuone",
      answers: {
        a: "A livingroom",
        b: "A bathroom",
        c: "An livingroom"
      },
      correctAnswer: "a"
    },
    {
      question: "Ravintola",
      answers: {
        a: "A hall",
        b: "An airport",
        c: "A restaurant"
      },
      correctAnswer: "c"
    },
    {
      question: "Hän ei ole koulussa",
      answers: {
        a: "He not cool",
        b: "She is in the school",
        c: "She is not in the school"
      },
      correctAnswer: "c"
    },
    {
      question: "Tall",
      answers: {
        a: "Vahva",
        b: "Pitkä",
        c: "Nopea"
      },
      correctAnswer: "b"
    },
    {
      question: "Sorry is he in a zoo?",
      answers: {
        a: "Anteeksi onko hän eläintarhassa?",
        b: "Anteeksi onko hän keittiössä?",
        c: "Anteeksi onko hän ullakolla?"
      },
      correctAnswer: "a"
    },
    {
      question: "Hän on elokuvissa",
      answers: {
        a: "She is at the zoo",
        b: "He is behind the sofa",
        c: "He is at the cinema"
      },
      correctAnswer: "c"
    },
    {
      question: "Tuoli on pöydän takana",
      answers: {
        a: "A chair is in table",
        b: "A chair is at the table",
        c: "A chair is behind a table"
      },
      correctAnswer: "c"
    },
    {
      question: "Quiet",
      answers: {
        a: "Äänekäs",
        b: "Nopea",
        c: "Hiljainen"
      },
      correctAnswer: "c"
    },
    {
      question: "A loud mouse is in the attic",
      answers: {
        a: "Hiljainen hiiri on eteisessä",
        b: "Äänekäs hiiri on ullakolla",
        c: "Äänekäs hiiri on ullakon alla"
      },
      correctAnswer: "b"
    },
    {
      question: "Pallo on keittiössä",
      answers: {
        a: "A ball is in the kitchen",
        b: "A ball is at the kitchen",
        c: "A ball is on the kitchen"
      },
      correctAnswer: "a"
    }                            
];    

  // Kick things off
  buildQuiz();

  // Pagination
  const previousButton = document.getElementById("previous");
  const nextButton = document.getElementById("next");
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  // Show the first slide
  showSlide(currentSlide);

  // Event listeners
  submitButton.addEventListener('click', showResults);
  previousButton.addEventListener("click", showPreviousSlide);
  nextButton.addEventListener("click", showNextSlide);
})();
