setInterval(setClock, 1000)

const hourHand=document.querySelector('[data-hour-hand]')
const minuteHand=document.querySelector('[data-minute-hand]')
const secondHand=document.querySelector('[data-second-hand]')

function setClock(){
    const currentDate = new Date()
    const secondsratio = currentDate.getSeconds()/60
    const minutesratio = (secondsratio + currentDate.getMinutes())/60
    const hoursratio = (minutesratio + currentDate.getHours())/12
    setRotation(secondHand, secondsratio)
    setRotation(minuteHand, minutesratio)
    setRotation(hourHand,hoursratio)
}
function setRotation(element,rotationRatio){
    element.style.setProperty('--rotation',rotationRatio * 360)
}

setClock();
