// src/components/ProjectCard.tsx
'use client';

import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  title: string;
  imageSrc?: string;
  link?: string;
  tools: string[];
}

export default function ProjectCard({
  title,
  imageSrc,
  link,
  tools,
}: ProjectCardProps) {
  const CardContent = (
    <div className="group relative w-full max-w-lg mx-auto">
      <div
        className="
          absolute inset-0 translate-x-2 translate-y-2
          bg-blue-200 rounded-xl opacity-0
          transition-opacity duration-200
          group-hover:opacity-100
        "
      />
      <div className="relative bg-white border-1 border-black rounded-xl overflow-hidden">
        <div className="w-full h-56 bg-gray-300 flex items-center justify-center overflow-hidden">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              width={600}
              height={192}
              className="object-cover w-full h-full"
            />
          ) : (
            <span className="text-lg text-gray-600">แปะรูป</span>
          )}
        </div>

        <div className="px-4 py-2">
          <h3 className="font-sans font-semibold text-lg">{title}</h3>
        </div>

        <div className="px-4 pb-4 flex flex-wrap gap-2">
          {tools.map((tool) => (
            <span
              key={tool}
              className="
                text-xs font-medium
                bg-blue-200 text-blue-800
                px-2 py-1 rounded-sm
              "
            >
              {tool}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="block w-full">
      {CardContent}
    </a>
  ) : (
    CardContent
  );
}
