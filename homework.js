// Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….).
export const numbers = function (){
    let string = ''
    for(let i = 20; i <= 30;  i += 0.5){
        string += i + ', '
    }
    console.log(`Завдання №1 : ${string}`)
}
numbers()
// Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів.
export const numbers2 = function(num){
    let result = ''
    for(let i = 10; i <= 100; i +=10){
         result += i * num + ', '
    }
    console.log(`Завдання №1 : ${result}`)
}
numbers2(27)
// Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N.
export const numbers3 = function(N) {
    let res = [];
    for (let i = 1; i * i <= N; i++) {
        res.push(i);
    }
    console.log(JSON.stringify(res));
}

numbers3(200);

// Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе).
export const numbers4 = function(Num){
    let resNum4 = ''
    for(let i = 1; i <= Num;i++){
        if(Num % i === 0){
            resNum4 += i + ', ' 
        }
    }
      console.log(`Завдання №4 : ${resNum4}`)
}
numbers4(20)
// Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна).
export const number5 = function(num){
    for(let i = 0; i <= num;i++){
        if(num === null){
            console.log('Ви виходите')
            alert('Ви виходите')
            
            if(confirm('Ви впевнені що хочете вийти?')){
                alert('До побачення!')
            }else{
                alert('Добре повертаємось')
                number5(prompt('Введіть ще раз число'))
            }
            return 
        }else if ( num === ''){
            console.log('Ви нічого не ввели')
            alert('Ви нічого не ввели')
            number5(prompt('Введіть число'))
        }
        else{
            num = parseFloat(num)
            if(num % 3 === 0 && num){
            console.log(`Завдання №5 : Можно получить`)
           alert('Можно получить')
           return
        }
        else{
           console.log(`Завдання №5 : Нельзя получить`)
           alert('Нельзя получить')
           return
        } 
        }
       
    }
}
number5(prompt('Введіть число'))