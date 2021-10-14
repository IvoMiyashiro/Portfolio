import {
   Button,
   CoolUnderline,
   HeroSection,
   MainTitle,
   Quote,
   UnderlineWord,
   HeroContainer
} from './styles';
import { Headline, HighlightText } from '../../styles/general';

export const Hero = () => {
   return (
      <HeroSection id="hero" >
         <HeroContainer>
            <Headline> Hola Mundo! Mi nombre es </Headline>
            <div>
               <MainTitle> Ivan Miyashiro. </MainTitle>
               <MainTitle>
                  Un apasionado&nbsp;
                  <UnderlineWord> Web Dev. <CoolUnderline></CoolUnderline></UnderlineWord>
               </MainTitle>
            </div>
            <Quote>
               Hace un año comence mi aventura dentro del mundo del desarrollo web.
               Actualmente estoy en <HighlightText> busca de oportunidades para ayudar a solucionar problemas de software </HighlightText>.
            </Quote>
            <Button> Descargar CV </Button>
         </HeroContainer>
      </HeroSection>
   );
};
