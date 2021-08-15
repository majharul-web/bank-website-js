// handle deposit
document.getElementById('deposit-button').addEventListener('click', function () {
  //   get deposit amount
  const depositField = document.getElementById('deposit-input');
  const depositValueText = depositField.value;
  const newDepositAmount = parseFloat(depositValueText);

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

  //   clear depositValue
  depositField.value = '';
});

// handle withdraw
document.getElementById('withdraw-button').addEventListener('click', function () {
  // get newWithdrawAmount
  const withdrawField = document.getElementById('withdraw-input');
  const newWithdrawText = withdrawField.value;
  const newWithdrawAmount = parseFloat(newWithdrawText);

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

  // clear withdraw input
  withdrawField.value = '';
});
