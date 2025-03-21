// // дз 6.1
// function remove(text, charRemove) {
//     return text.split('').filter(char => !charRemove.includes(char)).join('');
// }
// let removeSomeText = prompt ("введите текст");
// let removeSomeChar = prompt ("введите символы для удаления");
// alert(remove(removeSomeText, removeSomeChar.split('')));


// // дз 6.3
// function removeAllElements(array, item) {
//     return array.filter(element => element !== item);
// }
// let array = [1, 3, 4, 6, 4, 2, 5, 7];
// let arrayNew = removeAllElements(array, 4);
// console.log(arrayNew); 

// hw_6.2
function averageNumbers(arr) {
    let numbers = arr.filter(n => typeof n === 'number');
    if (numbers.length === 0) return null;
    return numbers.reduce((a, b) => a + b, 0) / numbers.length;
}
console.log(averageNumbers ([10, 'dog', true, 20, null, 30, 'cat', 40]) ); 
