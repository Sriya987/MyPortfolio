
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-20 px-6 text-center">
      <div className="mb-6 inline-block px-4 py-1 rounded-full border border-[#D2B48C]/30 text-[#8B7E66] text-xs font-semibold tracking-widest uppercase">
        Aspiring Software Engineer
      </div>
      <h1 className="text-5xl md:text-8xl font-bold text-[#2D2D2D] mb-6 tracking-tight leading-tight">
        Sriya <br />
        <span className="text-[#8B7E66]">Kotagiriwar</span>
      </h1>
      <p className="max-w-xl text-[#5C5346] text-lg md:text-xl leading-relaxed mb-10 opacity-80">
        Crafting high-impact solutions through full-stack development and backend systems.
      </p>
      <div className="flex gap-4">
        <a href="#projects" className="bg-[#8B7E66] text-[#FDFBF7] px-8 py-3 rounded-full hover:bg-[#2D2D2D] transition-all transform hover:-translate-y-1 shadow-lg">
          View Projects
        </a>
        <a href="#contact" className="border border-[#8B7E66] text-[#8B7E66] px-8 py-3 rounded-full hover:bg-[#F5E6D3] transition-all transform hover:-translate-y-1">
          Connect
        </a>
      </div>
    </section>
  );
};

export default Hero;
