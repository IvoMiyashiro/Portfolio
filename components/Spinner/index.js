import { SpinnerContainer, SpinnerDot } from './styles';

export const Spinner = () => {
   return (
      <SpinnerContainer className="sk-chase">
         <SpinnerDot className="sk-chase-dot"></SpinnerDot>
         <SpinnerDot className="sk-chase-dot"></SpinnerDot>
         <SpinnerDot className="sk-chase-dot"></SpinnerDot>
         <SpinnerDot className="sk-chase-dot"></SpinnerDot>
         <SpinnerDot className="sk-chase-dot"></SpinnerDot>
         <SpinnerDot className="sk-chase-dot"></SpinnerDot>
      </SpinnerContainer>
   );
};
