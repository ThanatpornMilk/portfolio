'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  FaGithub,
  FaPhone,
  FaEnvelope,
  FaCheckCircle,
} from 'react-icons/fa';

const globalStyle = `
@keyframes floatDots {
  0% { background-position: 0 0; }
  100% { background-position: 100% 100%; }
}
`;

export default function HomePage() {
  const [showToast, setShowToast] = useState(false);
  const phoneNumber = '096-251-8548';

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      console.error('Copy failed', err);
    }
  };

  return (
    <>
      <style>{globalStyle}</style>

      <div className="relative flex flex-col min-h-screen bg-[#FBF9F7] overflow-hidden">

        {/* grid background */}
        <div
          className="absolute left-0 right-0 top-0 bottom-0 z-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(105,176,229,0.2) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(105,176,229,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px',
          }}
        />

        <main
          className="
            relative z-20
            flex flex-col lg:flex-row
            justify-center items-center
            px-6 pb-10 gap-0 lg:gap-12
            pt-[85px]
            min-h-screen
          "
        >
          {/* Intro */}
          <div className="font-sans w-full lg:w-3/6 flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-6">
            <h2 className="text-2xl font-semibold text-gray-800">
              Welcome to my portfolio
            </h2>
            <h1 className="text-5xl font-bold text-black">
              I’m{' '}
              <span
                className="text-[#FF912A]"
                style={{
                  WebkitTextStroke: '1px black',
                  WebkitTextFillColor: '#FF912A',
                }}
              >
                Thanatporn Nilsamrit
              </span>
            </h1>
            <p className="text-gray-600 text-sm max-w-xl">
              I’m a Computer Science student interested in Frontend, Mobile and Web development.
              This website showcases projects I created during my studies.
            </p>

            {/* Phone + Email */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-center">
              <div className="flex items-center gap-2">
                <FaPhone className="text-[#FF912A] w-5 h-5" />
                <button
                  onClick={handleCopy}
                  className="text-gray-700 focus:outline-none hover:underline"
                >
                  {phoneNumber}
                </button>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-[#FF912A] w-5 h-5" />
                <a
                  href="mailto:thanatporn.nsr@gmail.com"
                  className="text-gray-700 hover:underline"
                >
                  thanatporn.nsr@gmail.com
                </a>
              </div>
            </div>

            {/* GitHub Button */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start mt-4">
              <a
                href="https://github.com/ThanatpornMilk"
                className="bg-[#FF912A] border border-black text-black font-medium px-5 py-2 rounded-full hover:bg-[#e6811a] transition-transform duration-200 transform hover:scale-105 flex items-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="w-5 h-5" />
                My GitHub
              </a>
            </div>
          </div>

          {/* Education */}
          <div className="font-mono w-full lg:w-2/5 flex flex-col justify-center items-center bg-[#F9FAFB] text-gray-800 rounded-xl p-4 text-xs shadow-md border border-gray-300 mt-8 lg:mt-0">
            <h3 className="text-lg font-semibold text-center">Education</h3>
            <div className="flex flex-row items-center gap-4">
              <Image
                src="/KU.png"
                alt="Kasetsart University Logo"
                width={130}
                height={132}
                className="rounded-full hidden md:block"
              />
              <div className="my-4">
                <p>
                  <span className="text-blue-600">const</span> education = {'{'}
                </p>
                <p className="pl-4">
                  university:{' '}
                  <span className="text-green-600">&ldquo;Kasetsart University&rdquo;</span>,
                </p>
                <p className="pl-4">
                  faculty:{' '}
                  <span className="text-green-600">&ldquo;Science&rdquo;</span>,
                </p>
                <p className="pl-4">
                  major:{' '}
                  <span className="text-green-600">&ldquo;Computer Science&rdquo;</span>,
                </p>
                <p className="pl-4">
                  startYear: <span className="text-blue-600">2022</span>,
                </p>
                <p className="pl-4">
                  expectedGraduation: <span className="text-blue-600">2026</span>
                </p>
                <p>{'}'}</p>
              </div>
            </div>
          </div>
        </main>

        {/* Copy Snackbar */}
        {showToast && (
          <div className="fixed inset-x-0 top-24 flex justify-center z-50 pointer-events-none">
            <div className="bg-white border border-gray-200 shadow-md rounded-full px-4 py-2 flex items-center gap-2">
              <FaCheckCircle className="text-[#FF912A] w-4 h-4" />
              <span className="text-gray-800 text-sm">Copied to clipboard</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
