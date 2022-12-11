/* use set interval bc we want to call a variable
every second, call it setClock, every 1000ms the
function will be called */
setInterval(setClock, 1000)

/* query selector used to select data attributes */
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')

/* define function setClock, make it give current
date by calling new date constructor for date */
function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    /* call function set roation with each hand */
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

/* function to set the hands take parameters - element
we want to rotate, and rotation that we want to use */
function setRotation(element, rotationRatio) {
    /* which property we want to set (rotation variable
    from css) and rotation ratio x 360 because rotation */
    element.style.setProperty('--rotation', rotationRatio * 360)

}

/* call setClock as soon as page loads to avoid clock
starting at 12 and then jumping to current time */
setClock()