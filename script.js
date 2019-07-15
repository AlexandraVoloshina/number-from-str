var arr = '2Fiona Ig7or J1amila B3ob Ali5ce';
// var arr = 'A3lice 2Bob Er1nst';
// var arr = 'Tes1t';

function arrSort(arr) {
  //Вытаскиваем со строки только цифры
  var arr_ = parseInt(arr.replace(/\D+/g,""));
  //Поолученное число преобразуем в строку
  var arr2 = arr_.toString();
  //Строку разбиваем на массив, элементы которого содержат каждое число отдельно
  var arr4 = arr2.split("");
  //'2Fiona Ig7or J1amila B3ob Ali5ce' разбивем на массив, элементы которого каждое слово отдельно
  var arr3 = arr.split(" ");
//Создаем массив,элементы которого содржат index (число со слова) и value (само слово)
  var arrObj = [];
  for (var i=0; i< arr3.length;i++) {
    arrObj[i] = {index: arr4[i], value: arr3[i]};
  }
//Функция сортировки
  arrObj.sort(function (a, b) {
    if (a.index > b.index) {
      return 1;
    }
    if (a.index < b.index) {
      return -1;
    }
    return 0;
  });
//Добавляем в новый массив только значение value
  var arrResult = [];
  for (var key in arrObj){
    arrResult.push(arrObj[key].value);
  }
//Преобразум в строку и выводим
  return arrResult.join(" ");
}

console.log(arrSort(arr));

