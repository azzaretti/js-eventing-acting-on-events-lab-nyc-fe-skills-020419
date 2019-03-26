const dodger = document.getElementById('dodger')

function onKeydown(event) {
  if(event.keyCode === 37){
    const currentPosition = parseInt(dodger.style.left)
     dodger.style.left = currentPosition - 5 + 'px'
  }
  if(event.keyCode === 39){
    const currentPosition = parseInt(dodger.style.left)
     dodger.style.left = currentPosition + 5 + 'px'
  }
  if(event.keyCode)
}

document.addEventListener('keydown', onKeydown)