let botOrder = []
let playerOrder = []
let score = 0


//0 - Green
//1 -Yellow
//2 - Red
//3 - Blue

let choiceColorBot = () =>{
    botOrder.push(Math.floor(Math.random()*4))
    return botOrder
}

let botUsingColor = ()=>{
    for(i=0;i<botOrder.length;i++){
        switch (botOrder[i]) {
            case 0:
                c0.classList.add('onGreen')
                break;
            case 1:
                c1.classList.add('onYellow')
                break;
            case 2:
                c2.classList.add('onRed')
                break;
            case 3:
                c3.classList.add('onBlue')
                break;
            default:
                break;
        }
    }
}

let start = ()=>{
    // Selecionar as div's das cores -------------
    const c0 = document.querySelector('.green');
    const c1 = document.querySelector('.yellow');
    const c2 = document.querySelector('.red');
    const c3 = document.querySelector('.blue')
    // -------------------------------------------- 

    // Chamando a função para colocar uma cor a mais
    choiceColorBot();

    document.querySelector('.ready').classList.remove("invisible");

    if(botOrder.length<1){

    }
}

