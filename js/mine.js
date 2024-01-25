// Sidebar Toggle
$("#home span").click(function(){
    $(".sidebar").animate({left:0},500);
});

$(".sidebar i").click(function(){
    let sidebarWidth = $(".sidebar").outerWidth(true);
    $(".sidebar").animate({left:`-${sidebarWidth}`},500);
});

//Sidebar links scroll
$(".sidebar-content ul li a").click(function(eInfo){
    
    let aHref = $(eInfo.target).attr("href");
    let sectionLoc = $(aHref).offset().top;
    $("html , body").animate({scrollTop: sectionLoc}, 1500);
});



// Accordion
$(".acc h2").click(function(eInfo){
    $(".acc-p").not($(eInfo.traget).next()).slideUp(500);
    $(eInfo.target).next().slideToggle(500);
})

// Date Countdown
let countDownDate = new Date("Jan 5, 2050 15:37:25").getTime();

let x = setInterval(function() {

  let now = new Date().getTime();
  let distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#days").html(`${days} D`);
  $("#hours").html(`${hours} H`);
  $("#minutes").html(`${minutes} M`);
  $("#seconds").html(`${seconds} S`);

  if (distance < 0) {
    clearInterval(x);
    $("#days").html("EXPIRED");
    $("#hours").html("EXPIRED");
    $("#minutes").html("EXPIRED");
    $("#seconds").html("EXPIRED");
  }
}, 1000);


//Text Countdown
$("textarea").keyup(function(){
    let currentLength = $(this).val().length;
    let textCount = $("#text-count").text(100-currentLength);
    if(currentLength>=100)
    {
        textCount =  $("#text-count").html("your available character finished");
    }
})

