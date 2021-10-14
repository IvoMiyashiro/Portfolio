import styled from 'styled-components';

export const FlagsColumn = styled.div`
   display: flex;
   flex-direction: column;
   position: fixed;
   bottom: 2em;
   right: 3em;
   gap: 1.25em;
`;

export const LanguageButton = styled.button`
   width: 45px;
   height: 45px;
   border-radius: 50%;
   border: none;
   background-color: transparent;
   box-shadow:
   0px 0px 1.8px rgba(0, 0, 0, 0.014),
   0px 0px 4.3px rgba(0, 0, 0, 0.02),
   0px 0px 8px rgba(0, 0, 0, 0.025),
   0px 0px 14.3px rgba(0, 0, 0, 0.03),
   0px 0px 26.7px rgba(0, 0, 0, 0.036),
   0px 0px 64px rgba(0, 0, 0, 0.05)
   ;
   padding: 0.5em;
   cursor: pointer;
   transition: .2s ease-in-out;

   &:hover {
      transition: .2s ease-in-out;
      transform: translateY(-8px);
   }
`;

export const FlagImg = styled.img`
   width: 50px;
   height: 50px;
`;