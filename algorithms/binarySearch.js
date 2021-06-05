let array = [];
//Заполняем массив отсортированными числами.
for(let i = 0;i < 100;i++){
    array.push(i);
}
let needNumb = Math.floor(Math.random() * 100); //Присваиваем рандомное число.
console.log("Загаданное число = " + needNumb);
//Бинарный поиск.
function binary(array, number){
    let low = 0;
    let high = array.length - 1;
    let mid, temp;
    let counter = 0;    
    while(temp !== number){
        mid = Math.floor((low + high) / 2);
        temp = array[mid];
        console.log(temp, number, mid);
        if(temp < number){
            low = mid + 1;//Если число меньше, чем загадонное, то меньшая граница становится равна центру.
        }else if(temp > number){
            high = mid - 1;//Если число больше, чем загадонное, то большая граница становится равна центру;
        }else if(temp == number){
            return temp;
        }else {return Nan;}
    }
}
let res = binary(array, needNumb);
console.log("Ваше число = " + res);

