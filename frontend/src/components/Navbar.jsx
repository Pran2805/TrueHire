import { ChevronDown, Check } from 'lucide-react'; 
import clsx from 'clsx';
import { useTheme } from '../context/ThemeContext';
import { useState } from 'react';

const Navbar = () => {
  const { theme, setTheme, colors } = useTheme();
  const navItems = ['About', 'Jobs', 'Upload CV', 'Post Job'];
  const [activeNav, setActiveNav] = useState('About');

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
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
        <div className={clsx("flex items-center cursor-pointer transition-colors ", colors.textHover)}>
          <span>More</span>
          <ChevronDown className="ml-1 w-4 h-4" />
        </div>
      </nav>

      <div className="flex items-center space-x-3 mr-4">
        {['purple', 'green', 'teal', 'blue'].map((col) => (
          <button
            key={col}
            onClick={() => setTheme(col)}
            className={clsx(
              'relative w-6 h-6 rounded-full flex items-center justify-center',
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

      <div className="flex items-center space-x-4">
        <button className={clsx("text-gray-600 transition-colors cursor-pointer", colors.textHover)}>Sign In</button>
        <button className={clsx(colors.primary, colors.primaryHover, 'text-white px-4 py-2 rounded-lg transition cursor-pointer')}>Sign Up</button>
      </div>
    </header>
  );
};

export default Navbar;
