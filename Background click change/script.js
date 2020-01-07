const btn = document.querySelector('.btn');
const body = document.querySelector('body');

const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'pink', 'brown', 'purple'];

btn.addEventListener('click',changeColor);

function changeColor(){
    let random = Math.floor(Math.random()*colors.length)
    body.style.backgroundColor = colors[random];
}