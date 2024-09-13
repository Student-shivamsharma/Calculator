
let input = document.querySelector('.input');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button  => {

  button.addEventListener('click' , (e) => {


    if(e.target.innerText == '='){
      string = eval(string);
      input.value = string;
    }

    else if(e.target.innerText == 'C'){
      string = "";
      input.value = string;

    }

    else if(e.target.innerText == 'Del'){
      string = string.substring(0,string.length-1);
      input.value = string;
    }
    else{
      string += e.target.innerText;
      input.value  =string;
    }

  })
})