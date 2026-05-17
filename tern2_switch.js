function manyChecks() {
    let a = Math.floor(Math.random() * 20) + 1;
    console.log(`a = ${a}`);

    let result = '';

    switch (true) {
        case a > 10:
            result = 'a is bigger than 10';
            break;
        default:
            result = 'a is less than or equal to 10 ';
            if (a === 5) {
                result = result + 'an example of a special case';
            }
            break;
    }

    switch (true) {
        case a === 15:
            result = result + 'but a is not 15';
            break;
    }

    switch (true) {
        case a > 5:
            result = result + 'and a is greater than 5';
            break;
        default:
            result = result + 'and a is less than or equal to 5 ';
            break;
    }

    switch (true) {
        case a % 2 === 1:
            result = result + ' and a is odd';
            break;
        case a % 2 === 0:
            result = result + ' and a is even';
            break;
    }

    console.log(result);
    return result;
}

manyChecks();