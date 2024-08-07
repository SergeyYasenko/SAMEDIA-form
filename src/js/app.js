
import { name, password, fieldErrorClass, form, errorElement } from './modules/constants.js';
import { ApiForm } from './modules/api.js';
import { handleSubmit } from './modules/formHandlers.js';
import loader from './modules/loader.js';
import appearFormBlock from './modules/appearFormBlock.js';

form.addEventListener("submit", (e) => {
   handleSubmit(e, name, password, fieldErrorClass, errorElement, loader, ApiForm, appearFormBlock);
});

const clearFieldErrors = () => {
   errorElement.innerText = "";
   fieldErrorClass.forEach(field => field.classList.remove('form__field_error'));
};

name.addEventListener("input", clearFieldErrors);
password.addEventListener("input", clearFieldErrors);

export { form };