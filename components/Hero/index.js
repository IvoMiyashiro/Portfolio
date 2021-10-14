import {
   Button,
   CoolUnderline,
   HeroSection,
   MainTitle,
   Quote,
   UnderlineWord
} from './styles';
import { ContentContainer, Headline, HighlightText } from '../../styles/general';

export const Hero = () => {
   return (
      <HeroSection id="hero" >
         <ContentContainer>
            <Headline> Hola Mundo! Mi nombre es </Headline>
            <MainTitle> Ivan Miyashiro. </MainTitle>
            <MainTitle>
               Un apasionado&nbsp;
               <UnderlineWord> Desarrollador Web. <CoolUnderline></CoolUnderline></UnderlineWord>
            </MainTitle>
            <Quote>
               Hace un año comence mi aventura dentro del mundo del desarrollo web.
               Actualmente estoy en <HighlightText> busca de oportunidades para ayudar a solucionar problemas de software </HighlightText> y también, adquirir nuevos y mejores conociemientos.
            </Quote>
            <Button> Descargar CV </Button>
         </ContentContainer>
      </HeroSection>
   );
};
