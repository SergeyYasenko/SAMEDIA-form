
export const name = document.querySelector('#name');
export const password = document.querySelector('#password');
export const fieldErrorClass = document.querySelectorAll('.form__field');
export const form = document.querySelector('.section__form');
export const errorElement = document.getElementById('error');
export const preloader = document.querySelector('.preloader');
export const inputSelector = document.querySelectorAll('.form__input');
export const buttonSelector = document.querySelector('.form__button');
export const formTitleElemnet = document.querySelector('.section__title');
export const validationConfig = {
   formElement: document.querySelector('.form'),
   fieldElement: '.form__field',
   inputSelector: '.form__input',
   submitButton: '.form__button',
   fieldErrorClass: 'form__field_error',
   inputErrorClass: 'form__input_error',
   errorClass: 'form__error_active',
};