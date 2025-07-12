// src/app/page.tsx
'use client';

import Navbar       from '@/components/Navbar';
import HomePage     from './home/page';
import ProjectsPage from './projects/page';
import SkillsPage   from './skills/page';
import ContactPage  from './contact/page';

export default function Page() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="relative h-screen bg-[#FBF9F7] overflow-hidden">
          <HomePage />
        </section>
        <section id="projects"   className="min-h-screen"><ProjectsPage/></section>
        <section id="skills"     className="min-h-screen"><SkillsPage/></section>
        <section id="contact"    className="min-h-screen"><ContactPage/></section>
      </main>
    </>
  );
}
