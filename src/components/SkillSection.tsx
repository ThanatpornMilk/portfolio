'use client';

import SkillCard from './SkillCard';
import type { IconType } from 'react-icons';

export type Skill = {
  Icon: IconType;
  label: string;
  color?: string;
};

interface SkillSectionProps {
  title: string;
  skills: Skill[];
}

export default function SkillSection({ title, skills }: SkillSectionProps) {
  return (
    <section>
      <h2 className="font-sans text-base font-semibold mb-4">{title}</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map(skill => (
          <SkillCard
            key={skill.label}
            Icon={skill.Icon}
            label={skill.label}
            color={skill.color}
          />
        ))}
      </div>
    </section>
  );
}
