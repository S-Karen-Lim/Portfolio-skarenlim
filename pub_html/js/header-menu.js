// citation : https://www.youtube.com/watch?v=7-sohNdOT4o
var rightNav = document.querySelector(".header-right-nav");

$(document).ready(function(){
  $('.hamburger-btn').click(function(){
    // var rightNavAttribute = document.getElementById(id).attributes;
    $('.header-right-nav').toggleClass('active');
    $('.hamburger-btn').toggleClass('toggle');

    //if that when the hamburger is clicked and the right nav is set to hidden, make it display.
  //   if(rightNavAttribute['aria-hidden'].value == "true"){
  //      document.getElementById(id).setAttribute("aria-hidden", "false");
  //    } else {
  //   document.getElementById(id).setAttribute("aria-hidden", "true");
  //     }
  })
})


//for the styleguide

var rightNav2 = document.querySelector("#header-right-nav-2");

$(document).ready(function(){
  $('.hamburger-btn2').click(function(){
    $('#header-right-nav-2').toggleClass('active');
    $('.hamburger-btn2').toggleClass('toggle');

    //if that when the hamburger is clicked and the right nav is set to hidden, make it display.
    if(rightNav2.attributeList.contains("true")){
      rightNav2.classList.remove("hidden");
      rightNav2.setAttribute("aria-hidden", "false");

      rightNav2.style.display = "block";
    }
    else{
      rightNav2.attributeList.add("false");
      rightNav2.setAttribute("aria-hidden", "true");
      rightNav2.style.display = "none";
    }
  })
})
