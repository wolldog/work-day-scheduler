//Global variables

//current date/time executes dayjs API
var today = dayjs();
//current hour as integer
var timeNow = dayjs().hour();
//identifies parent div for each time-block
var hourDiv = $('.row.time-block');


//Document ready function to call jQuery once all elements have been rendered
$(document).ready (function () {

  //Add click event listener to 'save' button.
  $(".btn.saveBtn").click(function() {
    //Assign variable 'thisHour' a value based on parent div #id;
    var thisHour = ($(this).parent().attr('id'));
    //Assign variable 'diaryEntry' the value of any text in 'textarea'
    var diaryEntry = ($(this).parent().children('textarea').val());
    
    console.log(thisHour)
    console.log(diaryEntry)

    //Store key:'thisHour' value: 'diaryEntry' in localstorage
    localStorage.setItem(thisHour, diaryEntry) 
  });

  //for loop executed on page load that iterates over each time-block.
  for (var i =0; i < hourDiv.length; i++) {
    //Assigns variable 'hourID' the value of it's parent div's id (hour-#)
        var hourId = $(hourDiv[i]).attr('id')
    //Compares the value of 'timeNow' to the number in 'hourID' and adds a class of 
    //'past', 'present or 'future' to the parent div.
        if (timeNow == hourId.slice(5)) {
          $(hourDiv[i]).addClass('present');
        }
        else if (timeNow > hourId.slice(5)) {
          $(hourDiv[i]).addClass('past');
        }
        else {
          $(hourDiv[i]).addClass('future');
        }

      //Retrives any stored diaryEntry for the div
      var diaryText = $(hourDiv[i]).children('textarea')
      diaryText.val(localStorage.getItem(hourId))
  }
  

  //Populates <p> element with id #current day with todays date in desired format.
  $('#currentDay').text(today.format('dddd, MMMM Do'));


});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.