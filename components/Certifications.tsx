
import React, { useRef } from 'react';
import { CERTIFICATIONS } from '../constants';

const Certifications: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollContainerRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="certifications" className="py-24 bg-[#EFEBE0]/30 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">
        <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-4">
          <span className="w-12 h-px bg-[#D2B48C]"></span>
          Certifications
          <span className="w-12 h-px bg-[#D2B48C]"></span>
        </h2>

        <div className="group relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20
             w-12 h-12 bg-white rounded-full shadow-lg
             flex items-center justify-center
             hover:bg-[#8B7E66] transition-all
             opacity-0 group-hover:opacity-100 group-hover:translate-x-0
             hidden md:flex"
            aria-label="Previous"
          >
            <img
              src="/left-arrow.png"
              alt="Previous"
              className="w-5 h-5"
            />
          </button>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20
             w-12 h-12 bg-white rounded-full shadow-lg
             flex items-center justify-center
             hover:bg-[#8B7E66] transition-all
             hidden md:flex"
            aria-label="Next"
          >
            <img
              src="/right-arrow.png"
              alt="Next"
              className="w-5 h-5"
            />
          </button>


          {/* Carousel Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {CERTIFICATIONS.map((cert) => (
              <div
                key={cert.id}
                className="flex-none w-[280px] sm:w-[350px] snap-center"
              >
                <div className="bg-white p-5 rounded-2xl shadow-sm border border-[#D2B48C]/10 hover:shadow-md transition-all duration-300 h-full flex flex-col">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-gray-50 border border-gray-100 beige-glow">
                    <img
                      src={cert.imageUrl}
                      alt={cert.name}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg text-[#2D2D2D] leading-tight mb-2">{cert.name}</h3>
                    <p className="text-sm text-[#8B7E66] font-medium">{cert.issuer}</p>
                  </div>
                  {/* <div className="mt-4 pt-4 border-t border-gray-50 flex justify-between items-center text-xs text-[#5C5346] opacity-60">
                    <span className="uppercase tracking-widest font-semibold"><pre>Cred ID Verified</pre></span>
                    <span>{cert.date}</span>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Indicator */}
        <div className="mt-8 flex justify-center md:hidden gap-1.5">
          {CERTIFICATIONS.map((_, i) => (
            <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#D2B48C] opacity-30"></div>
          ))}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Certifications;
