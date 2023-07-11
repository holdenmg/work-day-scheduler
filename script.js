


$(document).ready(function () {
  $("#saved-confirmation").hide()
  

  //Listener for save button. On click stores text in local storage, uses id as key
  $( ".saveBtn" ).on( "click", function(event) {
    var section = $(event.target).closest("section");
    var key = section.attr("id");
    console.log(key);
    var textArea = section.find("textarea");
    var text = textArea.val();
    console.log(text)
    localStorage.setItem(key, text);
  //show and then fade out saved confirmation message. If text was left blank or deleted, message will say "...Updated in..." vice "...Added to..."
    if(text){
      $("#saved-confirmation").html("Appointment Added to <span style='color:magenta'> localStorage </span>&check;")  
    }
    else{
      $("#saved-confirmation").html("Appointment Updated in <span style='color:magenta'> localStorage </span>&check;")
    }
    $("#saved-confirmation").show()
    $("#saved-confirmation" ).fadeOut( 2500, function() {
    })
  })
  //Populate schedule with items saved in local storage
  function displaySched () {
  $("section").each(function(){
    key = $(this).attr("id");
    textArea = $(this).find("textarea");
    text = localStorage.getItem(key);
    textArea.val(text);
  })
  }   
  //Goes to each date block section and updates style
  $("section").each(function(){
    id = $(this).attr("id");
  //Gets number portion of id and turns into int for comparison to time
    blockHour = parseInt(id.slice(-2));
    var nowHour = parseInt(dayjs().format('H'));
//Compare current time and block time and update style as neccessary
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
//Display current time in header
var rightNow = dayjs().format('dddd, MMMM Do');
$("#currentDay").text(rightNow);
displaySched() 
});


