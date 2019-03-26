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
  if(event.keyCode == 38){
    const currentPosition = parseInt(dodger.style.bottom)
     dodger.style.bottom = currentPosition - 5 + 'px'
  }
}

document.addEventListener('keydown', onKeydown)