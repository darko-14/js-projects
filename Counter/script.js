const add = document.querySelector('#add')
const sub = document.querySelector('#sub')
const reset = document.querySelector('#reset')
const counter = document.querySelector('.counter')

let count = 0

add.addEventListener('click', function(){
    count++
    counter.innerHTML = count
    if(counter.innerHTML > '0'){
        counter.style.color = 'green'
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'black'
    }
    counter.animate([{opacity:'0'},{opacity: '1'}],
    {duration:500,full:'forwards'})
   
})
sub.addEventListener('click', function(){
    count--
    counter.innerHTML = count
    if(counter.innerHTML < '0'){
        counter.style.color = 'red'
    }
    else if(counter.innerHTML === '0'){
        counter.style.color = 'black'
    }
    counter.animate([{opacity:'0'},{opacity: '1'}],
    {duration:500,full:'forwards'})
})
reset.addEventListener('click', function(){
    if(counter.innerHTML !== '0'){
        counter.innerHTML = '0'
        counter.style.color = 'black'
    }
    counter.animate([{opacity:'0'},{opacity: '1'}],
    {duration:2000,full:'forwards'})
})
