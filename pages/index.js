import Head from 'next/head';
import { Contact } from '../components/Contact';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Navbar } from '../components/Navbar';
import { Projects } from '../components/Projects';

export default function Home() {
   return (
      <>
         <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Oswald&family=Spartan:wght@700&display=swap" rel="stylesheet" />
         </Head>

         <Navbar />
         <Hero />
         <About />
         <Projects />
         <Contact />
      </>
   );
}
