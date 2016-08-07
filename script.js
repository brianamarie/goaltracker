var counter = 0
var goal = prompt("How many points do want to work towards?")
//initial counter display
$(".counter").html("Points: " + counter + "/" + goal);


//when clicking item, point is added to counter, notification given, and added to log

$("button").click(function() {
  counter += 1;
  $(".counter").html("Points: " + counter + "/" + goal);
  var dt = new Date();
  var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
  $(".log").append($(this).html() + ", " + dt + time + "<br>");
  alert("Woohoo! 1 point gained! The following will be added to your log: " + $(this).html() + ", " + dt + time);
});


//click to add more
$(".addmore").click(function(){
  var newgoal = prompt("What goal would you like to add?");
  $(".checklist").append("<button class='btn'>" + newgoal + "</button>");
});

$("button").click(function(){
  console.log("click1");
});
