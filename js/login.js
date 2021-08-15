document.getElementById('submit-button').addEventListener('click', function () {
  // get email
  const userEmail = document.getElementById('email-field').value;

  // get password
  const userPassword = document.getElementById('password-field').value;

  // check info and  go to next page
  if (userEmail == 'sontan@bap.com' && userPassword == 'secret') {
    window.location.href = 'banking.html';
  }
});
