import { HighlightText } from '../../styles/general';
import { Error, Label, Control, Textarea } from './styles';

export const TextareaControl = ({ inputValue, setInputValue, formError, setFormError }) => {

   const handleInputChange = (e) => {
      setInputValue(e.target.value);

      if (inputValue.length < 3) {
         setFormError(true);
      } else {
         setFormError(false);
      }
   };

   return (
      <Control>
         <Label> Mensaje <HighlightText>*</HighlightText></Label>
         <Textarea 
            name="messagge"
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputChange}
            onKeyUp={handleInputChange} 
         />
         <Error>
            {
               formError && 'El mensaje es muy corto.'
            }   
         </Error>
      </Control>
   );
};
