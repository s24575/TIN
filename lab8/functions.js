function canMakeTriange(a, b, c) {
    let result;
    if(a >= b && a >= c){
        result = a < b + c;
    }
    else if(b >= a && b >= c){
        result = b < a + c;
    } else{
        result = c < a + b;
    }
    console.log(`zad1: (${a}, ${b}, ${c}): ${result}`);
}

function inRangeDivisibleBy(a, b, c){
    console.log(`zad2: (${a}, ${b}, ${c})`);
    for(let i = a; i <= b; i++){
        if(i % c == 0){
            console.log(i);
        }
    }
}

function multiplicationTable(n){
    console.log(`zad3: (${n})`);
    for(let i = 1; i <= n; i++){
        let line = ""
        for(let j = 1; j <= n; j++){
            line += i * j + " "
        }
        console.log(line);
    }
}

function fibbonaci(n){
    console.log(`zad4: (${n})`);
    let a = 1;
    let b = 1;
    for(let i = 0; i < n; i++){
        console.log(a);
        let temp = a + b;
        a = b;
        b = temp;
    }
}

function printChristmasTree(height, tree, back){
    let width = 0;
    
    for(let i = 0; i < height; i++){
        let line = "";
        for(let j = 0; j < height - width; j++){
            line += back;
        }
        for(let i = 0; i < 2 * width + 1; i++){
            line += tree;
        }
        for(let j = 0; j < height - width; j++){
            line += back;
        }
        width++;
        console.log(line);
    }

    line = "";
    for(let i = 0; i < height; i++){
        line += back;
    }
    line += tree;
    for(let i = 0; i < height; i++){
        line += back;
    }

    console.log(line);

    line = "";
    for(let i = 1; i < height; i++){
        line += back;
    }
    line += tree + tree + tree;
    for(let i = 1; i < height; i++){
        line += back;
    }
    console.log(line);
}

function squareArea(a){
    return a * a;
}

function trapezeArea(a, b, h){
    return (a + b) * h / 2;
}

function parallelogramArea(x, h){
    return x * h / 2;
}

function rightTriangleArea(a, b){
    return a * b / 2;
}

function calculateArea(type, ...numbers){
    switch(type){
        case "square":
            console.log(squareArea(...numbers));
            break;
        case "trapeze":
            console.log(trapezeArea(...numbers));
            break;
        case "parallelogram":
            console.log(parallelogramArea(...numbers));
            break;
        case "triangle":
            console.log(rightTriangleArea(...numbers));
            break;
    }
}

function calculateAreaSpecial(fn, ...numbers){
    console.log(fn(...numbers));
}

//    [1]
//   [1 1]
//  [1 2 1]
// [1 3 3 1]

function pascalTriangle(n){
    let arr = [];

    for(let i = 0; i < n; i++){
        arr[i] = [1];
        for(let j = 1; j <= i; j++){
            arr[i].push(arr[i - 1][j - 1]);

            if(j != i){
                arr[i][j] += arr[i - 1][j];
            }
        }
    }

    for(let i = 0; i < arr.length; i++){
        line = "";
        for(let j = 0; j < n - i - 1; j++){
            line += " ";
        }
        for(let j = 0; j < arr[i].length; j++){
            line += arr[i][j] + " ";
        }
        console.log(line);
    }
}

function censorSentence(str, arr){
    console.log(str);
    for(let word of arr){
        str = str.replace(word, "*".repeat(word.length));
    }
    console.log(str);
}

window.onload = function() {
    canMakeTriange(1, 2, 3);
    canMakeTriange(1, 2, 2);

    inRangeDivisibleBy(1, 10, 2);
    inRangeDivisibleBy(133, 4523, 431);
    
    multiplicationTable(5);
    multiplicationTable(12);

    fibbonaci(10);

    printChristmasTree(5, "#", " ");
    printChristmasTree(7, " ", "#");

    calculateArea("square", 2);
    calculateArea("trapeze", 3, 7, 2);
    calculateArea("parallelogram", 4, 6);
    calculateArea("triangle", 2, 5);

    calculateAreaSpecial(function (a){
        return a * a
    }, 2);
    calculateAreaSpecial(function (a, b, h){
        return (a + b) * h / 2;
    }, 3, 7, 2);
    calculateAreaSpecial(function (x, h){
        return x * h / 2;
    }, 4, 6);
    calculateAreaSpecial(function (a, b){
        return a * b / 2;
    }, 2, 5);

    pascalTriangle(5);

    censorSentence("Ala ma kota", ["Ala", "kota"])

}