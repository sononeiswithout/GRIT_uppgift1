let foo = 0;
let bar = 0;

document.getElementById("divideBtn").addEventListener("click", function () {
    console.log("divide");

    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;

    foo = Number(num1);
    bar = Number(num2);

    let result = foo / bar;

    if (isNaN(result) || !isFinite(result)) {
        alert("You can't divide us!");
    } else {
        console.log("Result:", result);
    }
});
