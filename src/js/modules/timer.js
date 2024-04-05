function timer() {
    const endDate = new Date()
    endDate.setDate(endDate.getDate() + 3)

    //const endDate = new Date('Apr 6, 2024, 23:59:59')


    const daysElement = document.querySelector('#days')
    const hoursElement = document.querySelector('#hours')
    const minutesElement = document.querySelector('#minutes')
    const secondsElement = document.querySelector('#seconds')

    let timerInterval

    function updateTimer() {
    const now = new Date()
    const timeDifference = endDate - now

        if (timeDifference <= 0) {
            daysElement.innerHTML = '00'
            hoursElement.innerHTML = '00'
            minutesElement.innerHTML = '00'
            secondsElement.innerHTML = '00'
            clearInterval(timerInterval)
        }

    let days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor((timeDifference % (1000 * 60)) / (1000))


    if (+days < 10) {
        days = '0' + days
    }
    if (+hours < 10) {
        hours = '0' + hours
    }
    if (+minutes < 10) {
        minutes = '0' + minutes
    }
    if (+seconds < 10) {
        seconds = '0' + seconds
    }

    daysElement.innerHTML = days
    hoursElement.innerHTML = hours
    minutesElement.innerHTML = minutes
    secondsElement.innerHTML = seconds
    }

    updateTimer()
    timerInterval = setInterval(updateTimer, 1000)
}

export default timer