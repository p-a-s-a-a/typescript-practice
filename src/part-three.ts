export {}

let buttonUpdate = document.getElementById('update-balance');
let buttonClear = document.getElementById('clear-balance')!;
let sum = document.getElementById('sum')! as HTMLInputElement;
let fieldBalance = document.getElementById('field-balance');

let totalBalance = 0

clearBalance()

function sumBalance(sum: number) {
    if (fieldBalance) {
        totalBalance += sum
        fieldBalance.innerHTML = totalBalance.toString();
        clearFieldBalance();
    }
}

function clearFieldBalance() {
    sum.value = "";
}

function clearBalance() {
    if (fieldBalance) {
        totalBalance = 0;
        fieldBalance.innerHTML = totalBalance.toString();
    }
}

if (buttonUpdate) {
    buttonUpdate.addEventListener('click', () => {
        sumBalance(Number(sum.value)); 
    });
}

buttonClear.addEventListener('click', () => {
    clearBalance();
});