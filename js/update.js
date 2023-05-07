const nameInput = document.getElementsByName('name')[0];
const emailInput = document.getElementsByName('email')[0];
const oldPassInput = document.getElementsByName('old_pass')[0];
const newPassInput = document.getElementsByName('new_pass')[0];
const cPassInput = document.getElementsByName('c_pass')[0];


const userData = JSON.parse(localStorage.getItem('list'));
nameInput.placeholder=userData[0].name
emailInput.placeholder=userData[0].Email