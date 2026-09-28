import React from 'react';
import Image from 'next/image';

const works = [
  {
    id: 1,
    title: "Newton Custom Patio",
    span: "col-span-1 md:col-span-2 row-span-2",
    image: "/media_1789655726960.png"
  },
  {
    id: 2,
    title: "Brookline Retaining Wall",
    span: "col-span-1 row-span-1",
    image: "/media_1789655705052.png"
  },
  {
    id: 3,
    title: "Wellesley Garden Design",
    span: "col-span-1 row-span-1",
    image: "/media_1789655681977.jpg"
  },
  {
    id: 4,
    title: "Weston Cedar Fencing",
    span: "col-span-1 md:col-span-2 row-span-1",
    image: "/media_1789655692479.png"
  }
];

export default function Works() {
  return (
    <section id="works" className="py-32 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-[#1E1D1D] font-bold tracking-widest text-xs uppercase block mb-4">
            Our Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-serif text-[#1E1D1D] font-medium tracking-tight mb-6">
            Explore our featured works.
          </h2>
          <p className="text-lg text-[#1E1D1D]/70 font-light">
            Take a look at some of our recent transformations across Greater Boston. From intimate patios to expansive landscape architectures.
          </p>
        </div>

        {/* Gapless Bento Grid / Masonry Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-none md:grid-rows-2 gap-4 md:gap-6 h-auto md:h-[800px]">
          {works.map((work) => (
            <div 
              key={work.id} 
              className={`relative rounded-3xl overflow-hidden group shadow-md hover:shadow-xl transition-all duration-500 h-[300px] md:h-auto ${work.span}`}
            >
              <Image
                src={work.image}
                alt={work.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover group-hover:scale-105 transition-transform duration-[2s] ease-out"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
              
              {/* Play / View Icon */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-100 scale-90">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white border border-white/50">
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-white text-xl sm:text-2xl font-serif font-medium tracking-wide drop-shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  {work.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center gap-2 bg-[#F9D04F] text-[#1E1D1D] px-8 py-4 rounded-full font-bold text-sm tracking-wide hover:bg-[#E5BE3B] transition-colors"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  );
}
