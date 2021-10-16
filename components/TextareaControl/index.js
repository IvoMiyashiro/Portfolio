import { useState } from 'react';
import { HighlightText } from '../../styles/general';
import { Error, Label, Control, Textarea } from './styles';

export const TextareaControl = ({
   inputValue,
   setInputValue,
   formError,
   setFormError,
}) => {
   const [backgroundError, setBackgroundError] = useState('');
   const [borderError, setBorderError] = useState('');

   const handleInputChange = (e) => {
      setInputValue(e.target.value);

      if (inputValue.length < 3) {
         setFormError(true);
         setBackgroundError('#FEF1F2');
         setBorderError('red');
      } else {
         setFormError(false);
      }
   };

   return (
      <Control>
         <Label>
            {' '}
            Mensaje <HighlightText>*</HighlightText>
         </Label>
         <Textarea
            name="message"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            onKeyUp={handleInputChange}
            background={formError ? backgroundError : '#F9F9FB'}
            border={formError ? borderError : 'transparent'}
         />
         <Error>{formError && 'El mensaje es muy corto.'}</Error>
      </Control>
   );
};
