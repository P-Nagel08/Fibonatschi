function calculateFibonacci() {
    let inputNumber = +document.getElementById("inputNumber").value;
    const resultDiv = document.getElementById("result");

    let fibonacci1 = 0;
    let fibonacci2 = 1;
    let list = [0, 1];
    for (let i = 2; i < inputNumber; i++) {
        const newFibonacci = fibonacci1 + fibonacci2;
        list.push(newFibonacci);
        fibonacci1 = fibonacci2;
        fibonacci2 = newFibonacci;
    }

    resultDiv.innerHTML = list.join(",");
}   
