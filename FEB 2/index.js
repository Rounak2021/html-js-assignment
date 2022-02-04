var countDown = setInterval(function() {
var timer = new Date("Feb 14, 2022 11:15:00").getTime();
var current_Time = new Date().getTime();
var difference_time = timer - current_Time;
  
var days = Math.floor(difference_time / (1000 * 60 * 60 * 24));
var hours = Math.floor((difference_time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((difference_time % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((difference_time % (1000 * 60)) / 1000);
    
if (difference_time < 0) {
    clearInterval(countDown);
    document.getElementById("demo").innerHTML = "Time Up";
  }else{
      document.getElementById("final-output").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s remaining";
  } 
}, 1000);



