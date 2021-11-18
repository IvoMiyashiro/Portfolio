import { LogoContainer, TechCardContainer, TitleContainer } from './styles';

export const TechCard = ({ title, logo: Logo }) => {
  return (
    <TechCardContainer>
      <LogoContainer>
        <Logo
          with={title !== 'Express.js' ? '70px' : '32px'}
          height={title !== 'Express.js' ? '70px' : '32px'}
        />
      </LogoContainer>
      <TitleContainer>
        {title}
      </TitleContainer>
    </TechCardContainer >
  );
};
