import React from 'react';
import { SERVICES_DATA } from '../constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="scroll-mt-24">
      <h2 className="text-4xl font-bold text-white text-center mb-5 drop-shadow-[0_1px_3px_rgba(34,211,238,0.6)]">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {SERVICES_DATA.map((service) => (
          <div
            key={service.title}
            className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6 transition-all duration-300 hover:border-slate-600 hover:-translate-y-1"
          >
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-lg p-3 inline-block mb-4 border border-slate-700/50">
              <service.icon className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="font-bold text-white text-lg mb-2">{service.title}</h3>
            <p className="text-slate-400 text-sm mb-4">{service.description}</p>
            <div className="flex flex-wrap gap-2">
              {service.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-700 text-slate-300 text-xs font-medium px-3 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;