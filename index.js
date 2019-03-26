const dodger = document.getElementById('dodger')

function onKeydown(event) {
  if(event.keyCode === 37){
     dodger.style.left - 5px
  }
}

document.addEventListener('keydown', onKeydown)