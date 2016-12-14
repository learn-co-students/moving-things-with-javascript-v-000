function moveDodgerRight() {
  var leftNumber = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumber, 10)
  if (left < 320) {
      dodger.style.left = `${left + 1}px`
  }
}


function moveDodgerLeft() {
  var leftNumber = dodger.style.left.replace('px', '')
  var left = parseInt(leftNumber, 10)
  if (left > 0) {
      dodger.style.left = `${left - 1}px`
  }
}

document.addEventListener('keydown', function(e) {

  switch (e.which) {
    case 37:
      moveDodgerLeft()
      break;
    case 39:
      moveDodgerRight()
      break;
    default:

  }
})
