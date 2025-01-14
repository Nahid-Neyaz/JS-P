// generate a random colour

const randomC = function(){
    const hex= "023456789ABCDE"
    let  colour ='#'
    for(let i=0;i<6;i++){
    colour+= hex[Math.floor(Math.random()*16)]
    }
    return colour;
};

let i;
const chcolor = function(){
    i = setInterval(bgc,1000)
    function bgc(){
    document.body.style.backgroundColor = randomC()
    }
};

const schcolor= function(){
    clearInterval(i)
    i=null
};

//console.log(randomC())
document.querySelector('#start').addEventListener('click',chcolor)
document.querySelector('#stop').addEventListener('click',schcolor)