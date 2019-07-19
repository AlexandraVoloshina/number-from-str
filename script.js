var arr = '2Fiona Ig7or J1amila B3ob Ali5ce';
//var arr = 'A3lice 2Bob Er1nst';
//var arr = 'Tes1t';

//Функция, которая достает число из слова
function arrNum(arr){
  var strNumber = '';
  for (var i = 0; i < arr.length; i++){
    if(+arr[i]){
      strNumber += +arr[i];
    }
  }
  return strNumber;
}

//Функция сортировки
function sortWord(a, b){
  return arrNum(a) - arrNum(b);
}

//Главная функция сортировки строки
function arrSort(arr) {
  //Разбиваем строку на массив из слов
  var arrArrayWords = arr.split(" ");
  arrArrayWords.sort(sortWord);
  return arrArrayWords;
}
//Вывод результата
 console.log(arrSort(arr));
