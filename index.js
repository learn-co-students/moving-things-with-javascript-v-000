const app = "I don't do much."

var dodger = document.querySelector('#dodger')

var moveDodgerRight = () => {
  var leftPos = dodger.style.left.replace('px', '')
  var mvRight = parseInt(leftPos, 10)

    dodger.style.left = `${mvRight + 1}px`

}

document.addEventListener('keydown', function(e) {
  if (e.which === 39) {
    moveDodgerRight()
  }
})