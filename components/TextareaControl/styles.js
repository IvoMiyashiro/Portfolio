import styled from 'styled-components';

export const Control = styled.div`
   display: flex;
   flex-direction: column;
   gap: .25em;
   position: relative;
`;

export const Label = styled.label`
   font-family: 'Fira Mono', sans-serif;
   color: ${props => props.theme.highlight};
   font-weight: 500;
`;

export const Textarea = styled.textarea`
   width: 100%;
   border: none;
   background: #F9F9FB;
   height: 40px;
   padding: .75em;
   height: 175px;
   resize: none;
   font-family: 'Inter', sans-serif;
   border-radius: 6px;
   font-size: 1rem;
   outline: none;
`;

export const Error = styled.small`
   font-size: .8rem;
   color: red;
   position: absolute;
   bottom: -1.65em;
   margin-left: .5em
`;

export const Input = styled.input`
   width: 100%;
   border: none;
   background: #F9F9FB;
   height: 40px;
   padding: .5em 1em;
   border-radius: 6px;
   font-size: 1rem;
   outline: none;
`;