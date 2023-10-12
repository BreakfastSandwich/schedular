// this element sets the current time in the header of the page.
// function is delared outside of the set interval so it call be called on later
// $(function () {
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
const buttonsEl = document.querySelectorAll('.save')
const textAreaEls = document.querySelectorAll('textarea').val
const clearFormBtn = $('#clear')



// creating switch to run parse out the current hour and set the class state.
// the interval for this function can be increased if page lag becomes an issue. during testing there was no problem.

setInterval(function currentHour() {

  let currentTime = dayjs().hour();
  switch (currentTime) {

    case (currentTime < 9):
      hr9el.addClass('future')
      hr10el.addClass('future')
      hr11el.addClass('future')
      hr12el.addClass('future')
      hr13el.addClass('future')
      hr14el.addClass('future')
      hr15el.addClass('future')
      hr16el.addClass('future')
      hr17el.addClass('future')
      break;

    case 9:
      // console.log('hour 9')
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
      // console.log('hour 10')
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
      // console.log('hour 11')
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
      // console.log('hour 12')
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
      // console.log('hour 13')
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
      // console.log('hour 14')
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
      // console.log('hour 15')
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
      // console.log('hour 16')
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

    case 17:
      // console.log('hour 17')
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

    default:
      hr9el.addClass('past')
      hr10el.addClass('past')
      hr11el.addClass('past')
      hr12el.addClass('past')
      hr13el.addClass('past')
      hr14el.addClass('past')
      hr15el.addClass('past')
      hr16el.addClass('past')
      hr17el.addClass('past')

  }
  // console.log(currentTime)

}, 1000);


// pulling the currently saved to-do object from local storage
function retrieveToDos() {
  let currentToDos = JSON.parse(localStorage.getItem('todoItemsArray')) || []
  console.log(currentToDos)

  
  for (let i = 0; i < currentToDos.length; i++) {
    let hour = currentToDos[i].hour
    let text = currentToDos[i].text
    console.log(hour)
    console.log(text)
    let hourEl = document.getElementById(hour)
    hourEl.children[1].value = text



  }


}


// creating the object to be stored and turing it into a JSON file 
function storeToDos(event) {

  let hourEl;
  let textEl; 

  // let's used to parse out the data from the individual div elements
if (!event.target.parentElement.getAttribute('id')){
  hourEl =  event.target.parentElement.parentElement.getAttribute('id')
  textEl = event.target.parentElement.parentElement.children[1].value
 
} else {
  hourEl = event.target.parentElement.getAttribute('id')
  textEl = event.target.parentElement.children[1].value
 
}

  // pulling current stored data, if no data found an empty array is created
  let todoArray = JSON.parse(localStorage.getItem('todoItemsArray')) || []
  

// using a constructor to create each hour's object to be store in the array

  function TodoItem(hour, text) {

    this.hour = hour;
    this.text = text;

  }

  const todoItem = new TodoItem(hourEl, textEl)


  // adding the newly created object to the array
  console.log(todoItem)
  todoArray.push(todoItem)

  localStorage.setItem("todoItemsArray", JSON.stringify(todoArray))
}





// using the forEach method so one event listener can handle all the buttons on the page 
// this was done to limit redundancy of the code and to add some future expandability

buttonsEl.forEach(function (currentBtn) {
  currentBtn.addEventListener('click', storeToDos)
  // console.log(currentBtn)
})


//  calling the stored todo's on page load
retrieveToDos()


// using clear form button to remove stored data and wipe all displayed data

clearFormBtn.on('click',function clearLocal() {
console.log('taco')
  localStorage.clear()
  hr9el.children("textarea").val("")
  hr10el.children("textarea").val("")
  hr11el.children("textarea").val("")
  hr12el.children("textarea").val("")
  hr13el.children("textarea").val("")
  hr14el.children("textarea").val("")
  hr15el.children("textarea").val("")
  hr16el.children("textarea").val("")
  hr17el.children("textarea").val("")
})