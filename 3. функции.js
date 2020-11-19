// пример функции 1
function getName(name) {
    return name + '!!!!!';
}

const name = getName('Ramazan') // Ramazan!!!!!
const name2 = getName('Shamil') // Shamil!!!!!

document.appendChild(name);


// пример функции 2
function getStockPercent(price, divident, period) {
    const vatValue = 0.3; // ставлка налога 30%
    const annualDividends = (divident * period) * vatValue; // получаем дивиденды за год
    return annualDividends * 100 / price; // получаем процент от суммы
}

const apple = getStockPercent(120, 0.2, 4);
const microsoft = getStockPercent(210, 0.56, 12);
