'use client';

import {
  useState,
  useRef,
  useLayoutEffect,
  useEffect,
  useMemo,
} from 'react';
import { FiMenu } from 'react-icons/fi';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const navRef = useRef<HTMLDivElement>(null);
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });
  const isClickScrolling = useRef(false);

  const navItems = useMemo(
    () => [
      { name: 'Home',     href: '#home'     },
      { name: 'Projects', href: '#projects' },
      { name: 'Skills',   href: '#skills'   },
      { name: 'Contact',  href: '#contact'  },
    ],
    []
  );

  useLayoutEffect(() => {
    const els = navRef.current!.querySelectorAll<HTMLElement>('.nav-item');
    const el = els[activeIndex];
    if (el) {
      setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (isClickScrolling.current) return;
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const idx = navItems.findIndex(
              item => item.href === `#${entry.target.id}`
            );
            if (idx !== -1) setActiveIndex(idx);
          }
        });
      },
      { threshold: 0.6 }
    );

    navItems.forEach(item => {
      const sec = document.getElementById(item.href.slice(1));
      if (sec) observer.observe(sec);
    });

    return () => observer.disconnect();
  }, [navItems]);

  const handleClick = (e: React.MouseEvent, idx: number) => {
    const el = e.currentTarget as HTMLElement;
    isClickScrolling.current = true;
    setActiveIndex(idx);
    setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    setIsOpen(false);
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 600);
  };

  return (
    <>
      <div className="fixed top-0 left-0 w-full h-[85px] bg-[#69B0E5] z-20" />

      <nav className="fixed top-0 left-0 w-full z-30 flex justify-center items-center h-[85px]">
        {/* desktop */}
        <div className="hidden lg:flex bg-[#FBF9F7] border-2 border-black rounded-full shadow-md px-6 py-1 items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={40}
            height={41}
            className="rounded-full mr-8"
          />

          <div ref={navRef} className="relative flex space-x-4">
            {/* sliding indicator */}
            <div
              className="absolute inset-y-0 rounded-full bg-[#FF912A] border-2 border-black"
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: indicator.width,
                transition: 'transform 500ms ease-out, width 500ms ease-out',
                willChange: 'transform, width',
              }}
            />

            {navItems.map(({ name, href }, idx) => {
              const isActive = idx === activeIndex;
              return (
                <a
                  key={href}
                  href={href}
                  className={`nav-item relative px-4 py-1 z-10 cursor-pointer select-none ${
                    isActive
                      ? 'text-black'
                      : 'text-black transition-colors hover:text-[#FF912A]'
                  }`}
                  onClick={e => handleClick(e, idx)}
                >
                  {name}
                </a>
              );
            })}
          </div>
        </div>

        {/* mobile */}
        <button
          className="lg:hidden fixed top-4 right-4 p-2 bg-white border-black border-[1.5px] rounded-full shadow-md z-50"
          onClick={() => setIsOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <FiMenu className="h-6 w-6 text-black" />
        </button>

        {isOpen && (
          <div className="lg:hidden fixed top-16 right-4 bg-[#FBF9F7] border-black border-[1.5px] rounded-2xl py-4 w-48 shadow-xl z-40">
            {navItems.map(({ name, href }, idx) => {
              const isActive = idx === activeIndex;
              return (
                <a
                  key={href}
                  href={href}
                  onClick={e => handleClick(e, idx)}
                  className={`block px-4 py-2 mx-2 rounded-lg ${
                    isActive
                      ? 'bg-[#FF912A] text-black'
                      : 'text-gray-800 transition-colors hover:text-[#FF912A] hover:bg-gray-100'
                  }`}
                >
                  {name}
                </a>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
}
