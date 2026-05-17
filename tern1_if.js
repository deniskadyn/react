let a = Math.floor(Math.random() * 100);
console.log(`a = ${a}`);

let result;

if (a > 10) {
    if ((a) > 5) {
        result = (2 * a) + 1;
    } else {
        if (a < 3) {
            if (1 > 4) {
                if (a % 2 == 0) {
                    result = 6;
                } else {
                    result = 7;
                }
            } else {
                if (a % 2 == 0) {
                    result = 6;
                } else {
                    result = 7;
                }
            }
        } else {
            if ((2 * (a - 2)) > 4) {
                result = 5;
            } else {
                if (a % 2 == 0) {
                    result = 6;
                } else {
                    result = 7;
                }
            }
        }
    }
} else {
    if ((a * 2) > 5) {
        result = (2 * a) + 1;
    } else {
        if (a < 3) {
            if (1 > 4) {
                if (a % 2 == 0) {
                    result = 6;
                } else {
                    result = 7;
                }
            } else {
                if (a % 2 == 0) {
                    result = 6;
                } else {
                    result = 7;
                }
            }
        } else {
            if ((2 * (a - 2)) > 4) {
                result = 5;
            } else {
                if (a % 2 == 0) {
                    result = 6;
                } else {
                    result = 7;
                }
            }
        }
    }
}

console.log(result);