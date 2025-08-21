import React, { useState } from 'react';
import { PERSONAL_INFO, DownloadIcon } from '../constants';
import CallSchedulerModal from './CallSchedulerModal';

const Hero: React.FC = () => {
  const [isSchedulerOpen, setIsSchedulerOpen] = useState(false);

  return (
    <>
      <section id="home" className="relative overflow-hidden pt-24 pb-10">
        {/* Abstract Background Shapes */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-slate-800/20 rounded-full blur-3xl" />
        <div className="absolute -top-20 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl animate-pulse animation-delay-400" />
        
        <div className="container mx-auto max-w-6xl px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-center">
            {/* Left Column: Text Content */}
            <div className="lg:col-span-3 text-center lg:text-left">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight">
                {PERSONAL_INFO.name} - <br className="md:hidden" />
                <span className="text-slate-400">{PERSONAL_INFO.title}</span>
              </h1>
              
              <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0">
                {PERSONAL_INFO.profileSummary}
              </p>

              {/* Action Buttons */}
              <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="#contact"
                  className="btn-glow px-8 py-3 rounded-full text-slate-100 font-medium"
                >
                  <span className="text-glow">Get In Touch</span>
                </a>
                <button
                  onClick={() => setIsSchedulerOpen(true)}
                  className="btn-glow flex items-center gap-3 px-8 py-3 rounded-full text-slate-100 font-medium"
                >
                  <span className="text-glow">Request A Call</span>
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                </button>
                <a
                  href="/peter-mensah-cv.pdf"
                  download
                  className="btn-glow flex items-center gap-3 px-8 py-3 rounded-full text-slate-100 font-medium"
                >
                  <DownloadIcon className="w-5 h-5" />
                  <span className="text-glow">Download Resume</span>
                </a>
              </div>

            </div>

            {/* Right Column: Image */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-72 h-72 lg:w-80 lg:h-80">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-slate-800/20 rounded-full blur-xl"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                    alt={PERSONAL_INFO.name}
                    className="relative w-full h-full object-cover rounded-full shadow-2xl"
                  />
              </div>
            </div>
          </div>
        </div>
      </section>
      <CallSchedulerModal isOpen={isSchedulerOpen} onClose={() => setIsSchedulerOpen(false)} />
    </>
  );
};

export default Hero;