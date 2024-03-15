/* 
Introduction

The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.


Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
*/

// 1st attempt : using Math.ceils() Methods (rounds up and returns the smallest integer greater than or equal to a given number)
// Here we just have to divise year by 100 and use the methods
const century = (year) => {
    return Math.ceil(year / 100);
};
