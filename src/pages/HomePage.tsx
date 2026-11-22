import React from 'react';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Skills } from '../components/Skills';
import { Education } from '../components/Education';
import { Footer } from '../components/Footer';

interface HomePageProps {
  navigate: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ navigate }) => {
  return (
    <main id="top">
      <Hero navigate={navigate} />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Footer navigate={navigate} />
    </main>
  );
};
