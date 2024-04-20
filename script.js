const semaphore = document.getElementById('semaphore');
const red = document.getElementById('red');
const yellow = document.getElementById('yellow');
const green = document.getElementById('green');

// time in milliseconds for each traffic light color
const redTime = 3000;
const yellowTime = 1000;
const greenTime = 2000;

// function to change the color of the traffic light
function swapColor(color) {
    red.style.backgroundColor = 'gray';
    yellow.style.backgroundColor = 'gray';
    green.style.backgroundColor = 'gray';

    color.style.backgroundColor = color.id;
}

// function to change the color of the traffic light at each time interval
function changeTrafficLight() {
    setTimeout(() => {
        swapColor(green);
        setTimeout(() => {
            swapColor(yellow);
            setTimeout(() => {
                swapColor(red);
                setTimeout(() => {
                    changeTrafficLight();
                }, redTime);
            }, yellowTime);
        }, greenTime);
    }, 0);
}

changeTrafficLight();