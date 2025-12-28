
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="py-20 bg-[#2D2D2D] text-[#FDFBF7]">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">Let's connect.</h2>
        <p className="max-w-xl mx-auto text-[#EFEBE0]/60 mb-12">
          Open for collaboration, shared learning, or just a great tech conversation.
          Reach out through any of the platforms below!
        </p>
        
        <div className="flex justify-center gap-8 mb-16">
          {SOCIAL_LINKS.map((link) => (
            <a 
              key={link.platform}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full border border-[#FDFBF7]/20 hover:bg-[#FDFBF7] hover:text-[#2D2D2D] transition-all duration-300 transform hover:-translate-y-2"
              title={link.platform}
            >
              <i className={`fab ${link.icon} text-xl`}></i>
            </a>
          ))}
        </div>
        
        <div className="pt-12 border-t border-[#FDFBF7]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs tracking-widest text-[#EFEBE0]/40 uppercase">
          <p>© 2025 Sriya Kotagiriwar. Built with 🤍</p>
          <div className="flex gap-6">
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
