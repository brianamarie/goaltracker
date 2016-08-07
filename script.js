var counter = 0
  //var goal = prompt("How many points do want to work towards?")
var goal = 50
  //initial counter display
$(".counter").html("Points: " + counter + "/" + goal);

//when clicking item, point is added to counter, notification given, and added to log

$(".item").click(function() {
  counter += 1;
  $(".counter").html("Points: " + counter + "/" + goal);
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
  $(".log").append($(this).html() + ", " + dt + time + "<br>");
});

//click to add more
$(".addmore").click(function() {
  var newgoal = prompt("What goal would you like to add?");
  $(".checklist").append("<button class='btn item'>" + newgoal + "</button>");
});

$(".logbtn").click(function() {
  //change button text
  //change class 
  $(".log").toggle();
  if ($(".logbtn").html("Hide Log")) {
    $(".logbtn").html("View Log");
  } else {
    $(".logbtn").html("Hide Log");
  };

});

//clear the log with warning
$(".clearlog").click(function(){
  var d = confirm("Are you sure you want to delete your progress?");
  if (d === true) {
    counter = 0;
    $(".log").empty();
    $(".counter").html("Points: " + counter + "/" + goal);
  };
})
