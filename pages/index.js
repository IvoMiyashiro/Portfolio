import Head from 'next/head';
import { Contact } from '../components/Contact';
import { Navbar } from '../components/Navbar';
import { SocialMediaColumn } from '../components/SocialMediaColumn';
// import { LenguagesColumn } from '../components/LenguagesColumn';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';
import { Footer } from '../components/Footer';
import {
   GradientHero,
   LoaderContainer,
   PageContainer,
} from '../styles/general';
import { GradientAbout } from '../styles/general';
import { Loader } from '../components/Loader';
import { useEffect, useState } from 'react';

export default function Home() {
   const [loader, setLoader] = useState(false);

   useEffect(() => {
      const interval = setInterval(() => {
         setLoader(true);
      }, [3000]);
      return () => {
         clearInterval(interval);
      };
   }, []);

   return (
      <>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
               rel="preconnect"
               href="https://fonts.gstatic.com"
               crossOrigin
            />
            <link
               href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500&family=Inter:wght@400;900&display=swap"
               rel="stylesheet"
            />
            <link
               rel="stylesheet"
               href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
            />
         </Head>

         <LoaderContainer
            className={`animate__animated ${loader && 'animate__bounceOut'}`}
         >
            <Loader />
         </LoaderContainer>

         {loader && (
            <PageContainer>
               <Navbar />
               <GradientHero />
               <GradientAbout />
               <SocialMediaColumn />
               <Hero />
               <About />
               <Technologies />
               <Projects />
               <Contact />
               <Footer />
            </PageContainer>
         )}
      </>
   );
}
