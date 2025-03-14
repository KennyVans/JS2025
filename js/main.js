// 3.1  вывести все известные вам типы данных в консоль. Используя оператор typeofиconsole.log
// строка, число, логичное значение, не иниц., объект, массив, нулл.
// let str = "Hello";
// let numb = 27;
// let IsTrue = true;
// let undf;
// let odj = { name: "Kenny" };
// let arr = [1, 2, 3];
// let nthng = null;
// console.log(typeof str);
// console.log(typeof numb);
// console.log(typeof IsTrue);
// console.log(typeof undf);
// console.log(typeof odj);
// console.log(typeof arr);
// console.log(typeof nthng);

// 3.2 Получить от пользователя 3 строки и вывести их в любом порядке одной командой (шаблонные строки);
// let login = prompt ("Username");
// let password = prompt ("Your Password");
// let email = prompt ("Your Email");
// console.log (" ${email} ${login} ${password} ");

// 3.3 Разложить по цифрам пятизначное число и вывести в исходном порядке через пробел.
// const num = 10369;
// const str = String(num);
// const rslt = str.split('').join(" ");
// console.log(rslt);

// 4.1 С помощью prompt спросить “ имя пользователя”. С помощью alert вывести "Hello, John! How are you?" , где “ John” это то, что ввел пользователь
// const yourName = prompt ("What is your name?");
// alert ( "Hello, " + yourName + "! " + "How are you?");

// 4.2 Дано трехзначное число, которое предоставляет пользователь, нужно определить: Верно ли, что все цифры одинаковы? Есть ли среди цифр цифры одинаковые?
// const enterNumber = prompt ("Пожалуйста! Введите 3 числа!");
// // важно! писать без пробела между переменной и []
// const num0 = enterNumber[0];  
// const num1 = enterNumber[1];
// const num2 = enterNumber[2];
// if (num0 === num1 && num1 === num2) {
//     alert ("Все цифры одинаковые!");
// }
// else if (num0 === num1 || num1 === num2 || num0 === num2) {
//     alert ("Есть одинаковые цифры!");
// }
// else {
//     alert("Все цифры разные!");
// }

// 4.3 
// год рождения
// function userAge() {
//     const yourBD = prompt ("Ваш год рождения?");
//     const thisYear = new Date().getFullYear();
//     if(yourBD) {
//         const yourAge = thisYear - Number(yourBD);
//         alert(`Вам ${yourAge} лет`);
//     }
//     else {
//         alert("Жаль,  что Вы не захотели ввести Ваш год рождения!"); 
//     }
// }
// userAge();
// // город
// function userCity() {
//     const yourCity = prompt ("Ваш город проживания?");
//     if(yourCity) {  
//         if (yourCity === "Киев" || yourCity === "Київ" || yourCity === "Kyiv") {
//             alert(`Вы живете в столице Украины!`);
//         } 
//         else if (yourCity === "Лондон") {
//             alert("Ты живешь в столице Великобритании!");
//         }
//         else if (yourCity === "Вашингтон") {
//             alert("Ты живеш в столице США!");
//         }
//         else {
//             alert(`${yourCity} - Ваш город!`); 
//         } 
//     }
//     else {
//         alert("Жаль, что Вы не захотели ввести Ваш город!"); 
//     } 
// }
// userCity(); 
// // спорт
// function userSport(){
//     const yourSport = prompt ("Твой любимый вид спорта?");
//     if(yourSport) {
//         if (yourSport === "Бокс") {
//             alert("Круто! Хочешь быть как Виталий Кличко?");
//         }
//         else if(yourSport === "Хоккей") {
//             alert("Круто! Хочешь быть как Уейн Гретцки?");
//         }
//         else if(yourSport === "Баскетбол") {
//             alert("Круто! Хочешь быть как Джеймс Леброн?");
//         }
//         else {
//             alert(`${yourSport} - твой любимый вид спорта!`); 
//         } 
//     }
//     else{
//         alert("Жаль, что Вы не захотели ввести Ваш любимый вид спорта!");
//     }
// }
// userSport();

// 4.4
let numOrStr = prompt('input number or string');
console.log(numOrStr);

switch (true) {
	case numOrStr === null:
		console.log('ви скасували')
	break;
	case numOrStr.trim() === '':
		console.log('Empty String');
	break;
	case isNaN(+numOrStr):
		console.log(' number is Ba_NaN')
	break;
	default:
		console.log('OK!')
	break;
}