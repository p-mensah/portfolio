import React, { useState } from 'react';
import { WORK_HISTORY } from '../constants';
import type { WorkExperience as WorkExperienceType } from '../types';
import Modal from './Modal';

const Experience: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<WorkExperienceType | null>(null);

  const handleOpenModal = (job: WorkExperienceType) => {
    setSelectedJob(job);
  };

  const handleCloseModal = () => {
    setSelectedJob(null);
  };

  return (
    <>
      <section id="experience" className="scroll-mt-24">
        <h2 className="text-3xl font-bold text-white mb-8 text-center">Work Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {WORK_HISTORY.map((job, index) => (
            <div key={index} className="flex flex-col">
              {/* Line and Number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="text-xl font-bold text-slate-600 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <div className="flex-grow h-px bg-slate-700"></div>
              </div>

              {/* Content */}
              <div className="flex-grow space-y-4">
                <div className="flex items-start gap-4">
                  {job.icon && <job.icon className="w-10 h-10 text-cyan-400 flex-shrink-0 mt-1" />}
                  <div>
                    <h3 className="text-lg font-bold text-white uppercase tracking-wider">{job.title}</h3>
                    <p className="text-md text-cyan-400">{job.company}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm">
                  {job.summary}
                </p>
              </div>

              {/* Button at the bottom */}
              <div className="text-right pt-4">
                <button
                  onClick={() => handleOpenModal(job)}
                  className="btn-glow px-5 py-2 rounded-full text-slate-100 font-medium text-sm"
                >
                  <span className="text-glow">Learn More</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedJob && (
        <Modal
          isOpen={!!selectedJob}
          onClose={handleCloseModal}
          title={selectedJob.title}
        >
          <div className="space-y-4">
            <p className="text-cyan-400 font-semibold">{selectedJob.company}</p>
            <p className="text-sm text-slate-500">{selectedJob.period}</p>
            <ul className="list-disc list-inside space-y-2 text-slate-400">
              {selectedJob.details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </div>
        </Modal>
      )}
    </>
  );
};

export default Experience;