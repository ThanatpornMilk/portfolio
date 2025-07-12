// src/components/SkillCard.tsx
'use client';

import type { IconType } from 'react-icons';

interface SkillCardProps {
  Icon: IconType;
  label: string;
  color?: string;
}

export default function SkillCard({ Icon, label, color }: SkillCardProps) {
  return (
    <div className="
        border border-black rounded-md shadow-md p-4 
        flex flex-col items-center
        min-w-[100px]
        transition-shadow duration-200 hover:shadow-lg
      ">
      <Icon
        className="w-8 h-8"
        style={{ color }}
      />
      <span className="font-sans text-xs mt-2 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
}
