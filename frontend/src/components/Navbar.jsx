import { ChevronDown, Check, Menu, X } from 'lucide-react';
import clsx from 'clsx';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const Navbar = () => {
  const { theme, setTheme, colors } = useTheme();
  const navItems = ['About', 'Jobs', 'Upload CV', 'Post Job'];
  const [activeNav, setActiveNav] = useState('About');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm relative">
      <div className={clsx("text-2xl font-extrabold", colors.text)}>TrueHire.</div>
      <nav className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => setActiveNav(item)}
            className={clsx(
              "transition-colors pb-1 cursor-pointer",
              activeNav === item ? `${colors.text} ${colors.activeNav}` : colors.textHover
            )}
          >
            {item}
          </button>
        ))}
        <div className={clsx("flex items-center cursor-pointer transition-colors", colors.textHover)}>
          <span>More</span>
          <ChevronDown className="ml-1 w-4 h-4" />
        </div>
      </nav>
      <div className="hidden md:flex items-center space-x-3 mr-4">
        {['purple', 'green', 'teal', 'blue'].map((col) => (
          <button
            key={col}
            onClick={() => setTheme(col)}
            className={clsx(
              'relative w-6 h-6 rounded-full flex items-center justify-center cursor-pointer',
              col === 'purple' && 'bg-purple-600',
              col === 'green' && 'bg-emerald-500',
              col === 'teal' && 'bg-teal-500',
              col === 'blue' && 'bg-blue-600'
            )}
          >
            {theme === col && (
              <Check className="w-4 h-4 text-white" />
            )}
          </button>
        ))}
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <button className={clsx("text-gray-600 transition-colors cursor-pointer", colors.textHover)}>Sign In</button>
        <button className={clsx(colors.primary, colors.primaryHover, 'text-white px-4 py-2 rounded-lg transition cursor-pointer')}>Sign Up</button>
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md rounded-b-lg flex flex-col items-center space-y-4 py-6 z-50">
          {navItems.map((item) => (
            <button
              key={item}
              onClick={() => { setActiveNav(item); setIsMenuOpen(false); }}
              className={clsx(
                "transition-colors pb-1 cursor-pointer",
                activeNav === item ? `${colors.text} ${colors.activeNav}` : colors.textHover
              )}
            >
              {item}
            </button>
          ))}
          <div className="flex items-center space-x-3">
            {['purple', 'green', 'teal', 'blue'].map((col) => (
              <button
                key={col}
                onClick={() => setTheme(col)}
                className={clsx(
                  'relative w-6 h-6 rounded-full flex items-center justify-center cursor-pointer',
                  col === 'purple' && 'bg-purple-600',
                  col === 'green' && 'bg-emerald-500',
                  col === 'teal' && 'bg-teal-500',
                  col === 'blue' && 'bg-blue-600'
                )}
              >
                {theme === col && (
                  <Check className="w-4 h-4 text-white" />
                )}
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center space-y-2">
            <button className={clsx("text-gray-600 transition-colors cursor-pointer", colors.textHover)}>Sign In</button>
            <button className={clsx(colors.primary, colors.primaryHover, 'text-white px-4 py-2 rounded-lg transition cursor-pointer')}>Sign Up</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
