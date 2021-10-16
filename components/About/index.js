import Image from 'next/image';

import { HighlightText, SectionTitle } from '../../styles/general';
import {
   AboutContainer,
   AboutSection,
   ImageContainer,
   MainInfoSection,
   TextInfo,
   FirstP,
   SecondP,
} from './styles';

export const About = () => {
   return (
      <AboutSection id="about">
         <AboutContainer>
            <SectionTitle>
               {' '}
               Acerca de mi <HighlightText>.</HighlightText>{' '}
            </SectionTitle>
            <MainInfoSection>
               <ImageContainer>
                  <Image src="/assets/yo.png" layout="fill" objectFit="cover" />
               </ImageContainer>
               <TextInfo>
                  <FirstP>
                     Mi nombre es Ivan, tengo 22 años y vivo en Buenos Aires,
                     Argentina. Soy estudiante de Ingeniería Informática en la
                     Universidad Católica Argentina de Buenos Aires. Hace
                     aproximadamente un año comencé a tener interés dentro del
                     mundo del desarrollo web, tanto Frontend como Backend.
                     Desde ese momento me dediqué a estudiar tecnologías básicas
                     como HTML y CSS hasta dominar JavaScript y algunas de sus
                     librerías populares como ReactJS y NodeJS.
                  </FirstP>
                  <SecondP>
                     Me considero una persona apasionada por la tecnología, con
                     muchas ganas de contruir aplicaciones en la web y aprender
                     cosas nuevas para poder superarme cada día!
                  </SecondP>
               </TextInfo>
            </MainInfoSection>
         </AboutContainer>
      </AboutSection>
   );
};
