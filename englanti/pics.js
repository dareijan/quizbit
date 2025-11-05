 (function(){
    /*window.onload = function () {*/

    var backgroundImg=[
        "pics/1.jpg",
        "pics/2.jpg",
        "pics/3.jpg"
        ]

       /* setInterval(changeImage, 5000); */
        var i = Math.floor((Math.random() * 3));

        /* yliajaa cssn*/
        document.body.style.backgroundImage = "url('"+backgroundImg[i]+"')";
        document.body.style.backgroundRepeat="no-repeat";
        document.body.style.backgroundPosition = "top center";
        document.body.style.backgroundSize = "cover";

}());