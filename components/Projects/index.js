import { ProjectCard } from '../ProjectCard';
import { HighlightText, SectionTitle } from '../../styles/general';
import { ProjectsSection, ProjectsCardsContainer } from './styles';

export const Projects = () => {
  const projectsList = [
    {
      id: '2',
      techs: ['Shopify', 'Liquid', 'CSS', 'SASS'],
      title: 'Ryutech',
      desc: 'Un e-commerce de Shopify la cual rediseñé y mantengo utilizando tecnologías como Shopify Liquid, CSS y Javascript',
      href: 'https://www.ryutech.cl/',
      alt: 'Ryutech',
      img: '/assets/ryutech-screenshot.png',
      repo: 'https://github.com/IvoMiyashiro/',
    },
    {
      id: '1',
      techs: ['Next.js', 'Postgresql', 'Styled Components', 'TypeScript'],
      title: 'Develotter',
      desc: 'Un clone de Twitter enfocado para devs. En este proyecto reforzé los conocimientos de Next.js y aprendí nuevas tecnologías como  Typescript y Postgresql.',
      href: 'https://develotter.vercel.app/',
      alt: 'Develotter',
      img: '/assets/develotter-screenshot.png',
      repo: 'https://github.com/IvoMiyashiro/Develotter',
    },
    {
      id: '0',
      techs: ['Next.js', 'Tailwind CSS', 'Shopify', 'Context API', 'Reducers'],
      title: 'Nextify',
      desc: 'Un e-commerce de celulares y accesorios desarrollado con Next.js, Tailwind CSS y el SDK de Shopify para la carga de los diferentes productos.',
      href: 'https://nextify-shop.vercel.app/',
      alt: 'Nextify',
      img: '/assets/nextify-screenshot.png',
      repo: 'https://github.com/IvoMiyashiro/Nextify',
    },
  ];

  return (
    <ProjectsSection id="projects">
      <SectionTitle>
        Proyectos <HighlightText>.</HighlightText>
      </SectionTitle>
      <ProjectsCardsContainer>
        {projectsList.map((project, i) => {
          return <ProjectCard key={project.id} projects={project} position={i} />;
        })}
      </ProjectsCardsContainer>
    </ProjectsSection>
  );
};
