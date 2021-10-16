import styled from 'styled-components';

export const Form = styled.form`
   width: 100%;
   max-width: 400px;
   min-width: 300px;
   box-shadow:
   0px 0px 2.2px rgba(0, 0, 0, 0.014),
   0px 0px 5.3px rgba(0, 0, 0, 0.02),
   0px 0px 10px rgba(0, 0, 0, 0.025),
   0px 0px 17.9px rgba(0, 0, 0, 0.03),
   0px 0px 33.4px rgba(0, 0, 0, 0.036),
   0px 0px 80px rgba(0, 0, 0, 0.05)
   ;
   display: flex;
   flex-direction: column;
   gap: 2em;
   padding: 1.25em;
   border-radius: 8px;
   margin: 0 auto;
   background: #fff;
   z-index: 1;
`;

export const Button = styled.button`
   font-family: 'Fira Mono', sans-serif;
   width: 100%;
   height: 40px;
   background: ${props => props.theme.primary};
   color: ${props => props.theme.secondary};
   border-radius: 6px;
   border: none;
   font-size: 1rem;
   cursor: pointer;
   margin-top: 1em;
`;