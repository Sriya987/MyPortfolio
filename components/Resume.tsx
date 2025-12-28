
import React from 'react';

const Resume: React.FC = () => {
  return (
    <section id="resume" className="py-24 bg-[#8B7E66] text-[#FDFBF7]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to see the full picture?</h2>
        <p className="text-[#FDFBF7]/80 text-lg mb-10 max-w-2xl mx-auto">
          Download my resume to view my academic background, projects, and achievements.

        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="https://drive.google.com/file/d/1PXN4JcqnaSUva6TdUAFLAZgNBvQRsXan/view?usp=drive_link" 
            className="inline-flex items-center justify-center gap-2 bg-[#FDFBF7] text-[#8B7E66] px-10 py-4 rounded-full font-bold hover:bg-[#2D2D2D] hover:text-white transition-all transform hover:-translate-y-1"
          >
            <i className="fas fa-file-download"></i>
            View My Resume
          </a>
          <a 
            href="https://linkedin.com/in/sriya-kotagiriwar" 
            target="_blank"
            className="inline-flex items-center justify-center gap-2 border border-[#FDFBF7]/30 text-[#FDFBF7] px-10 py-4 rounded-full font-bold hover:bg-white/10 transition-all transform hover:-translate-y-1"
          >
            <i className="fab fa-linkedin"></i>
            View on LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
