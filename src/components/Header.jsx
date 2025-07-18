import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [path, setPath] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPath(window.location.pathname);
    }
  }, []);

  const isActive = (href) => {
  if (href === '/') {
    return path === '/' || path.startsWith('/article') ? 'border-b-2 border-black text-black' : 'text-gray-900 hover:text-black';
  }
  return path === href ? 'border-b-2 border-black text-black' : 'text-gray-900 hover:text-black';
};


  return (
    <header className="flex justify-between items-center h-[65px] md:h-[134px] px-5 md:px-[60px] border-b relative">
      {/* Logo */}
      <a href="/">
        <img src="/logo.svg" alt="Logo" className="w-56 h-auto cursor-pointer" />
      </a>

      {/* Desktop Nav */}
      <nav className="font-newyorkSmall hidden md:flex text-[20px] uppercase h-full">
        {['/', '/about', '/projects', '/readme'].map((href, i) => {
          const label = ['Blog', 'About', 'Projects', 'Read me'][i];
          return (
            <a
              key={href}
              href={href}
              className={`flex items-center px-6 h-full ${isActive(href)}`}
            >
              {label}
            </a>
          );
        })}
      </nav>

      {/* Mobile Nav */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
          <FaBars size={20} />
        </button>
        {isOpen && (
          <div className="font-newyorkSmall absolute top-full left-0 right-0 bg-white border-t p-4 flex flex-col items-center gap-3 text-sm uppercase z-10 text-center ">
            <a href="/" className={isActive('/')}>Blog</a>
            <a href="/about" className={isActive('/about')}>About</a>
            <a href="/projects" className={isActive('/projects')}>Projects</a>
            <a href="/readme" className={isActive('/readme')}>Read me</a>
          </div>
        )}
      </div>
    </header>
  );
}
