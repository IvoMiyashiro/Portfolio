import styled from 'styled-components';

const commun = `
   background-color: #333;
   width: 15px;
   height: 15px;
   position: absolute;
   top: 0;
   left: 0;

   -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;
   animation: sk-cubemove 1.8s infinite ease-in-out;
`;

export const LoaderContainer = styled.div`
   background: ${(props) => props.theme.secondary};
   width: 100%;
   height: 100vh;
   display: flex;
   align-items: center;
   justify-content: center;
   position: fixed;
   bottom: 0;
   z-index: 100;
`;

export const LoaderWrapper = styled.section`
   margin-left: 3em;
   width: 100px;
   height: 100px;
   position: relative;
`;

export const Cube1 = styled.div`
   ${commun}
`;

export const Cube2 = styled.div`
   ${commun}
   -webkit-animation-delay: -0.9s;
   animation-delay: -0.9s;
`;

export const GradientCircle = styled.div`
   width: 180px;
   height: 180px;
   border-radius: 15rem;
   background: radial-gradient(
         105.68% 45.69% at 92.95% 50%,
         rgba(105, 244, 253, 0.5) 0%,
         rgba(160, 255, 244, 0.095) 53.91%,
         rgba(254, 216, 255, 0) 100%
      ),
      radial-gradient(
         103.18% 103.18% at 90.11% 102.39%,
         #c9fff2 0%,
         rgba(230, 255, 250, 0) 100%
      ),
      radial-gradient(
         90.45% 90.45% at 87.84% 9.55%,
         #ffd2f5 0%,
         rgba(254, 219, 246, 0) 100%
      ),
      linear-gradient(
         135.66deg,
         rgba(203, 185, 255, 0.8) 14.89%,
         rgba(216, 202, 254, 0) 74.33%
      );
   background-blend-mode: normal, normal, normal, normal, normal, normal;
   filter: blur(50px);
   position: absolute;
   z-index: -1;
`;
