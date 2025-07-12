// src/components/ProjectCard.tsx
'use client';

import Image from 'next/image';
import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  imageSrc,
  link,
}: ProjectCardProps) {
  const Card = (
    <div className="relative">
      {/* colored offset shadow */}
      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-blue-200 rounded-xl" />
      {/* main card */}
      <div className="relative bg-white border-2 border-black rounded-xl overflow-hidden">
        {/* image area */}
        <div className="h-40 bg-gray-300 flex items-center justify-center">
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover"
            />
          ) : (
            <span className="text-lg text-gray-600">แปะรูป</span>
          )}
        </div>
        {/* text area */}
        <div className="p-4">
          <h3 className="font-sans font-semibold text-lg">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    </div>
  );

  return link ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {Card}
    </a>
  ) : (
    Card
  );
}
