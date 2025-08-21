import React from 'react';
import { EDUCATION_DATA, CERTIFICATIONS_DATA } from '../constants';

const Education: React.FC = () => {
  return (
    <section id="education" className="scroll-mt-24">
      <h2 className="text-3xl font-bold text-white mb-5">Education & Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Education</h3>
          <div className="space-y-3">
            {EDUCATION_DATA.map((edu, index) => (
              <div key={index} className="bg-slate-800 p-5 rounded-lg shadow-lg border border-slate-700">
                <h4 className="font-bold text-lg text-white">{edu.institution}</h4>
                <p className="text-slate-300">{edu.degree}</p>
                <p className="text-slate-400 text-sm mt-1">{edu.period}</p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Certifications</h3>
          <div className="space-y-3">
            {CERTIFICATIONS_DATA.map((cert, index) => (
              <div key={index} className="bg-slate-800 p-5 rounded-lg shadow-lg border border-slate-700">
                <h4 className="font-bold text-lg text-white">{cert.name}</h4>
                <p className="text-slate-300">{cert.institution}</p>
                <p className="text-slate-400 text-sm mt-1">{cert.date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;