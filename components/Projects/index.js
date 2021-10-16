import Image from 'next/image';

import { HighlightText, SectionTitle } from '../../styles/general';
import { 
   Anchor,
   Button,
   ButtonsSection, 
   CardSection,
   Description,
   GithubButton,
   GithubIcon,
   Legend,
   ProjectsSection,
   ProyectCard,
   ProyectsCardsContainer,
   Title
} from './styles';


export const Projects = () => {

   return (
      <ProjectsSection id="projects" >
         <SectionTitle> Proyectos <HighlightText>.</HighlightText> </SectionTitle>
         <ProyectsCardsContainer>
            <ProyectCard>
               <CardSection>
                  <Legend> ReactJS </Legend>
                  <Anchor href="https://mern-todoapp.vercel.app/" target="_blank">
                     <Title> Another TodoApp </Title>
                  </Anchor>
                  <Description>
                     Proyecto hecho con Sass, React, Node, Mongo y Express.
                     Utilizé algunas librerías adicionales como: Formik para los distintos formularios y Redux para un mejor workflow de la aplicación.
                     Desplegada en Vercel y Heroku.
                  </Description>
                  <ButtonsSection>
                     <Anchor href="https://mern-todoapp.vercel.app/" target="_blank">
                        <Button>
                           Ver Proyecto
                        </Button>
                     </Anchor>
                     <Anchor href="https://github.com/IvoMiyashiro/MERN-Todo-Frontend" target="_blank">
                        <GithubButton>
                           <GithubIcon />
                        </GithubButton>
                     </Anchor>
                  </ButtonsSection>
               </CardSection>
               <CardSection>
                  <Anchor href="https://mern-todoapp.vercel.app/" target="_blank">
                     <Image src="/assets/todoapp-screenshot.png" layout="fill" objectFit="cover" />
                  </Anchor>
               </CardSection>
            </ProyectCard>
            <ProyectCard>
               <CardSection>
                  <Legend> ReactJS </Legend>
                  <Anchor href="https://journald-app.vercel.app/" target="_blank">
                     <Title> Another JournaldApp </Title>
                  </Anchor>
                  <Description>
                     Proyecto hecho con React, Redux, Firebase y Styled Components.
                     Para el almacenamiento de las imágenes opté por utilizar la API de Cloudinary
                     y las animaciones están hechas con la librería Animated.css. Desplegada en Vercel

                  </Description>
                  <ButtonsSection>
                     <Anchor href="https://journald-app.vercel.app/" target="_blank">
                        <Button>
                           Ver Proyecto
                        </Button>
                     </Anchor>
                     <Anchor href="https://github.com/IvoMiyashiro/JournaldApp" target="_blank">
                        <GithubButton>
                           <GithubIcon />
                        </GithubButton>
                     </Anchor>
                  </ButtonsSection>
               </CardSection>
               <CardSection>
                  <Anchor href="https://journald-app.vercel.app/" target="_blank">
                     <Image src="/assets/journaldapp-screenshot.png" layout="fill" objectFit="cover" />
                  </Anchor>
               </CardSection>
            </ProyectCard>
         </ProyectsCardsContainer>
      </ProjectsSection>
   );
};