// get input function
function getInput(inputAmount) {
  const inputField = document.getElementById(inputAmount);
  const inputValueText = inputField.value;
  const newInputAmount = parseFloat(inputValueText);
  //   clear depositValue
  inputField.value = '';
  return newInputAmount;
}

// set deposit and withdraw function
function setTotal(totalFieldId, newInputAmount) {
  const currentTotal = document.getElementById(totalFieldId);
  const currentTotalText = currentTotal.innerText;
  const currentTotalAmount = parseFloat(currentTotalText);
  const totalAmount = currentTotalAmount + newInputAmount;
  currentTotal.innerText = totalAmount;
}

// get balance total
function getBalance() {
  const balanceTotal = document.getElementById('current-balance');
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);
  return previousBalanceTotal;
}

// update balance function
function updateTotalBalance(newAmount, isAdd) {
  const balanceTotal = document.getElementById('current-balance');
  const previousBalanceTotal = getBalance();
  if (isAdd == true) {
    const currentTotalBalance = previousBalanceTotal + newAmount;
    balanceTotal.innerText = currentTotalBalance;
  } else {
    const currentTotalBalance = previousBalanceTotal - newAmount;
    balanceTotal.innerText = currentTotalBalance;
  }
}

// handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {
  //   get deposit amount
  const newDepositAmount = getInput('deposit-input');

  if (newDepositAmount > 0) {
    //   set deposit Total
    setTotal('current-deposit', newDepositAmount);

    //   set balance total

    updateTotalBalance(newDepositAmount, true);
  }
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
  // get newWithdrawAmount
  const newWithdrawAmount = getInput('withdraw-input');
  const currentBalance = getBalance();
  if (newWithdrawAmount > 0 && newWithdrawAmount < currentBalance) {
    //update withdraw
    setTotal('current-withdraw', newWithdrawAmount);

    // update balance

    updateTotalBalance(newWithdrawAmount, false);
  }
});
