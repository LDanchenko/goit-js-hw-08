import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailInput = document.querySelector('input[name = email]');
const messageInput = document.querySelector('textarea[name = message]');

const data = JSON.parse(localStorage.getItem('feedback-form-state')) ?? { email: '', message: '' };
emailInput.value = data.email;
messageInput.value = data.message;

form.addEventListener(
  'input',
  throttle(event => {
    data[event.target.name] = event.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
  }, 500),
);

form.addEventListener('submit', event => {
  event.preventDefault();

  if (!emailInput.value || !messageInput.value) {
    alert('Заполните все поля!');
    return;
  }
  console.log(data);
  emailInput.value = '';
  messageInput.value = '';
  data.email = '';
  data.message = '';
  localStorage.clear();
});
