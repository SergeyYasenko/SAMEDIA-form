
import { preloader, inputSelector, buttonSelector } from "./constants.js";

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

export default loader;