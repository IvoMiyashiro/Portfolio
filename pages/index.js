import Head from 'next/head';
import { Contact } from '../components/Contact';
import { Navbar } from '../components/Navbar';
import { SocialMediaColumn } from '../components/SocialMediaColumn';
// import { LenguagesColumn } from '../components/LenguagesColumn';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Technologies } from '../components/Technologies';

export default function Home() {

   return (
      <>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Fira+Mono:wght@400;500&family=Inter:wght@400;900&display=swap" rel="stylesheet" />
         </Head>

         <Navbar />
         <SocialMediaColumn />
         <Hero />
         <About />
         <Technologies />
         <Projects />
         <Contact />
      </>
   );
}
