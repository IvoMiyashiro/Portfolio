import { TechCard } from '../TechCard';
import { TechContainer } from './styles';

export const TechDisplay = ({ techArr }) => {
  return (
    <TechContainer>
      {
        techArr.map((tech, i) => {
          return <TechCard key={i} title={tech.tech} logo={tech.logo} />;
        })
      }
    </TechContainer>
  );
};
