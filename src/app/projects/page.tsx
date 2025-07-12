// src/app/projects/page.tsx
'use client';

import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    title: 'ชื่อโปรเจค 1',
    description: 'เครื่องมือที่ใช้ เช่น React Tailwind JavaScript',
    imageSrc: '',
    link: '#',
  },
  {
    title: 'ชื่อโปรเจค 2',
    description: 'เครื่องมือที่ใช้ เช่น React Tailwind JavaScript',
    imageSrc: '',
    link: '#',
  },
  {
    title: 'ชื่อโปรเจค 3',
    description: 'เครื่องมือที่ใช้ เช่น React Tailwind JavaScript',
    imageSrc: '',
    link: '#',
  },
  {
    title: 'ชื่อโปรเจค 4',
    description: 'เครื่องมือที่ใช้ เช่น React Tailwind JavaScript',
    imageSrc: '',
    link: '#',
  },
];

export default function ProjectsPage() {
  return (
    <div className="relative font-sans flex flex-col min-h-screen bg-[#FBF9F7] text-black overflow-hidden">

      <main
        id="projects"
        className="relative z-10 mt-[85px] px-6 pb-10"
      >
        <h1 className="text-2xl font-semibold text-center my-8">
          MY Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((proj, i) => (
            <ProjectCard key={i} {...proj} />
          ))}
        </div>
      </main>
    </div>
  );
}
