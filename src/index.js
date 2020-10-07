module.exports = function toReadable(number) {
    let numbers = number.toString().split('');


    if (numbers.length === 1) {
        return num_1[numbers];
    }
    if (numbers.length === 2) {
        if (numbers[0] === '0' && numbers[1] !== '0') {
            return num_1[numbers[1]];
        }
        if (numbers[0] === '1') {
            return num_2[numbers.join('')];
        }
        if (numbers[0] !== '0' && numbers[1] === '0') {
            return num_3[numbers[0]];
        } else {
            return num_3[numbers[0]] + ' ' + num_1[numbers[1]];
        }
    }
    if (numbers.length === 3) {
        if (numbers[1] === '0' && numbers[2] === '0') {
            return num_1[numbers[0]] + ' hundred';
        } else {
            return num_1[numbers[0]] + ' hundred ' + toReadable(numbers[1] + numbers[2]);
        }
    }



};

const num_1 = {
    '0': 'zero',
    '1': 'one',
    '2': 'two',
    '3': 'three',
    '4': 'four',
    '5': 'five',
    '6': 'six',
    '7': 'seven',
    '8': 'eight',
    '9': 'nine'
};

const mum_2 = {
    '10': 'ten',
    '11': 'eleven',
    '12': 'twelve',
    '13': 'thirteen',
    '14': 'fourteen',
    '15': 'fifteen',
    '16': 'sixteen',
    '17': 'seventeen',
    '18': 'eighteen',
    '19': 'nineteen'
};

const num_3 = {
    '1': 'ten',
    '2': 'twenty',
    '3': 'thirty',
    '4': 'forty',
    '5': 'fifty',
    '6': 'sixty',
    '7': 'seventy',
    '8': 'eighty',
    '9': 'ninety'
};