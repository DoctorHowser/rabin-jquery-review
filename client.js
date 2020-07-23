console.log('js is loading!');
// html document
//jquery will change things in html
// we must wait for html to be done before trying to do things
$(document).ready(handleReady);

function handleReady(){
  console.log('jquery is ready!');
  
  /* SELECTORS! */
  $('#mic') //select by id
  $('.subheading') // class
  $('h1')// element
  
  $('#mic').find('h1') //element thats a child of mic

  /* manipulate */
  // $('.subheading').text('Cool Beans');
  // $('p').addClass('blue');
  // $('p').removeClass('check');


  /* GETTERS AND SETTERS */
  $('.subheading').text('Cool Beans'); //setter!
  let subheadingText = $('.subheading').text() // getter!

  let firstName = $('#an-input').val(); // Getter! returns the value of the input field

  $('#an-input').val(''); // Setter! clears input text

  // Click Event Listeners!
  // $(EXISTS_NOW).on('click', EXISTS_IN_FUTURE, doStuff)
  $('#mic').on('click', '.subheading', handleClick);
  $('#wootBtn').on('click', wootClicker);
  $('#submitFood').on('click', foodSubmit);
  // APPEND TO DOM!

}

function foodSubmit(){
  console.log('CLicked Add Food button!');
  const foodIn = $('#foodIn').val(); // get the info in the input!!
  console.log(foodIn);

  if(foodIn === ''){
    alert('Please enter a food!');
  } else {
    $('#fav-foods').append(`<li>${foodIn}</li>`);
    $('#foodIn').val(''); // SETTER!
  }

  //add food to our list on the dom
}

function wootClicker(){
  console.log('clicked woot button');

  $('#mic').append('<p class="subheading check">Woot!</p>');
  // $('.subheading').on('click', handleClick); will keep making listeners!

}

function handleClick() {
  console.log('clicked!');
  // turn the thing we clicked on to blue!
  $(this).toggleClass('blue');
}


console.log('end of js file!');