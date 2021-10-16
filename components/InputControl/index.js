import { useState } from 'react';
import { HighlightText } from '../../styles/general';
import { Control, Error, Input, Label } from '../TextareaControl/styles';

export const InputControl = ({
   inputValue,
   setInputValue,
   formError,
   setFormError,
   regEx,
}) => {
   const [backgroundError, setBackgroundError] = useState('');
   const [borderError, setBorderError] = useState('');

   const handleInputChange = (e) => {
      setInputValue(e.target.value);

      if (!regEx.test(inputValue)) {
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
            Email <HighlightText>*</HighlightText>
         </Label>
         <Input
            type="email"
            name="email"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            onKeyUp={handleInputChange}
            background={formError ? backgroundError : '#F9F9FB'}
            border={formError ? borderError : 'transparent'}
         />
         <Error>{formError && 'El email es invalido.'}</Error>
      </Control>
   );
};
