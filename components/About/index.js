import { HighlightText, SectionTitle } from '../../styles/general';

import {
   AboutContainer,
   AboutSection,
   ImageContainer,
   GradientCircle,
   ImageEg,
   MainInfoSection,
   TextInfo,
   FirstP,
   SecondP,
} from './styles';

export const About = () => {

   return (
      <AboutSection id="about" >
         <AboutContainer>
            <SectionTitle> Acerca de mi <HighlightText>.</HighlightText> </SectionTitle>
            <MainInfoSection>
               <ImageContainer>
                  <GradientCircle></GradientCircle>
                  <ImageEg></ImageEg>
               </ImageContainer>
               <TextInfo>
                  <FirstP>
                     Mi nombre es Ivan, tengo 22 años y vivo en Buenos Aires, Argentina.<HighlightText> Soy estudiante de Ingeniería Informática </HighlightText> en la Universidad Católica Argentina de Buenos Aires.
                     Hace aproximadamente un año comencé a tener interés dentro del mundo del desarrollo web, tanto Frontend como Backend.
                     Desde ese momento me dediqué a estudiar tecnologías básicas como <HighlightText> HTML </HighlightText> y <HighlightText> CSS </HighlightText> hasta dominar <HighlightText> JavaScript </HighlightText> y algunas de sus librerías populares
                     como <HighlightText> ReactJS </HighlightText> y <HighlightText> NodeJS </HighlightText>.
                  </FirstP>
                  <SecondP>
                     Me considero una persona apasionada por la tecnología, con muchas ganas de contruir aplicaciones en la web y
                     aprender cosas nuevas para poder superarme cada día!
                  </SecondP>
               </TextInfo>
            </MainInfoSection>
         </AboutContainer>
      </AboutSection>
   );
};