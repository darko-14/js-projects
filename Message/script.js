const btn = document.querySelector('#btn')
const msgIn = document.querySelector('#msgIn')
const msgOut = document.querySelector('#msgOut')

btn.addEventListener('click', function(){

    let content = msgIn.value
    if(content === ''){
        alert('Please write a message')
    }else{
        msgOut.innerHTML = content
        msgIn.value = ''
    }

})