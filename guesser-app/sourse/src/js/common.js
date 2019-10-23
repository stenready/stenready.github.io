
window.onload = () => {

  /**Переменные игры */
  let min = 1,
      max = 10,
      win = getWinnerNumber(min, max),
      numberLeft = 3  //количество попыток


  /**UI */
  const $min = document.querySelector('.min'),
        $max = document.querySelector('.max'),
        $input = document.querySelector('#guesse-input'),
        $submit = document.querySelector('#guesse-btn'),
        $message = document.querySelector('#message'),
        $save = document.querySelector('.save'),

        $gameContainer = document.querySelector('.game-container'),
        $overlay = document.querySelector('.overlay'),
        $showSettings = document.querySelector('.showSettings'),
        $setting = document.querySelector('.setting')
  /**ASSING */
  $min.textContent = min
  $max.textContent = max

  /**ACTIONS */
  $submit.addEventListener('click', (e)=> {    //начинаем игру
    const value = parseInt($input.value)
    $input.value = ''
    /**VALIDATE */
    if( isNaN(value) || value < min || value > max ) { //errors
      setMessage(`Число должно быть в интервале от ${min} до ${max}`, 'red')
    } else { //not error
      if(value == win) {  //win game
        isWin(true, 'Вы угадали, ПОЗДРАВЛЯЕМ!!!')
      } else { 
         numberLeft -= 1
        if( numberLeft === 0 ) { //game over
          isWin(false, `Вы проиграли, нужным числом было ${win}`)
        } else {
          $input.style.borderColor = 'red'
          setMessage(`Число ${value} не правильное, осталось ${numberLeft} попыток`, 'red')
        }
      }
    }
  })

  $gameContainer.addEventListener('mousedown', (e)=> { //новая игра
   if(e.target.classList.contains('play-again')) {
     message.style.display = 'none'
     window.location.reload()
   }
  })


  $showSettings.addEventListener('click', (e)=> {  //открываем настройки
    activeSetting(true)
  })

  document.body.addEventListener('click', (e)=>{  //закрываем настройки по нажатию на оверлей
    if( e.target.classList.contains('overlay') ) {
      activeSetting(false)
    }
  })

  $save.addEventListener('click', (e)=> {  //сохранем настройки по нажатию на кнопку сохранить
    min = parseInt( document.querySelector('#setmin').value ) || min
    max = parseInt( document.querySelector('#setmax').value ) || max
    numberLeft = parseInt( document.querySelector('#setn').value ) || numberLeft
    win = getWinnerNumber(min, max)
    $min.textContent = min
    $max.textContent = max
    activeSetting(false)
  })


  
  /**HELPERS */
function setMessage(msq, color) {
  $message.textContent = msq
  $message.style.color = color
}
function isWin(flag, msg) {
  let color = flag === true ? 'green' : 'red'
  $input.disabled = true
  $input.style.borderColor = color
  $message.style.color = color
  setMessage(msg)
  $submit.value = 'Новая игра'
  $submit.className += 'play-again'
}
function activeSetting(flag) {
  if(flag) {
    $gameContainer.style.opacity = '0.2'
    $overlay.style.display = 'block'
    $setting.classList.add('show')
  } else {
    $gameContainer.style.opacity = '1'
    $overlay.style.display = 'none'
    $setting.classList.remove('show')
  }
}
function getWinnerNumber(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min
}

}