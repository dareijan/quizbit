(function(){
  
  // Functions
  function buildQuiz(){

    // variable to store the HTML output
    const output = [];
    var first_visit = false;
    checkFirstVisit();
    function checkFirstVisit(){
        //if(localStorage.getItem('oltiin täällä')){
         //   return;
        //}
        first_visit = true;
        //localStorage.setItem('oltiin täällä', 1);
        if(!localStorage.getItem('myQuestions')){
          const questions = JSON.stringify(questions20251027)
          localStorage.setItem('myQuestions', questions);
        }

    }
    console.log(first_visit);
    // for each question...
    questions = localStorage.getItem('myQuestions');
    const myQuestions = JSON.parse(questions);
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
    const questions = localStorage.getItem('myQuestions');
    const myQuestions = JSON.parse(questions);
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


  $('a').click(function() { 
    //alert(this.search);
    loader(this.search);  
    return false; 
});


function loader(visaparameter) {

    // extract link's parameter
    visa = visaparameter.substring(1);
    visa = visa.slice(0, -3); 

    // put quizes here
    switch (visa) {
        case "20251027":
         questionsObject = questions20251027;
         break;
        case "202511X":
         questionsObject = questions202511X;
         break;
    }
        try {
            const questions = JSON.stringify(questionsObject);

            localStorage.setItem('myQuestions', questions);
            var myQuestions = JSON.parse(questions)
            // variable to store the HTML output

            window.location.reload();


                    // for each question...
        } catch (error) {
            console.error("Error caught:", error);
        }
        


//You can now access the json variable's object data like this json.a and json.c
console.log(visa);
}

  
})();
