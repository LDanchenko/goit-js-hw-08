const form = document.querySelector('.feedback-form');
console.log(form);
const data = {
  email: '',
  message: '',
};

form.addEventListener('input', event => {
  data[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(data));
});
