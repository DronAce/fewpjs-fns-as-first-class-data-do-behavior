/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
    const timeString = document.getElementById('time').value
    displayMessage(greet(timeString))
    
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
    const hours = parseInt(time)
        if   (hours < 12) {
            return "Good Morning"
        }
        else if (hours > 17) {
            return "Good Evening"
        }
        else if ( hours > 12) {
            return "Good Afternoon"
        } else {
            return time
        }
        
}
/* Write your implementation of displayMessage() */
displayMessage = (greet) => {
    let greeting = document.querySelector('#greeting')
    greeting.textContent = greet
}