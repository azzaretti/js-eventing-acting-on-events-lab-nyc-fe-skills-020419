const dodger = document.getElementById('dodger')

function onKeydown(event) {
  if(event.keyCode === 37){
     console.log(event.keyCode)
  }
}

document.addEventListener('keydown', onKeydown)