import Image from 'next/image';

import { HighlightText, SectionTitle } from '../../styles/general';
import { Technologies } from '../Technologies';
import { AboutContainer, AboutSection, ImageContainer, MainInfoSection, TextInfo, FirstP, SecondP } from './styles';

export const About = () => {
   return (
      <AboutSection id="about">
         <AboutContainer>
            <SectionTitle>
               Acerca de mi <HighlightText>.</HighlightText>
            </SectionTitle>
            <MainInfoSection>
               <ImageContainer>
                  <Image src="/assets/yo.png" alt="Ivan Miyashiro" layout="fill" objectFit="cover" />
               </ImageContainer>
               <TextInfo>
                  <FirstP>Mi nombre es Ivan, nací en 1999 y vivo en Buenos Aires, Argentina. Soy estudiante de Ingeniería Informática en la Universidad Católica Argentina de Buenos Aires. Hace un año comencé a tener interés dentro del mundo del desarrollo web, tanto Frontend como Backend. Desde ese momento me dediqué a estudiar sin descansar diferentes tecnologías que se utilizan en el mundo del desarrollo web para convertirme en un mejor programador.</FirstP>
                  <SecondP>Me considero una persona apasionada por la tecnología, con muchas ganas de construir aplicaciones en la web y aprender cosas nuevas para poder superarme cada día!</SecondP>
               </TextInfo>
            </MainInfoSection>
         </AboutContainer>
         <Technologies />
      </AboutSection>
   );
};
