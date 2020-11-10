var event, index;
var masText = [];
var masUserAnswer = [];
questStep(works.a00, works.a1, works.a2, works.a0);
switch (event) {
    case 1:
        questStep(works.b00, works.b1, works.b2, works.b0);
        switch (event) {
            case 1:
                questStep(works.d00, works.d1, works.d2, works.d0);
                break;
            case 2:
                questStep(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1:
                break;
            default:
                alert('Ошибка');
        }
        break;
    case 2:
        questStep(works.c00, works.c1, works.c2, works.c0);
        switch (event) {
            case 1:
                questStep(works.d00, works.d1, works.d2, works.d0);
                break;
            case 2:
                questStep(works.d00, works.d1, works.d2, works.d0);
                break;
            case -1:
                break;
            default:
                alert('Ошибка');
        }
        break;
    case -1:
        break;
    default:
        alert('Ошибка');
}
alert('Спасибо за игру');
do {
    index = +prompt('Введите номер вопроса, чтобы посмотреть свой ответ') - 1;
} while(index < 0 || index > 2 || isNaN(index));
alert('Текст: \n' + masText[index] + 'Ваш ответ: ' + masUserAnswer[index]);

function questStep(text, option1, option2, q) {
    do {
        var answer = +prompt(text + option1 + option2 + '-1 - Выход из игры');
        if (answer === -1) {
            break;
        }
    } while (!isAnswer(q, answer));
    masText.push(text);
    masUserAnswer.push(answer);
    event = answer;
}

function isAnswer(q, ans) {
    if (isNaN(ans) || !isFinite(ans)) {
        alert('Вы ввели недопустимый символ');
        return false;
    }
    else if (ans < 1 || ans > q) {
        alert('Ваше число выходит из допустимого диапозона');
        return false;
    }
    return true;
}