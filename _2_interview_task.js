// Нужно написать функцию, которая будет преобразовывать слова, // разделенные тире/подчеркиванием в camelCase.
// Первое слово должно быть написано с заглавной буквы только в том случае, /1 если исходное слово начиналось с заглавной буквы.
// Все последующие слова всегда должны начинаться с заглавной буквы.
// ПРИМЕР:
// «what-a-nice-day-today» => «whatANiceDayToday» 
// «What_A-Nice_Day_Today» => «WhatANiceDayToday"
// «What-a-Nice-Day-Today» => «WhatANiceDayToday»

const str = 'What-a-Nice-Day-Today'
const func = (s) => {
const res = s.split(/_|-/)
for (let i = 0; i < res.length; i++) {
if (i === 0 && res[0][0] === res[0][0].toUpperCase()) {
res[0][0] = res[0][0].toUpperCase() + res[i].slice(1)
} else if (i !== 0) {
res[i] = res[i][0].toUpperCase() + res[i].slice(1)
}
}
return res.join('')
}

console.log(func(str))

