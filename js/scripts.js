console.log('Welcome to my portfolio site!')

// Toggle hamburger menu
function menuToggle () {
  var myNavToggle = document.getElementById('myNavtoggle')
  if (myNavToggle.className === 'navtoggle') {
    myNavToggle.className += ' responsive'
  } else {
    myNavToggle.className = 'navtoggle'
  }
