
import { validateName, validatePassword } from './formValidation.js';

const clearErrors = (fields, errorElement) => {
   errorElement.innerText = "";
   fields.forEach(field => field.classList.remove('form__field_error'));
};

const showErrors = (fields, errorElement) => {
   errorElement.innerText = "Неверный логин или пароль";
   fields.forEach(field => field.classList.add('form__field_error'));
};

const handleSubmit = async (e, name, password, fields, errorElement, loader, ApiForm, appearFormBlock) => {
   e.preventDefault();
   let invalidFields = 0;

   clearErrors(fields, errorElement);

   if (!validateName(name.value)) {
      invalidFields++;
   }
   if (!validatePassword(password.value)) {
      invalidFields++;
   }

   if (invalidFields === 0) {
      try {
         loader(true);
         const response = await ApiForm.login({ email: name.value, password: password.value });
         if (response.status === "ok") {
            document.cookie = `token=${response.token}; path=/;`;
            appearFormBlock(name.value);
         } else {
            showErrors(fields, errorElement);
         }
      } catch (error) {
         showErrors(fields, errorElement);
      } finally {
         loader(false);
      }
   } else {
      showErrors(fields, errorElement);
   }
};

export { handleSubmit, clearErrors, showErrors };
