
import React from 'react';
import { SKILLS } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-16 text-center flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-[#D2B48C]"></span>
          Technical Skills
          <span className="w-12 h-px bg-[#D2B48C]"></span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skillGroup) => (
            <div key={skillGroup.category} className="p-8 rounded-2xl bg-white border border-[#D2B48C]/10 shadow-sm hover:shadow-md transition-shadow group">
              <h3 className="text-[#8B7E66] font-bold text-sm uppercase tracking-widest mb-6 group-hover:text-[#2D2D2D] transition-colors">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span 
                    key={skill} 
                    className="px-3 py-1 bg-[#FDFBF7] text-[#5C5346] text-sm rounded-full border border-[#D2B48C]/20 hover:bg-[#8B7E66] hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
