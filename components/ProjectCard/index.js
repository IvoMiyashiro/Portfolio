import Image from 'next/image';

import {
  CardInfo,
  Container,
  Content,
  ExternalLinkIcon,
  GitHubIcon,
  ImageContainer,
  ImageSection,
  InfoSection,
  Link,
  Links,
  ProjectCardComponent,
  Subtitle,
  Tech,
  TechRow,
  Title,
  TitleContainer
} from './styles';

export const ProjectCard = ({ projects, position }) => {
  const { href, img, alt, techs, title, desc, repo } = projects;

  return (
    <ProjectCardComponent>
      <ImageSection position={position}>
        <Link href={href} target="_blank" rel="noreferrer">
          <ImageContainer>
            <Image
              src={img}
              alt={alt}
              layout="fill"
              objectFit="cover"
              placeholder="blur"
              blurDataURL={img}
            />
          </ImageContainer>
        </Link>
      </ImageSection>
      <InfoSection position={position}>
        <TitleContainer>
          <Subtitle>
            Proyecto Destacado
          </Subtitle>
          <Title>
            {title}
          </Title>
        </TitleContainer>
        <CardInfo>
          <Content>
            {desc}
          </Content>
        </CardInfo>
        <Container position={position}>
          <TechRow>
            {
              techs.map((tech, i) => {
                return <Tech key={i}>{tech}</Tech>;
              })
            }
          </TechRow>
          <Links>
            <Link href={repo} target="_blank" rel="noreferrer">
              <GitHubIcon />
            </Link>
            <Link href={href} target="_blank" rel="noreferrer">
              <ExternalLinkIcon />
            </Link>
          </Links>
        </Container>
      </InfoSection>
    </ProjectCardComponent >
  );
};
