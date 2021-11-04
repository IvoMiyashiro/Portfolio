import { ProjectCard } from '../ProjectCard';
import { HighlightText, SectionTitle } from '../../styles/general';
import { ProjectsSection, ProjectsCardsContainer } from './styles';

export const Projects = () => {
   const projectsList = [
      {
         id: '2',
         tech: 'Next.js',
         title: 'Nextify',
         desc: 'Un e-commerce de celulares y accesorios desarrollado con Next.js, Tailwind CSS y el SDK de Shopify para la carga de los diferentes productos.',
         href: 'https://nextify-shop.vercel.app/',
         alt: 'Nextify',
         img: '/assets/nextify-screenshot.png',
         repo: 'https://github.com/IvoMiyashiro/Nextify',
      },
      {
         id: '0',
         tech: 'React.js and Node.js',
         title: 'Another TodoApp',
         desc: 'Un TodoApp desarrollado con ReactJS en el frontend y NodeJS en el backend. En este proyecto personal me dediqué a aprender conceptos de NodeJS y asentar mis conocimientos de Redux. ',
         href: 'https://another-todoapp.vercel.app/',
         alt: 'TodoApp',
         img: '/assets/todoapp-screenshot.png',
         repo: 'https://github.com/IvoMiyashiro/TodoApp-frontend',
      },
      {
         id: '1',
         tech: 'React.js',
         title: 'Another JournaldApp',
         desc: 'Un JournaldApp desarrollado con ReactJS en el frontend y utilizando Firebase para el almacenamiento de los datos. En este proyecto aprendí conceptos de Redux, Firebase y a estilar con Styled Components. ',
         href: 'https://journald-app.vercel.app/',
         alt: 'JournaldApp',
         img: '/assets/journaldapp-screenshot.png',
         repo: 'https://github.com/IvoMiyashiro/JournaldApp',
      },
   ];

   return (
      <ProjectsSection id="projects">
         <SectionTitle>
            Proyectos <HighlightText>.</HighlightText>
         </SectionTitle>
         <ProjectsCardsContainer>
            {projectsList.map((project) => {
               return <ProjectCard key={project.id} projects={project} />;
            })}
         </ProjectsCardsContainer>
      </ProjectsSection>
   );
};
