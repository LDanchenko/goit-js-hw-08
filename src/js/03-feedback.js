const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name = email]');
const messageInput = document.querySelector('textarea[name = message]');

let email = JSON.parse(localStorage.getItem('feedback-form-state')).email ?? '';
let message = JSON.parse(localStorage.getItem('feedback-form-state')).message ?? '';

const data = {
  email,
  message,
};
emailInput.value = email;
messageInput.value = message;

form.addEventListener('input', event => {
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
});
