
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-[#EFEBE0]/30 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-64 h-64 md:w-80 md:h-80 relative flex-shrink-0">
            <div className="absolute inset-0 bg-[#D2B48C] rounded-2xl transform rotate-6 scale-95 opacity-20"></div>
            <img 
              // src='../public/about.jpg'
              src='/about.jpg'
              alt="Sriya Kotagiriwar" 
              className="w-full h-full object-cover rounded-2xl relative z-10 beige-glow border-4 border-white"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-[#D2B48C]"></span>
              About Me
            </h2>
            <div className="text-[#5C5346] space-y-4 text-lg leading-relaxed">
              <p>
                I’m Sriya, a final-year Computer Science and Engineering student with a deep passion for technology and innovation. 
                What began as curiosity has evolved into hands-on experience in full-stack development, backend systems, and Python programming, 
                with a solid grounding in data structures and problem-solving.
              </p>
              <p>
                I’ve developed dynamic web applications, and continue to strengthen my skills through real-world opportunities 
                like my AI & DevOps apprenticeship at DBS Tech India and an internship at a startup.
              </p>
              <p>
                I aim to channel my technical abilities into efficient, high-impact solutions that bridge the gap between 
                technology and real-world needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
