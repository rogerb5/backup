"use strict";

let values = [5, 3, 7, 8];
console.log("Before shift " + values)

function shiftRight(list) {
    let last = list[list.length - 1];
    for (let i = list.length - 1; i >= 1; i--) {
        list[i] = list[i - 1]
    }
    list[0] = last;
    console.log("After rightward shift " + list)
}

shiftRight(values);