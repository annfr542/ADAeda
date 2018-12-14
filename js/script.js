$(document).ready(function (){
    $('a[href^="#"]').on('click', function(event) {
        let target = $(this.getAttribute('href'));
        var menuHeight = $("div#menu").height() + 20;
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - menuHeight- 400
            }, 1000);
        }
    });

    window.onscroll = function() {scrollFunction()};

    let menu = document.getElementById("menu");
    let sticky = menu.offsetTop;

    const round1Offset = document.getElementById("round2").offsetTop;
    const round2Offset = document.getElementById("round3").offsetTop;
    const round3Offset = document.getElementById("round4").offsetTop;
    const round4Offset = document.getElementById("round5").offsetTop;
    const round5Offset = document.getElementById("goal").offsetTop;
    

    function scrollFunction() {
        

        if (window.pageYOffset > sticky) {
            menu.classList.add("sticky");
        } else {
            menu.classList.remove("sticky");
        }

        let franceScore = document.getElementById("franceScore");
        let usScore = document.getElementById("usScore");
        
        if(window.pageYOffset < round1Offset )
        {
            franceScore.innerHTML = "FRA 0 - ";
            usScore.innerHTML = "0 USA";
        }
        else if(window.pageYOffset > round1Offset &&  window.pageYOffset < round2Offset)
        {
            franceScore.innerHTML = "FRA 1 - "
            usScore.innerHTML = "0 USA"
        }
        else if(window.pageYOffset > round2Offset &&  window.pageYOffset < round3Offset)
        {
            franceScore.innerHTML = "FRA 2 - "
            usScore.innerHTML = "0 USA"
        }
        else if(window.pageYOffset > round3Offset &&  window.pageYOffset < round4Offset)
        {
            franceScore.innerHTML = "FRA 2 - "
            usScore.innerHTML = "1 USA"
        }
        else if(window.pageYOffset > round4Offset &&  window.pageYOffset < round5Offset)
        {
            franceScore.innerHTML = "FRA 3 - "
            usScore.innerHTML = "1 USA"
        }
        else{
            franceScore.innerHTML = "FRA 3 - "
            usScore.innerHTML = "2 USA"
        }
      
    }

    function nutriFunc() {
        document.getElementById("myDropdown").classList.toggle("show");
      }
    
});

// Intialize plots
showPlot('fats_saturated-fat','fatsPlots');
showPlot('snacks_sugars','snacksPlots');
showPlot('meats_energy','meatsPlots')
showPlot('breads_energy','breadsPlots')


function showPlot(imgId,plotClass){
    let x = document.getElementsByClassName(plotClass);
    for (let i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    let selectedImg = document.getElementById(imgId);
    selectedImg.style.display = "block"; 
}