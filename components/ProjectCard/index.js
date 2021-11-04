import Image from 'next/image';
import { Anchor, Button, ButtonsSection, CardSection, Description, GithubButton, GithubIcon, Legend, ProjectCardContainer, Title } from './styles';

export const ProjectCard = ({ projects }) => {
   const { href, img, alt, tech, title, desc, repo } = projects;

   return (
      <ProjectCardContainer>
         <CardSection>
            <Legend> {tech} </Legend>
            <Anchor href={href} target="_blank">
               <Title> {title} </Title>
            </Anchor>
            <Description>{desc}</Description>
            <ButtonsSection>
               <Anchor href={href} target="_blank">
                  <Button>Ver Proyecto</Button>
               </Anchor>
               <Anchor href={repo} target="_blank">
                  <GithubButton>
                     <GithubIcon />
                  </GithubButton>
               </Anchor>
            </ButtonsSection>
         </CardSection>
         <CardSection>
            <Image src={img} alt={alt} layout="fill" objectFit="contain" />
         </CardSection>
      </ProjectCardContainer>
   );
};
