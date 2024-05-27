function adicao(num1, num2) {
    return num1 + num2;
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    if (num2 === 0) {
        return "Erro! Divisão por zero.";
    }
    return num1 / num2;
}

function potenciacao(num1, num2) {
    return Math.pow(num1, num2);
}

function radiciacao(num1, num2) {
    if (num2 === 0) {
        return "Erro! Índice de raiz zero.";
    }
    return Math.pow(num1, 1 / num2);
}

function calculate() {
    let operation = document.getElementById("operation").value;
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let result;

    switch (operation) {
        case "adição":
            result = adicao(num1, num2);
            break;
        case "subtração":
            result = subtracao(num1, num2);
            break;
        case "multiplicação":
            result = multiplicacao(num1, num2);
            break;
        case "divisão":
            result = divisao(num1, num2);
            break;
        case "potenciação":
            result = potenciacao(num1, num2);
            break;
        case "radiciação":
            result = radiciacao(num1, num2);
            break;
        default:
            break;
    }

    document.getElementById("result").innerText = "O resultado da operação " + operation + " é: " + result;
}
