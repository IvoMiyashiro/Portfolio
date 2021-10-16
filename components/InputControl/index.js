import { HighlightText } from '../../styles/general';
import { Control, Error, Input, Label } from '../TextareaControl/styles';


export const InputControl = ({ inputValue, setInputValue, formError, setFormError, regEx }) => {

   
   const handleInputChange = (e) => {
      setInputValue(e.target.value);

      if (!regEx.test(inputValue)) {
         setFormError(true);
      } else {
         setFormError(false);
      }
   };

   return (
      <Control>
         <Label> Email <HighlightText>*</HighlightText></Label>
         <Input 
            type="email" 
            name="email"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            onKeyUp={handleInputChange} 
         />
         <Error>
            {
               formError && 'El email es invalido.'
            }   
         </Error>
      </Control>
   );
};
