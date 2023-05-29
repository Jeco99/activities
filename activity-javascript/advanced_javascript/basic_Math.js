function basicmath(word){

    var alpha = /[a-zA-Z, ]+\W/g;
    var num = /[\d.]+/g;
    var wordOp = word.match(alpha);
    var integers =  word.match(num);
    
    let addition = ['plus', 'sum', 'altogether', 'both', 'combined', 'how many', 'increase', 'join', 'add', 'together', 'total'];
    var subtraction =  ['deduct', 'decrease by', 'difference', 'left over', 'less than', 'minus', 'reduce', 'remains', 'remove', 'subtract', 'take away']
    let multiplication = ['as much', 'by', 'equal groups', 'group of', 'lots of', 'multiply', 'multiplied by', 'per', 'product of', 'times'];
    let division = ['average', 'divide' , 'divided by', 'each', 'equal parts', 'evenly', 'every', 'out of', 'quotient', 'ratio', 'shared equally', 'split'];

    let cleanWord =  wordOp.toString().trim();

    if (subtraction.includes(cleanWord)){
        return Number(integers[0]) - Number(integers[integers.length - 1]);
    } else  if (addition.includes(cleanWord)){
        return Number(integers[0]) + Number(integers[integers.length - 1]);
    } else  if (multiplication.includes(cleanWord)){
        return Number(integers[0]) * Number(integers[integers.length - 1]);
    } else  if (division.includes(cleanWord)){
        return (Number(integers[0]) / Number(integers[integers.length - 1])).toFixed(2);
    } 

    return null;
}

// console.log(basicmath('10 minus 11 '));
// console.log(basicmath('19 plus 12'));
// console.log(basicmath('9 times 15'));
// console.log(basicmath('100 divided by 23.1 '));

module.exports = { basicmath };
