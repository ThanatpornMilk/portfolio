'use client';

import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'Genetic Disease Risk',
    imageSrc: '/Project1.png',
    link: 'https://genetic-disease-risk.netlify.app/',
    tools: ['HTML', 'JavaScript', 'CSS', 'Tailwind CSS'],
  },
  {
    title: 'Event Music Selector',
    imageSrc: '/Project2.png',
    link: 'https://thanatpornmilk.github.io/EventMusicSelector/',
    tools: ['React', 'Vite', 'JavaScript', 'Tailwind CSS'],
  },
  {
    title: 'The Dyspepsia Quiz',
    imageSrc: '/Project3.png',
    link: 'https://quiz-dyspepsia.netlify.app/',
    tools: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
  },
  {
    title: 'Reserve Table',
    imageSrc: '/Project4.png',
    link: 'https://github.com/ThanatpornMilk/Reserve-Table',
    tools: ['Java'],
  },
  {
    title: 'Aroi Pa',
    imageSrc: '/Project5.png',
    link: 'https://github.com/ThanatpornMilk/aroipa',
    tools: ['React Native', 'JavaScript', 'Android Studio', 'Expo'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative min-h-screen bg-[#FBF9F7] text-black overflow-hidden">
      <Navbar />

      <main className="flex flex-col justify-center items-center min-h-[calc(100vh-85px)] px-6 pb-10">
        <section id="projects" className="w-full max-w-4xl">
          <h1 className="text-2xl font-semibold text-center my-8">
            MY Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-24 gap-y-8">
            {projects.map((proj, i) => (
              <ProjectCard key={i} {...proj} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
