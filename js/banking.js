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

// handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {
  //   get deposit amount
  const newDepositAmount = getInput('deposit-input');

  //   set deposit Total
  setTotal('curent-deposit', newDepositAmount);

  //   set balance total
  const balanceTotal = document.getElementById('current-balance');
  console.log(balanceTotal);
  const previousBalanceText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceText);
  const currentTotalBalance = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = currentTotalBalance;
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
  // get newWithdrawAmount
  const newWithdrawAmount = getInput('withdraw-input');

  //update withdraw
  setTotal('current-withdraw', newWithdrawAmount);

  // update balance
  const totalBalance = document.getElementById('current-balance');
  const previousTotalBalanceText = totalBalance.innerText;
  const previousTotalBalanceAmount = parseFloat(previousTotalBalanceText);
  const currentTotalBalanceAmount = previousTotalBalanceAmount - newWithdrawAmount;
  totalBalance.innerText = currentTotalBalanceAmount;
});
