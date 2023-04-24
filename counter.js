const abc = document.querySelector('.digit');


function decrease(){
    let newDigit = parseInt(abc.innerText);
    newDigit = newDigit - 1;
    abc.innerText = newDigit ;
};

function increase(){
    let newDigit = parseInt(abc.innerText);
    newDigit = newDigit + 1;
    abc.innerText = newDigit ;
};