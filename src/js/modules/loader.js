const preloader = document.querySelector('.preloader');
const formTitleElemnet = document.querySelector('.form__title');
const inputSelector = document.querySelectorAll('.form__input');
const buttonSelector = document.querySelector('.form__button');
const validationConfig = {
   formElement: document.querySelector('.form__form'),
   fieldElement: '.form__field',
   inputSelector: '.form__input',
   submitButton: '.form__button',
   fieldErrorClass: 'form__field_error',
   inputErrorClass: 'form__input_error',
   errorClass: 'form__error_active',
};

const loader = (isLoader) => {
   if (isLoader) {
      preloader.classList.add('preloader_opened');
   } else {
      preloader.classList.remove('preloader_opened');
   }

   buttonSelector.disabled = isLoader;

   inputSelector.forEach((input) => {
      input.disabled = isLoader;
   });
};

const appearFormBlock = (name) => {
   const fields = document.querySelectorAll(validationConfig.fieldElement);
   fields.forEach(field => {
      field.style.borderColor = "#43A470";
      field.addEventListener('input', () => {
         field.style.borderColor = "#F65454";
         field.style.color = "#F65454";
      });
   });
};

export { loader, appearFormBlock };