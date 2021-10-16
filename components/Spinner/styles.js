import styled from 'styled-components';

export const SpinnerContainer = styled.div`
   width: 23px;
   height: 23px;
   position: relative;
   animation: sk-chase 2.5s infinite linear both;
`;

export const SpinnerDot = styled.div`
   width: 100%;
   height: 100%;
   position: absolute;
   left: 0;
   top: 0;
   animation: sk-chase-dot 2s infinite ease-in-out both;

   &:before {
      content: '';
      display: block;
      width: 25%;
      height: 25%;
      background-color: #fff;
      border-radius: 100%;
      animation: sk-chase-dot-before 2s infinite ease-in-out both;
   }

   &:nth-child(1) {
      animation-delay: -1.1s;
   }
   &:nth-child(2) {
      animation-delay: -1s;
   }
   &:nth-child(3) {
      animation-delay: -0.9s;
   }
   &:nth-child(4) {
      animation-delay: -0.8s;
   }
   &:nth-child(5) {
      animation-delay: -0.7s;
   }
   &:nth-child(6) {
      animation-delay: -0.6s;
   }
   &:nth-child(1):before {
      animation-delay: -1.1s;
   }
   &:nth-child(2):before {
      animation-delay: -1s;
   }
   &:nth-child(3):before {
      animation-delay: -0.9s;
   }
   &:nth-child(4):before {
      animation-delay: -0.8s;
   }
   &:nth-child(5):before {
      animation-delay: -0.7s;
   }
   &:nth-child(6):before {
      animation-delay: -0.6s;
   }
`;
