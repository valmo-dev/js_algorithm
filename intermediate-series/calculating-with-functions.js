/* 
This time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
eight(dividedBy(three()));
*/

const zero = (operation) => {
    return operation ? operation(0) : 0;
};
const one = (operation) => {
    return operation ? operation(1) : 1;
};
const two = (operation) => {
    return operation ? operation(2) : 2;
};
const three = (operation) => {
    return operation ? operation(3) : 3;
};
const four = (operation) => {
    return operation ? operation(4) : 4;
};
const five = (operation) => {
    return operation ? operation(5) : 5;
};
const six = (operation) => {
    return operation ? operation(6) : 6;
};
const seven = (operation) => {
    return operation ? operation(7) : 7;
};
const eight = (operation) => {
    return operation ? operation(8) : 8;
};
const nine = (operation) => {
    return operation ? operation(9) : 9;
};

const plus = (b) => {
    return (a) => {
        return a + b;
    };
};

const minus = (b) => {
    return (a) => {
        return a - b;
    };
};

const times = (b) => {
    return (a) => {
        return a * b;
    };
};

const dividedBy = (b) => {
    return (a) => {
        return Math.floor(a / b);
    };
};
