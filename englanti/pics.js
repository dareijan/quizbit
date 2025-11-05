  
 (function(){
    var images = [
        "http://dareijan.github.io/quizbit/englanti/pics/lockinen.jpg", 
        "http://dareijan.github.io/quizbit/englanti/pics/1.jpg",
        "http://dareijan.github.io/quizbit/englanti/pics/2.jpg",
        "http://dareijan.github.io/quizbit/englanti/pics/3.jpg"
   ];
   
   var imgCount = images.length;

   var randNumber=Math.floor((Math.random() * imgCount) + 1);

   imgURL = "url('" + images[randNumber-1] + "')";

   var body=document.getElementById('background');
   body.style.backgroundImage=imgURL;
   body.style.backgroundSize="100% auto";
   body.style.backgroundRepeat="no-repeat";
 }());