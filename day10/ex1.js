'use strict';

let a1 = [1, 2, 3],
    a2 = [11, 12, 13],
    a3 = [21, 22, 23];

function joinAr(...arr) { // 2차원 배열 생성.
    return arr;
}

joinAr(a1, a2, a3);

function printAr(arr) { // 2차원 배열 출력.
    for (let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}

printAr(joinAr(a1, a2, a3)); // 괄호가 붙으면 값으로 출력.