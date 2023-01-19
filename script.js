// Калькулятор
// 1) С помощью prompt запрашиваем у пользователя что он хочет сделать (+ - / *). Спрашиваем до тех пор, пока он не введет допустимое значение

// 2) Запрашиваем сколько операндов он хочет использовать. Это должно быть ЧИСЛО больше 1 и меньше 7. Спрашиваем пока пользователь не введет допустимое значение

// 3) Запрашиваем у пользователя каждый операнд. Это должно быть ЧИСЛО. Запрашиваем пока пользователь не введет допустимое значение

// 4) С помощью alert или console.log выводим финальный результат действия (+ - / *).

do {
    operation = prompt("Выберите операцию (+ - / *)", "+");
} while (operation !== "+" && operation !== "-" && operation !== "/" && operation !== "*");

do {
    countOfOperands = parseInt(prompt("Сколько чисел вы хотите использовать?", "2"));
} while(countOfOperands >= 7 || countOfOperands <= 1 || isNaN(countOfOperands));

result = 0;
for(i = 1; i <= countOfOperands; i++) {
    do {
        number = parseInt(prompt(`Введите число ${i}`));
    } while(isNaN(number));

    switch(operation) {
        case "+":
            result += number;
            break;
        case "-":
            result = i === 1 ? number : result - number;
            break;  
        case "*":
            if(i === 1) result = 1;
            result *= number ;
            break;  
        case "/":
            result = i === 1 ? number : result / number;
            break;         
    }
}

alert(result);