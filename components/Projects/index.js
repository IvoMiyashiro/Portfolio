import { ProjectCard } from '../ProjectCard';
import { HighlightText, SectionTitle } from '../../styles/general';
import {
   ProjectsSection,
   ProjectsCardsContainer,
} from './styles';

export const Projects = () => {

   const projectsList = [{
      id: '0',
      tech: 'ReactJS',
      title: 'Another TodoApp',
      desc: 'Un TodoApp desarrollado con ReactJS en el frontend y NodeJS en el backend. En este proyecto personal me dediqué a aprender conceptos de NodeJS y asentar mis conocimientos de Redux. ',
      href: 'https://mern-todoapp.vercel.app/',
      alt: 'TodoApp',
      img: '/assets/todoapp-screenshot.png',
      repo: 'https://github.com/IvoMiyashiro/MERN-Todo-Frontend'

   }, {
      id: '1',
      tech: 'ReactJS',
      title: 'Another JournaldApp',
      desc: 'Un JournaldApp desarrollado con ReactJS en el frontend y utilizando Firebase para el almacenamiento de los datos. En este proyecto aprendí conceptos de Redux, Firebase y a estilar con Styled Components. ',
      href: 'https://journald-app.vercel.app/',
      alt: 'JournaldApp',
      img: '/assets/journaldapp-screenshot.png',
      repo: 'https://github.com/IvoMiyashiro/JournaldApp"'
   }];

   return (
      <ProjectsSection id="projects" >
         <SectionTitle> Proyectos <HighlightText>.</HighlightText> </SectionTitle>
         <ProjectsCardsContainer>
            {
               projectsList.map(project => {
                  return <ProjectCard key={project.id} projects={project} />;
               })
            }
         </ProjectsCardsContainer>
      </ProjectsSection>
   );
};