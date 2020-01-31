window.onload = function() {
    // necessary for dropdown menus to function properly:
    // https://stackoverflow.com/a/25347431
    $('.ui.dropdown').dropdown();

    // grab a button with query selector
    let btn = document.querySelector('#clickMe')

    //grab thing to change with query selector
    let changeMe = document.querySelector('#text')


    // add event listener to button
    btn.addEventListener('click', function(){

        console.log('You did it')

        let par = document.createElement('p')

        par.innerHTML = 'yo'

        text.innerHTML = 'Hello'
        text.style.font = 'arial'
        text.style.backgroundColor = 'black'
        text.style.color = 'White'
        
        text.appendChild(par)

    })

    console.log('click')

    


    // on 'event' change thing to change













    
  }
function newFunction() {
    height = 3;
    em;
    width = 3;
    em;
}

