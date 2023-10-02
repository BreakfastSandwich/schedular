// this element sets the current time in the header of the page.
// function is delared outside of the set interval so it call be called on later

const timeDisplayEl = $('#current_time')

function displayTime() {
  var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm a');
  timeDisplayEl.text(rightNow);
 }

// "setInterval" runs at a 500ms interval for smoother time transitions on the page.
setInterval(displayTime(), 500);

//  calling the display time function to activate at page load
// this minimizes the page jerk experienced when elements are loaded with a delay.
displayTime();


// creating Const's to traverse the Dom
const hr9el = $('#hour-9')
const hr10el = $('#hour-10')
const hr11el = $('#hour-11')
const hr12el = $('#hour-12')
const hr13el = $('#hour-13')
const hr14el = $('#hour-14')
const hr15el = $('#hour-15')
const hr16el = $('#hour-16')
const hr17el = $('#hour-17')


// creating switch to run parse out the current hour and set the class state.
// the interval for this function can be increased if page lag becomes an issue. during testing there was no problem.
setInterval(function currentHour() {

  let currentTime = dayjs().hour();
  switch (currentTime) {
    case 9:
      console.log('hour 9')
      hr9el.addClass('present')
      hr10el.addClass('future')
      hr11el.addClass('future')
      hr12el.addClass('future')
      hr13el.addClass('future')
      hr14el.addClass('future')
      hr15el.addClass('future')
      hr16el.addClass('future')
      hr17el.addClass('future')
      break;

    case 10:
      console.log('hour 10')
      hr9el.addClass('past')
      hr10el.addClass('present')
      hr11el.addClass('future')
      hr12el.addClass('future')
      hr13el.addClass('future')
      hr14el.addClass('future')
      hr15el.addClass('future')
      hr16el.addClass('future')
      hr17el.addClass('future')
      break;

    case 11:
      console.log('hour 11')
      hr9el.addClass('past')
      hr10el.addClass('past')
      hr11el.addClass('present')
      hr12el.addClass('future')
      hr13el.addClass('future')
      hr14el.addClass('future')
      hr15el.addClass('future')
      hr16el.addClass('future')
      hr17el.addClass('future')
      break;

    case 12:
      console.log('hour 12')
      hr9el.addClass('past')
      hr10el.addClass('past')
      hr11el.addClass('past')
      hr12el.addClass('present')
      hr13el.addClass('future')
      hr14el.addClass('future')
      hr15el.addClass('future')
      hr16el.addClass('future')
      hr17el.addClass('future')
      break;

    case 13:
      console.log('hour 13')
      hr9el.addClass('past')
      hr10el.addClass('past')
      hr11el.addClass('past')
      hr12el.addClass('past')
      hr13el.addClass('present')
      hr14el.addClass('future')
      hr15el.addClass('future')
      hr16el.addClass('future')
      hr17el.addClass('future')
      retrieveToDos
      break;

    case 14:
      console.log('hour 14')
      hr9el.addClass('past')
      hr10el.addClass('past')
      hr11el.addClass('past')
      hr12el.addClass('past')
      hr13el.addClass('past')
      hr14el.addClass('present')
      hr15el.addClass('future')
      hr16el.addClass('future')
      hr17el.addClass('future')
      break;

    case 15:
      console.log('hour 15')
      hr9el.addClass('past')
      hr10el.addClass('past')
      hr11el.addClass('past')
      hr12el.addClass('past')
      hr13el.addClass('past')
      hr14el.addClass('past')
      hr15el.addClass('present')
      hr16el.addClass('future')
      hr17el.addClass('future')
      break;

    case 16:
      console.log('hour 16')
      hr9el.addClass('past')
      hr10el.addClass('past')
      hr11el.addClass('past')
      hr12el.addClass('past')
      hr13el.addClass('past')
      hr14el.addClass('past')
      hr15el.addClass('past')
      hr16el.addClass('present')
      hr17el.addClass('future')
      break;

    case 16:
      console.log('hour 17')
      hr9el.addClass('past')
      hr10el.addClass('past')
      hr11el.addClass('past')
      hr12el.addClass('past')
      hr13el.addClass('past')
      hr14el.addClass('past')
      hr15el.addClass('past')
      hr16el.addClass('past')
      hr17el.addClass('present')
      break;
  }
  console.log(currentTime)

},1000);


// pulling the currently saved to-do object from local storage
function retrieveToDos(){
  let currentToDos = JSON.parse(localStorage.getItem('todoItemsArray'))
  }




$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
    // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?


  const todoItem = {

    hour: hourEl,
    text: textInput
  
  }
  
  localStorage.setItem("todoItemsArray", JSON.stringify(todoItem))

});





// pulling the currently saved to-do object from local storage
function retrieveToDos(){
let currentToDos = JSON.parse(localStorage.getItem('todoItemsArray'))
}


// creating the object to be stored and turing it into a JSON file 
function storeToDos() {
let hourEl = 3
let textInput = 0
const todoItem = {

  hour: hourEl,
  text: textInput

}

localStorage.setItem("todoItemsArray", JSON.stringify(todoItem))
}
