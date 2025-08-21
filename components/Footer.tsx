import React from 'react';
import { PERSONAL_INFO, GithubIcon, LinkedinIcon } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#010614] border-t border-slate-800 py-5">
      <div className="container mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center text-slate-500">
          <div className="flex justify-center gap-6 mb-4">
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub Profile">
              <GithubIcon className="w-6 h-6" />
            </a>
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn Profile">
              <LinkedinIcon className="w-6 h-6" />
            </a>
          </div>
          <p>&copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;