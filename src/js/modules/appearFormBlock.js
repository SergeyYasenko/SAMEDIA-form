
import { formTitleElemnet, validationConfig } from "./constants.js";

const appearFormBlock = (name) => {
   validationConfig.formElement.classList.add('form_hidden');
   formTitleElemnet.textContent = `${name}, Вы успешно авторизованы!`;
};

export default appearFormBlock;