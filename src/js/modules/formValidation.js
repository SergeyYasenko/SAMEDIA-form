import { loader, appearFormBlock } from './loader.js';
import { ApiForm } from './api.js';



const name = document.querySelector('#name');
const password = document.querySelector('#password');
const fieldErrorClass = document.querySelectorAll('.form__field');
const form = document.querySelector('.section__form');


form.addEventListener("submit", async (e) => { // Добавляем async, так как мы работаем с асинхронным API вызовом
   e.preventDefault();
   let invalidFields = 0;

   fieldErrorClass.forEach(field => {
      field.classList.remove('form__field_error');
   });

   if (name.value.trim() === "" || name.value.length < 3) {
      invalidFields++;
      fieldErrorClass.forEach(field => {
         field.classList.add('form__field_error');
      });
   }

   if (password.value.length < 6) {
      invalidFields++;
      fieldErrorClass.forEach(field => {
         field.classList.add('form__field_error');
      });
   }

   if (invalidFields === 0) {
      try {
         loader(true);

         const response = await ApiForm.login({ email: name.value, password: password.value });
         if (response.status === "ok") {
            appearFormBlock(name.value); // Вызываем appearFormBlock при успешной авторизации
         } else {
            const errorElement = document.getElementById('error');
            errorElement.innerText = "Неправильный логин или пароль";
            fieldErrorClass.forEach(field => {
               field.classList.add('form__field_error');
            });
         }
      } catch (error) {
         const errorElement = document.getElementById('error');
         errorElement.innerText = "Неправильный логин или пароль";
         fieldErrorClass.forEach(field => {
            field.classList.add('form__field_error');
         });
      } finally {
         loader(false);
      }
   } else {
      const error = document.getElementById("error");
      error.innerText = "Неправильный логин или пароль";
      fieldErrorClass.forEach(field => {
         field.classList.add('form__field_error');
      });
   }
});

name.addEventListener("input", () => {
   const error = document.getElementById("error");
   error.innerText = "";
   fieldErrorClass.forEach(field => {
      field.classList.remove('form__field_error');
   });
});

password.addEventListener("input", () => {
   const error = document.getElementById("error");
   error.innerText = "";
   fieldErrorClass.forEach(field => {
      field.classList.remove('form__field_error');
   });
});

export { form };