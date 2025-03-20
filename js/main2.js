// дз 6.1
function remove(text, charRemove) {
    return text.split('').filter(char => !charRemove.includes(char)).join('');
}
let removeSomeText = prompt ("введите текст");
let removeSomeChar = prompt ("введите символы для удаления");
alert(remove(removeSomeText, removeSomeChar.split('')));
// hw_6.2

// дз 6.3
function removeAllElements(array, item) {
    return array.filter(element => element !== item);
}
let array = [1, 3, 4, 6, 4, 2, 5, 7];
let arrayNew = removeAllElements(array, 4);
console.log(arrayNew); 