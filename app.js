let button = document.querySelectorAll('.button');
let body = document.querySelector("body");

button.forEach((button) => {
    button.addEventListener('click', (event) => {
        if (event.target.id === 'red') {
            body.style.background = 'linear-gradient(to right, red, rgb(224, 106, 106))';
        }
        if (event.target.id === 'white') {
            body.style.background = 'linear-gradient(to right, white, lightgrey)';
        }
        
        if (event.target.id === 'yellow') {
            body.style.background = 'linear-gradient(to right, yellow, lightyellow)';
        }
        if (event.target.id === 'purple-blue') {
            body.style.background = 'linear-gradient(to right,  #6633cc, #0099ff)';
        }
    });
});
