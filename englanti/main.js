(function(){
  //setTimeout(function(){
  // window.location.reload(8);
  //}, 5000);

  // Functions
  function buildQuiz(){
    try {

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
          const questions = JSON.stringify(q20251027EnsimmainenKoe)
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

            } catch (error) {
            console.error("Error caught:", error);
        }
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
      resultsContainer.innerHTML = `<br><div class=tulokset>${numCorrect} oikein ${myQuestions.length} kysymyksestä. <br><br>Voit siirtyä edellisiin kysymyksiin <br>nähdäksesi mitkä kannattaa korjata. <br><br>Vastausten väri vaihtuu oikeaksi vasta menemällä <br>loppuun uudestaan ja valitsemalla Tarkista<br></div>`;

    } else {
      resultsContainer.innerHTML = `<br><div class=tulokset>${numCorrect} oikein ${myQuestions.length} kysymyksestä</div>`;
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
   // return false; 
  });


function loader(visaparameter) {

  // extract link's parameter
  visa = visaparameter.substring(1);

  // put quizes here
  switch (visa) {
      case "q20251027EnsimmainenKoe":
        questionsObject = q20251027EnsimmainenKoe;
        break;
      case "q2025Kappale4Ja5JaVahan8ia":
        questionsObject = q2025Kappale4Ja5JaVahan8ia;
        break;
      case "q2025Kappale4Ja5JaEnnenSitaTaas":
        questionsObject = q2025Kappale4Ja5JaEnnenSitaTaas;
        break;
      case "q2025Kappale4Ja5JaEnnenSitaLisaa":
        questionsObject = q2025Kappale4Ja5JaEnnenSitaLisaa;
        break;      
      case "q2025Unit2Kappale4":
        questionsObject = q2025Unit2Kappale4;
        break;      
      case "q2025Kappale5":
        questionsObject = q2025Kappale5;
        break;    
  }
  const questions = JSON.stringify(questionsObject);

  localStorage.setItem('myQuestions', questions);
  var myQuestions = JSON.parse(questions)
  // variable to store the HTML output

  window.location.reload();


  //You can now access the json variable's object data like this json.a and json.c
  console.log(visa);
}

  
})();
