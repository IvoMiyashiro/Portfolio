import styled from 'styled-components';
import { bps } from '../../styles/breakpoints';
import { FiGithub } from 'react-icons/fi';
import { FiExternalLink } from 'react-icons/fi';

export const ProjectCardComponent = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow:
  0px 0px 1.2px rgba(0, 0, 0, 0.016),
  0px 0px 3px rgba(0, 0, 0, 0.022),
  0px 0px 6.2px rgba(0, 0, 0, 0.028),
  0px 0px 12.8px rgba(0, 0, 0, 0.034),
  0px 0px 35px rgba(0, 0, 0, 0.05);
  padding: 2em 1em;
  border-radius: 8px;
  transition: .2s ease-in-out;
  
  &:hover {
      box-shadow:
      0px 0px 1.2px rgba(0, 0, 0, 0.031),
      0px 0px 3px rgba(0, 0, 0, 0.044),
      0px 0px 6.2px rgba(0, 0, 0, 0.056),
      0px 0px 12.8px rgba(0, 0, 0, 0.069),
      0px 0px 35px rgba(0, 0, 0, 0.1);
      transition: .2s ease-in-out;
    }

  ${bps.desktop} {
    padding: 0;
    height: 300px;
    box-shadow: none;
    
    &:hover {
      box-shadow: none;
    }
  }
`;

export const ImageSection = styled.section`
  display: none;

  ${bps.desktop} {
    display: block;
    position: absolute;
    width: 55%;
    height: 285px;
    border-radius: 8px;
    overflow: hidden;
    box-shadow:
    0px 0px 1.2px rgba(0, 0, 0, 0.016),
    0px 0px 3px rgba(0, 0, 0, 0.022),
    0px 0px 6.2px rgba(0, 0, 0, 0.028),
    0px 0px 12.8px rgba(0, 0, 0, 0.034),
    0px 0px 35px rgba(0, 0, 0, 0.05);
    ${props => props.position % 2 === 0 ? 'left:0' : 'right: 0'};
    transition: .2s ease-in-out;

    &:hover {
      box-shadow:
      0px 0px 1.2px rgba(0, 0, 0, 0.031),
      0px 0px 3px rgba(0, 0, 0, 0.044),
      0px 0px 6.2px rgba(0, 0, 0, 0.056),
      0px 0px 12.8px rgba(0, 0, 0, 0.069),
      0px 0px 35px rgba(0, 0, 0, 0.1);
      transition: .2s ease-in-out;
    }
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 285px;
`;

export const InfoSection = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 1.5em;
  
  ${bps.desktop} {
    gap: 1.25em;
    width: 55%;
    position: absolute;
    ${props => props.position % 2 === 0 ? 'right:0' : 'left: 0'};
    ${props => props.position % 2 === 0 ? 'text-align: right' : 'text-align: left'};
  }
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: .25em;
`;

export const Subtitle = styled.h3`
  margin: 0;
  font-family: 'Fira Mono', monospace;
  font-size: .9rem;
  color: ${props => props.theme.highlight};
`;

export const Title = styled.h1`
  margin: 0;
  font-size: 1.5rem;
`;

export const CardInfo = styled.div`


  ${bps.desktop} {
    box-shadow:
    0px 0px 13.8px rgba(0, 0, 0, 0.014),
    0px 0px 33.3px rgba(0, 0, 0, 0.02),
    0px 0px 62.6px rgba(0, 0, 0, 0.025),
    0px 0px 111.7px rgba(0, 0, 0, 0.03),
    0px 0px 208.9px rgba(0, 0, 0, 0.036),
    0px 0px 500px rgba(0, 0, 0, 0.05);
    background: white;
    border-radius: 4px;
    padding: 1em;
  }
`;

export const Content = styled.p`
  margin: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5em;

  ${bps.desktop} {
    gap: 1em;
    ${props => (props.position % 2) === 0 ? 'align-items: flex-end' : 'align-items: flex-start'};
  }
`;

export const TechRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .25em 1.25em;
`;

export const Tech = styled.p`
  margin: 0;
  font-size: .8rem;
  font-family: 'Fira mono', monospace;
`;

export const Links = styled.div`
  display: flex;
  gap: 1em;
`;

export const Link = styled.a`
  font-size: 1.25rem;
`;

export const GitHubIcon = styled(FiGithub)`
  transition: .2s ease-in-out;
  &:hover {
    color: ${props => props.theme.highlight};
    transition: .2s ease-in-out;
  }
`;

export const ExternalLinkIcon = styled(FiExternalLink)`
  transition: .2s ease-in-out;
  &:hover {
    color: ${props => props.theme.highlight};
    transition: .2s ease-in-out;
  }
`;