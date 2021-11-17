import styled from 'styled-components';

export const TechCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 140px;
  border-radius: 4px;
  gap: 1em;
  box-shadow:
  0px 0px 1.2px rgba(0, 0, 0, 0.016),
  0px 0px 3px rgba(0, 0, 0, 0.022),
  0px 0px 6.2px rgba(0, 0, 0, 0.028),
  0px 0px 12.8px rgba(0, 0, 0, 0.034),
  0px 0px 35px rgba(0, 0, 0, 0.05);
  position: relative;
  top: 0;
  transition: .2s ease-in-out;

  &:hover {
    top: -8px;
    transition: .2s ease-in-out;
  }
`;

export const LogoContainer = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  padding-top: 1em;
`;

export const TitleContainer = styled.div`
  border-top: 1px solid #f0f0f0;
  width: 100%;
  text-align: center;
  padding-top: .65em;
  height: 40px;
`;