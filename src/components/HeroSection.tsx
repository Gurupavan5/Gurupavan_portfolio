import React, { useEffect, useRef } from 'react';
import ait1 from '../assets/ait1.png';
import ab2 from '../assets/ab2.png';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [currentEmoji, setCurrentEmoji] = React.useState('😊');

  useEffect(() => {
    const emojis = ['😊', '🥰', '😎', '☺️', '👀', '😉', '😁', '😋', '🙃'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % emojis.length;
      setCurrentEmoji(emojis[currentIndex]);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const { clientX, clientY } = e;
      const { width, height } = heroRef.current.getBoundingClientRect();

      const x = (clientX / width - 0.5) * 20;
      const y = (clientY / height - 0.5) * 20;

      heroRef.current.style.setProperty('--x', `${x}px`);
      heroRef.current.style.setProperty('--y', `${y}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gray-900"
      style={{ perspective: '1000px' }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center -z-20"
        style={{ backgroundImage: `url(${ab2})` }}
      />

      {/* Blurred Colored Blobs */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-[10%] w-64 h-64 rounded-full bg-secondary-700 blur-[100px] animate-blob"></div>
        <div className="absolute top-40 right-[15%] w-72 h-72 rounded-full bg-accent-700 blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-32 left-[20%] w-80 h-80 rounded-full bg-primary-700 blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Text Content */}
      <div
        className="container mx-auto px-4 z-10 text-center transform-style-3d"
        style={{
          transform:
            'translate3d(var(--x, 0), var(--y, 0), 0) rotateX(calc(var(--y, 0) * -0.05deg)) rotateY(calc(var(--x, 0) * 0.05deg))',
        }}
      >
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight text-white">
            <span className="inline-block animate-fade-in-up animation-delay-100"> Hello </span>
            <br />
            <span className="inline-block animate-fade-in-up animation-delay-300 bg-gradient-to-r"> I'm </span>
            <br />
            <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r sand-text">Pavan</span>
            <span className="inline-block text-4xl ml-2">{currentEmoji}</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 leading-relaxed animate-fade-in-up animation-delay-700">
            I create <span className="font-semibold text-secondary-400">delightful</span> digital experiences
            with a touch of <span className="font-semibold text-yellow-400">magic</span> ✨
          </p>
        </div>

        {/* Scroll Down Arrow */}
        <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
  <a href="#about" className="flex flex-col items-center cursor-pointer">
    <img
      src={ait1}
      alt="Scroll down arrow"
      className="w-12 h-16 animate-bounce"
    />
  </a>
</div>

      </div>
      

      {/* 🧾 Scrolling Bulletin */}
      <div className="absolute bottom-0 w-full overflow-hidden bg-black text-white z-50 h-10 flex items-center">
        <div className="whitespace-nowrap animate-marquee text-sm md:text-base font-medium px-8">
          🚨 Breaking News: Pavan has built a magical portfolio ✨ | 🎨 Crafting creative full-Stack Web development projects | 🧙‍♂️ Mastering React like a wizard | 🛠️ Beautiful websites coming soon — stay tuned!
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
