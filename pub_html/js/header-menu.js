// citation : https://www.youtube.com/watch?v=7-sohNdOT4o
var rightNav = document.querySelector(".header-right-nav");

$(document).ready(function(){
  $('.hamburger-btn').click(function(){
    $('.header-right-nav').toggleClass('active');
    $('.hamburger-btn').toggleClass('toggle');

    //if that when the hamburger is clicked and the right nav is set to hidden, make it display.
    if(rightNav.classList.contains("hidden")){
      rightNav.classList.remove("hidden");
      rightNav.setAttribute("aria-hidden", "false");

      // rightNav.style.display = "block";
      // body.style.overflow = "hidden";
    }
    else{
      rightNav.classList.add("hidden");
      rightNav.setAttribute("aria-hidden", "true");
      // rightNav.style.display = "none";
    }
  })
})


//for the styleguide

var rightNav2 = document.querySelector(".header-right-nav2");

$(document).ready(function(){
  $('.hamburger-btn2').click(function(){
    $('.header-right-nav2').toggleClass('active');
    $('.hamburger-btn2').toggleClass('toggle');

    //if that when the hamburger is clicked and the right nav is set to hidden, make it display.
    if(rightNav2.classList.contains("hidden")){
      rightNav2.classList.remove("hidden");
      rightNav2.setAttribute("aria-hidden", "false");

      rightNav2.style.display = "block";
      // body.style.overflow = "hidden";
    }
    else{
      rightNav2.classList.add("hidden");
      rightNav2.setAttribute("aria-hidden", "true");
      rightNav2.style.display = "none";
    }
  })
})
