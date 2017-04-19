// returns smaller of the two arguments like Math.min
function min(arg1, arg2) {
    if (arg1 < arg2) return arg1;
    return arg2;
}


// Excercise in recursion
// test if a number is even or odd
// 0 is even
// 1 is odd
// every other number is N - 2
function isEven(number) {
    number = Math.abs(number);
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else {
        return isEven(number - 2)
    }
}


// write a function which counts uppercase B's
function countBs(string) {
    return countLetter(string, 'B');
}

// write function which counts a given letter in a string
function countLetter(string, letter) {
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        if (string.charAt(i) === letter) {
            result++;
        }
    }
    return result;
}
