window.onload = () => {

document.querySelector('#loan-form').addEventListener('submit', (e)=>{
  
  e.preventDefault()
  // LOADER
  const load = document.querySelector('#loaded')
  const res = document.querySelector('#results')
  res.style.display = 'none'

  // UI vars
  const $amount = document.querySelector('#amount')
  const $interest = document.querySelector('#interest')
  const $month = document.querySelector('#month')

  const $results = document.querySelector('#results')
  const $monthlyPayment = document.querySelector('#monthly-payment')
  const $totalPayment = document.querySelector('#total-payment')
  const $totalInterest = document.querySelector('#total-interest')

  //CALCULAT
  const sumAmount = parseFloat($amount.value)

  const procent = ($interest.value / 12) * $month.value //процент по всему кредиту
  const sumAll = ( sumAmount + (sumAmount / 100 * procent) ) //обшая сумма выплаты
  const interestAll = sumAll - sumAmount  //переплатили такую сумму
  const payMonth = sumAll / $month.value  //платим в месяц
  //APPEND TO DOM
  if( procent && sumAll ) {  //проверка заполнены ли все поля
    load.style.display = 'block'

    $monthlyPayment.value = payMonth.toFixed(2)
    $totalPayment.value = sumAll.toFixed(2)
    $totalInterest.value = interestAll.toFixed(2)

    setTimeout( (e)=>{
      load.style.display = 'none'
      res.style.display = 'block'
    }, 1200 )
  } else {
    //ERROR
    const card = document.querySelector('.card')
    const heding = document.querySelector('.heading')

    const errorDiv = document.createElement('div')
    errorDiv.className = 'alert alert-danger'

    errorDiv.appendChild(document.createTextNode('Check your Numbers'))
    card.insertBefore(errorDiv, heding)

    setTimeout(()=>{
      document.querySelector('.alert').remove()
    }, 2000)
  }

})

}