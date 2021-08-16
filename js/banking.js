// get input function
function getInput(inputAmount) {
  const inputField = document.getElementById(inputAmount);
  const inputValueText = inputField.value;
  const newInputAmount = parseFloat(inputValueText);
  //   clear depositValue
  inputField.value = '';
  return newInputAmount;
}

// handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {
  //   get deposit amount
  const newDepositAmount = getInput('deposit-input');

  //   set deposit Total
  const depositTotal = document.getElementById('curent-deposit');
  const previousDepositText = depositTotal.innerText;
  const previousDepositAmount = parseFloat(previousDepositText);
  const totalDepositAmount = previousDepositAmount + newDepositAmount;
  depositTotal.innerText = totalDepositAmount;

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
  const totalWithdraw = document.getElementById('current-withdraw');
  const previousWithdrawText = totalWithdraw.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawText);
  const totalWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
  totalWithdraw.innerText = totalWithdrawAmount;

  // update balance
  const totalBalance = document.getElementById('current-balance');
  const previousTotalBalanceText = totalBalance.innerText;
  const previousTotalBalanceAmount = parseFloat(previousTotalBalanceText);
  const currentTotalBalanceAmount = previousTotalBalanceAmount - newWithdrawAmount;
  totalBalance.innerText = currentTotalBalanceAmount;
});
