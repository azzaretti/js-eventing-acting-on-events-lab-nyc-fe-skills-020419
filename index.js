const dodger = document.getElementById('dodger')

function onKeydown(event) {
  if(event.keyCode === 37){
     console.log(dodger.style.left)
  }
}

document.addEventListener('keydown', onKeydown)