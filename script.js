


$(document).ready(function () {
  
//var advancedFormat = require('dayjs/plugin/advancedFormat');
//dayjs.extend(advancedFormat);
  //Listener for 
  $( ".saveBtn" ).on( "click", function(event) {
    var section = $(event.target).closest("section");
    var key = section.attr("id");
    console.log(key);
    var textArea = section.find("textarea");
    var text = textArea.val();
    console.log(text)
    localStorage.setItem(key, text);
    //alert(localStorage.getItem(key))
  });

// TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
function displaySched () {
  $("section").each(function(){
    key = $(this).attr("id");
    textArea = $(this).find("textarea");
    text = localStorage.getItem(key);
    textArea.val(text);
})
}

$("section").each(function(){
  id = $(this).attr("id");
  blockHour = parseInt(id.slice(-2));
  console.log(blockHour);
  var nowHour = parseInt(dayjs().format('H'));

  console.log(nowHour);
  if(nowHour > blockHour){
    $(this).removeClass("present")
    $(this).removeClass("future") 
    $(this).addClass("past");
  }
  else if(nowHour === blockHour){
    $(this).removeClass("past")
    $(this).removeClass("future") 
    $(this).addClass("present");
  }
  else{
    $(this).removeClass("present")
    $(this).removeClass("pastt") 
    $(this).addClass("future");
  }

});
  // TODO: Add code to display the current date in the header of the page.
  
var rightNow = dayjs().format('dddd, MMMM Do');
$("#currentDay").text(rightNow);
displaySched()
  
});


