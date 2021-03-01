(function () {
  const elButtons = document.querySelectorAll('.counterBtn');
  const elCounter = document.querySelector('#counter')
  elCounter.style.color = 'dodgerblue';

  let count = 0

elButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    if (button.classList.contains('prevBtn')) {
      count--
    } else if (button.classList.contains('nextBtn')) {
      count++
    }
    // console.log(elCounter);
    elCounter.textContent = count

    if (count < 0) {
      elCounter.style.color = 'green'
    } else if (count > 0 ) {
      elCounter.style.color = 'red'
    } else {
      elCounter.style.color = 'dodgerblue'
    }
  })
})
})()
