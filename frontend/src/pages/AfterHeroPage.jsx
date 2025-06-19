import { User, Search, MessageCircle } from 'lucide-react';
import clsx from 'clsx';
import { useTheme } from '../context/ThemeContext';

const features = [
  {
    title: 'Create one profile',
    desc: 'Build your reputation with a universal profile that works across hundreds of different kind of employers.',
    bgColor: 'bg-purple-200',
    icon: User,
  },
  {
    title: 'Explore your options',
    desc: 'Select your preferences (shift details, salary, location, etc.) and discover jobs most relevant to you.',
    bgColor: 'bg-emerald-200',
    icon: Search,
  },
  {
    title: 'Talk on your terms',
    desc: 'Message multiple employers while keeping all communication in one, convenient place. It’s so much easy.',
    bgColor: 'bg-blue-200',
    icon: MessageCircle,
  },
];

const AfterHeroPage = () => {
  const { colors } = useTheme();

  return (
    <>
      <section className="min-h-screen flex flex-col items-center bg-white/50 px-4 py-16">
        <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-4">
          The fast track to your next job
        </h2>
        <p className="text-gray-600 max-w-2xl text-center mb-12">
          We ensure your next step is a step forward. That's why we built a jobs marketplace that serves all kinds of professionals first.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full cursor-pointer">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={idx}
                className={clsx(
                  feature.bgColor,
                  'rounded-xl p-8 flex flex-col items-center text-center shadow-md space-y-4 transition-transform hover:scale-105'
                )}
              >
                <Icon className="w-12 h-12 text-gray-800 mb-2" />
                <h3 className="font-bold text-lg text-gray-800">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
                <button className={clsx(colors.bgColor, 'text-black px-4 py-2 rounded-md mt-2')}>
                  Get Started &gt;
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default AfterHeroPage;
