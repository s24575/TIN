function calculate() {
    const a = parseFloat(document.getElementById("first").value);
    const b = parseFloat(document.getElementById("second").value);
    const operation = document.getElementById("operation").value;
    const resultBox = document.getElementById("result");

    if(isNaN(a) || isNaN(b))
        return;

    if (operation == "div" && b === 0) {
        resultBox.innerHTML = "Division by 0";
        return;
    }

    let result;

    switch (operation) {
        case "add":
            result = a + b;
            break;
        case "sub":
            result = a - b;
            break;
        case "mul":
            result = a * b;
            break;
        case "div":
            result = a / b;
            break;
    }

    resultBox.innerHTML = result;
}