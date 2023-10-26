let minValue = parseInt(prompt('Минимальное знание числа для игры','0'));
let maxValue = parseInt(prompt('Максимальное знание числа для игры','100'));
alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

function myfun() {
    const answerRandom = Math.round( Math.random() * 3);
    switch (answerRandom) {
        case 0:
            answerText =  `Может, это число `;
            break;

        case 1: 
            answerText =   `Совершенно точно это число `;
            break;

        case 2:  
            answerText =  `Только не говорите, что это не число `;
            break;
    
        default:
    } 
};

document.getElementById('btnOver').addEventListener('click', function () {
    myfun();
    answerField.innerText = answerPhrase;
})

document.getElementById('btnRetry').addEventListener('click', function () {

     //сбросить кол-во вопросов, пересчитать answerNumber, тексты меняются на соответствующие началу игры   (перезагрузка страницы?)
     location. reload()
     minValue = 0;
     maxValue = 100;
     orderNumber = 0;    
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue){
            const phraseRandom = Math.round( Math.random() * 4);

            switch (phraseRandom) {
                case 0:
                    answerPhrase =  `Вы загадали неправильное число!\n\u{1F914}`;
                    break;

                case 1: 
                    answerPhrase =   `Число, что Вы загадали, не существует!\n\u{1F61D}`;
                    break;

                case 2:  
                    answerPhrase =  `Я сдаюсь..\n\u{1F92F}`;
                    break;

                case 3:  
                    answerPhrase =  `Всё! Мне надоело.\n\u{1F644}`;
                    break;
              
                default:
                  
              }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.trunc((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = answerText + `${answerNumber }?`;
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    myfun();
    answerField.innerText = answerPhrase;
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue >= maxValue){
            const phraseRandom = Math.round( Math.random() * 4);

            switch (phraseRandom) {
                case 0:
                    answerPhrase =  `Вы загадали неправильное число!\n\u{1F914}`;
                    break;

                case 1: 
                    answerPhrase =   `Число, что Вы загадали, не существует!\n\u{1F61D}`;
                    break;

                case 2:  
                    answerPhrase =  `Я сдаюсь..\n\u{1F92F}`;
                    break;

                case 3:  
                    answerPhrase =  `Всё! Мне надоело.\n\u{1F644}`;
                    break;
              
                default:
                  
              }
            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  - 1;
            answerNumber = Math.trunc((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;
            answerField.innerText = answerText + ` ${answerNumber }?`;
        }
    }
})

document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const victoryRandom = Math.round( Math.random() * 3);
    switch (victoryRandom) {
        case 0:
            answerField.innerText = `Я всегда угадываю \n\u{1F913}`;
            break;

        case 1: 
            answerField.innerText =   `Это было легко!\n\u{1F60E}`;
            break;

        case 2:  
            answerField.innerText =  `Ну и задачку ты задал! \n\u{1F92F}`;
            break;
    
        default:
    } 
    gameRun = false;
};
    //     answerField.innerText = `Я всегда угадываю\n\u{1F60E}`
    //     gameRun = false;
    // }
})

// потом переписать, сократить код с помощью массива вариантов 
// var PhraseArray = [
//     `Вы загадали неправильное число!\n\u{1F914}`,
//     `Число, что Вы загадали, не существует!\n\u{1F61D}`,
//     `Я сдаюсь..\n\u{1F92F}`,
//     `Всё! Мне надоело.\n\u{1F644}`];