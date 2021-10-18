import { useState } from 'react';
import emailjs from 'emailjs-com';

import { InputControl } from '../InputControl';
import { Spinner } from '../Spinner';
import { TextareaControl } from '../TextareaControl';
import { Button, Form } from './styles';

export const ContactForm = () => {
   const regEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

   const [inputValue, setInputValue] = useState('');
   const [inputError, setInputError] = useState(null);
   const [textareaValue, setTextareaValue] = useState('');
   const [textareaError, setTextareaError] = useState(null);
   const [formSubmited, setFormSubmited] = useState('Enviar');
   const [buttonDisabled, setButtonDisabled] = useState(false);

   const handleSubmit = (e) => {
      e.preventDefault();

      if (!regEx.test(inputValue)) {
         setInputError(true);
      }

      if (inputValue.length < 3) {
         setTextareaError(true);
      }

      if (inputError || textareaError) {
         return;
      }

      setButtonDisabled(true);
      setFormSubmited(<Spinner />);
      emailjs
         .sendForm(
            'service_ws24tzo',
            'template_wgfw0a1',
            e.target,
            'user_FhRsYQWQXgynexh3PJEV1'
         )
         .then(
            () => {
               setFormSubmited(false);
               setFormSubmited('Mensaje enviado');
            },
            (error) => {
               console.log(error.text);
            }
         );
   };

   return (
      <Form onSubmit={handleSubmit}>
         <InputControl
            inputValue={inputValue}
            setInputValue={setInputValue}
            formError={inputError}
            setFormError={setInputError}
            regEx={regEx}
         />
         <TextareaControl
            inputValue={textareaValue}
            setInputValue={setTextareaValue}
            formError={textareaError}
            setFormError={setTextareaError}
         />
         <Button disabled={buttonDisabled}>{formSubmited}</Button>
      </Form>
   );
};
