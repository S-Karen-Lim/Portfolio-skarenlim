// citation : https://www.youtube.com/watch?v=7-sohNdOT4o
var rightNav = document.querySelector(".header-right-nav");

$(document).ready(function(){
  $('.hamburger-btn').click(function(){
    // var rightNavAttribute = document.getElementById(id).attributes;
    $('.header-right-nav').toggleClass('active');
    $('.hamburger-btn').toggleClass('toggle');

    // citation: http://www.davidmacd.com/blog/toggle-aria-expanded-javascript.html
    var ariaAttribute = document.querySelector(".header-right-nav").getAttribute("aria-hidden");
    if(ariaAttribute == "true"){
      ariaAttribute = "false";
    }
    else{
      ariaAttribute = "true";
    }
    document.querySelector(".header-right-nav").setAttribute("aria-hidden", ariaAttribute);
  })
})


//for the styleguide

var rightNav2 = document.querySelector("#header-right-nav-2");

$(document).ready(function(){
  $('.hamburger-btn2').click(function(){
    $('#header-right-nav-2').toggleClass('active');
    $('.hamburger-btn2').toggleClass('toggle');

    var ariaAttribute = document.getElementById("#header-right-nav-2").getAttribute("aria-hidden");
    if(ariaAttribute == "true"){
      ariaAttribute = "false";
    }
    else{
      ariaAttribute = "true";
    }
    document.querySelector(".header-right-nav").setAttribute("aria-hidden", ariaAttribute);

  })
})
