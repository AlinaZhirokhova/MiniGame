function game1() {
    let numberUser = +prompt('Введите номер месяца');
    function seasons(number) {
        if (number === 1 || number === 2 || number === 12){
          alert('Зима');  
        }
        else if (number >= 3 && number <=5){
            alert('Весна');
        }
        else if (number >= 6 && number <=8){
            alert('Лето');
        }
        else if (number >= 9 && number <=11){
            alert('Осень');
        }
        else {
            alert('Вы ввели неверное число');
        }
    }
    seasons(numberUser);
}




function game2(){
    let list = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    list = list.sort(() => Math.random() - 0.5);
    alert (list);
    function toCamelCase(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
      }
    function words() {
        let first = toCamelCase(prompt('Чему равнялся первый элемент массива?'));
        let last = toCamelCase(prompt('Чему равнялся последний элемент массива?'));
        if (first === list [0] && last === list[list. length - 1]) {
            alert('Молодец! Оба ответа верные!');
        } 
        else if (first === list [0] || last === list[list. length - 1]){
            alert('Вы были близки к победе!');
        }
        else {
            alert('К сожалению, оба ответа неверные(')
        }
    }
    words();
}


function game3() {
    alert('Отгадайте загадку: висит груша нельзя скушать. У вас есть 3 попытки и 2 подсказки.');
    for (let i = 0; i < 3; i++) {
        let userAnswer1 = prompt('Введите ответ').toLowerCase();
        if (userAnswer1 === 'лампочка' || userAnswer1 === 'лампа') {
            alert('Молодец! Ответ верный!');
            break;
        } else {
            let userAnswer2 = prompt('Неверно! Дам подсказку: это сделано из стекла. У тебя осталось 2 попытки.').toLowerCase();
            if (userAnswer2 === 'лампочка' || userAnswer2 === 'лампа') {
                alert('Молодец! Ответ верный!');
                break;
            } else{
                let userAnswer3 = prompt('Неверно! Дам еще одну подсказку: этот предмет светит. У тебя осталась последняя попытка.').toLowerCase();
                if (userAnswer3 === 'лампочка' || userAnswer3 === 'лампа') {
                    alert('Молодец! Ответ верный!');
                    break;
                } else{
                    alert('Ты проиграл( Верный ответ "лампочка".');
                    break;
                }
            }
        }
    }  
}

