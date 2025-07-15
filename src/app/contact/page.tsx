'use client';

import { useState } from 'react';
import {
  FaPhone,
  FaEnvelope,
  FaGithub,
  FaCopy,
  FaCheckCircle,
} from 'react-icons/fa';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const phone = '096-251-8548';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative font-sans min-h-screen bg-[#FBF9F7] text-black flex flex-col items-center px-4 md:px-8 py-[85px]">
      <h1 className="text-3xl font-semibold mb-8">Get in touch</h1>

      <div className="w-full max-w-md md:max-w-lg space-y-4 md:space-y-6">
        {/* phone */}
        <button
          onClick={handleCopy}
          className="w-full flex items-center gap-4 border border-gray-300 rounded-lg px-4 py-3 bg-white hover:bg-gray-50 transition"
        >
          <FaPhone className="w-5 h-5 text-[#FF912A]" />
          <span className="flex-1 text-left">{phone}</span>
          <FaCopy className="w-5 h-5 text-[#FF912A]" />
        </button>

        {/* email */}
        <a
          href="mailto:thanatporn.nsr@gmail.com"
          className="w-full flex items-center gap-4 border border-gray-300 rounded-lg px-4 py-3 bg-white hover:bg-gray-50 transition"
        >
          <FaEnvelope className="w-5 h-5 text-[#FF912A]" />
          <span className="flex-1 text-left">
            thanatporn.nsr@gmail.com
          </span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/ThanatpornMilk"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center gap-4 border border-gray-300 rounded-lg px-4 py-3 bg-white hover:bg-gray-50 transition"
        >
          <FaGithub className="w-5 h-5 text-[#FF912A]" />
          <span className="flex-1 text-left">
            github.com/ThanatpornMilk
          </span>
        </a>
      </div>

      {/* Copy Snackbar */}
      {copied && (
        <div className="fixed inset-x-0 top-24 flex justify-center z-50 pointer-events-none">
          <div className="bg-white border border-gray-200 shadow-md rounded-full px-4 py-2 flex items-center gap-2">
            <FaCheckCircle className="w-4 h-4 text-[#FF912A]" />
            <span className="text-gray-800 text-sm">Copied to clipboard</span>
          </div>
        </div>
      )}
    </div>
  );
}
