document.getElementById('calculator').addEventListener('click', function (event) {
    const calculatorBtn = event.target.innerText;
    const displayField = document.getElementById('display-Field').innerText;

    if (calculatorBtn === "C") {
        document.getElementById('display-Field').innerText = "";
    }
    else if (calculatorBtn === '<') {
        document.getElementById('display-Field').innerText = displayField.slice(0, displayField.length - 1);
    }
    else if (calculatorBtn === '=') {
        document.getElementById('display-Field').innerText = eval(displayField);
    }
    else {
        document.getElementById('display-Field').innerText = displayField + calculatorBtn;
    }
});