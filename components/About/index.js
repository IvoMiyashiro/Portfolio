import { HighlightText, SectionTitle } from '../../styles/general';
import {
  AboutContainer,
  AboutSection,
  ImageContainer,
  MainInfoSection,
  TextInfo,
  FirstP,
  SecondP,
  SoftSkills,
  Skill,
  SoftSkillsContainer,
  ImageBackground,
  Image
} from './styles';

export const About = () => {
  return (
    <AboutSection id="about">
      <AboutContainer>
        <SectionTitle>
          Acerca de mi <HighlightText>.</HighlightText>
        </SectionTitle>
        <MainInfoSection>
          <ImageContainer>
            <Image src="/assets/yo.jpg" alt="Ivan Miyashiro" layout="fill" objectFit="cover" tabIndex={10} />
            <ImageBackground></ImageBackground>
          </ImageContainer>
          <TextInfo>
            <FirstP>Mi nombre es Ivan, nací en 1999 y vivo en Buenos Aires, Argentina. Soy estudiante de Ingeniería Informática en la Universidad Católica Argentina de Buenos Aires. Hace un tiempo comencé a tener interés dentro del mundo del desarrollo web, tanto Frontend como Backend. Desde ese momento me dediqué a estudiar sin descansar diferentes tecnologías que se utilizan en el mundo del desarrollo para convertirme en un mejor programador.</FirstP>
            <SecondP>Me considero una persona que busca tener siempre un código limpio y ordenado para facilitar la escabilidad de las aplicaciones y me gusta aprender cosas nuevas para superarme cada día!</SecondP>
            <SoftSkillsContainer>
              <SoftSkills>
                <Skill>Habilidades blandas:</Skill>
                <Skill>Proactividad</Skill>
                <Skill>Trabajo en equipo</Skill>
                <Skill>Adaptación al cambio</Skill>
                <Skill>Responsabilidad </Skill>
                <Skill>Resolución de problemas</Skill>
              </SoftSkills>
            </SoftSkillsContainer>
          </TextInfo>
        </MainInfoSection>
      </AboutContainer>
    </AboutSection>
  );
};
