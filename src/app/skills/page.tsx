'use client';

import SkillSection, { Skill } from '@/components/SkillSection';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiDart,
  SiNextdotjs,
  SiTailwindcss,
  SiFlutter,
  SiMysql,
  SiFigma,
  SiAndroidstudio,
  SiVite,          
  SiReact,          
} from 'react-icons/si';
import { FaReact, FaNodeJs, FaGithub, FaGitAlt } from 'react-icons/fa';
import { DiJava } from 'react-icons/di';

export default function SkillsPage() {
  const programmingSkills: Skill[] = [
    { Icon: SiPython,     label: 'Python',      color: '#3776AB' },
    { Icon: SiHtml5,      label: 'HTML',        color: '#E34F26' },
    { Icon: SiCss3,       label: 'CSS',         color: '#1572B6' },
    { Icon: DiJava,       label: 'Java',        color: '#007396' },
    { Icon: SiJavascript, label: 'JavaScript',  color: '#F7DF1E' },
    { Icon: SiTypescript, label: 'TypeScript',  color: '#3178C6' },
    { Icon: SiDart,       label: 'Dart',        color: '#0175C2' },
  ];

  const frameworkSkills: Skill[] = [
    { Icon: FaReact,      label: 'React.js',       color: '#61DAFB' },
    { Icon: SiReact,      label: 'React Native',   color: '#61DAFB' }, 
    { Icon: SiNextdotjs,  label: 'Next.js',        color: '#000000' },
    { Icon: SiTailwindcss,label: 'Tailwind CSS',   color: '#38B2AC' },
    { Icon: FaNodeJs,     label: 'Node.js',        color: '#339933' },
    { Icon: SiFlutter,    label: 'Flutter',        color: '#02569B' },
  ];

  const toolSkills: Skill[] = [
    { Icon: FaGitAlt,         label: 'Git',            color: '#F05032' },
    { Icon: FaGithub,         label: 'GitHub',         color: '#181717' },
    { Icon: SiMysql,          label: 'MySQL',          color: '#4479A1' },
    { Icon: SiFigma,          label: 'Figma',          color: '#F24E1E' },
    { Icon: SiAndroidstudio,  label: 'Android Studio', color: '#3DDC84' },
    { Icon: SiVite,           label: 'Vite',           color: '#646CFF' }, 
  ];

  return (
    <div className="relative min-h-screen bg-[#FBF9F7] text-black overflow-hidden">
      <main
        id="skills"
        className="flex flex-col justify-center items-center min-h-[calc(100vh-85px)] px-6 pb-10"
      >
        <div className="w-full max-w-4xl space-y-8">
          <h1 className="font-sans text-2xl font-semibold text-center my-8">
            Technical Skills
          </h1>
          <div
            className="
              border border-black rounded-lg p-8 bg-white space-y-8
              transition-shadow duration-200 hover:[box-shadow:8px_8px_0_#FF912A]
            "
          >
            <SkillSection
              title="Programming Languages"
              skills={programmingSkills}
            />
            <SkillSection
              title="Frameworks & Libraries"
              skills={frameworkSkills}
            />
            <SkillSection
              title="Tools & Platforms"
              skills={toolSkills}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
