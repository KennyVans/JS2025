// дз 6.1
function remove(text, charRemove) {
    return text.split('').filter(char => !charRemove.includes(char)).join('');
}
let removeSomeText = prompt ("введите текст");
let removeSomeChar = prompt ("введите символы для удаления");
alert(remove(removeSomeText, removeSomeChar.split('')));