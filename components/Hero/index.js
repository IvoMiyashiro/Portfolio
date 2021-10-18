import { useEffect, useState } from 'react';
import {
   Button,
   CoolUnderline,
   HeroSection,
   MainTitle,
   Quote,
   UnderlineWord,
   HeroContainer,
} from './styles';
import { Headline } from '../../styles/general';

export const Hero = () => {
   const [textAnimation, setTextAnimation] = useState(false);
   const [underlineAnimation, setUnderlineAnimation] = useState(false);

   useEffect(() => {
      const animation1 = setInterval(() => {
         setTextAnimation(true);
      }, [1000]);

      const animation2 = setInterval(() => {
         setUnderlineAnimation(true);
      }, [1700]);
      return () => {
         clearInterval(animation1);
         clearInterval(animation2);
      };
   }, []);

   return (
      <HeroSection id="hero">
         {textAnimation && (
            <HeroContainer className="animate__animated animate__fadeIn">
               <Headline> Hola Mundo! Mi nombre es </Headline>
               <div>
                  <MainTitle> Ivan Miyashiro. </MainTitle>
                  <MainTitle>
                     Un apasionado&nbsp;
                     <UnderlineWord>
                        {' '}
                        Web Dev.{' '}
                        {underlineAnimation && (
                           <CoolUnderline className="animate__animated animate__zoomIn"></CoolUnderline>
                        )}
                     </UnderlineWord>
                  </MainTitle>
               </div>
               <Quote>
                  Hace un año comence mi aventura dentro del mundo del
                  desarrollo web y hoy me especializo en tecnologías de frontend como ReactJS.
               </Quote>
               <Button> Descargar CV </Button>
            </HeroContainer>
         )}
      </HeroSection>
   );
};
