import React, { useState } from 'react';
import Modal from './Modal';

interface CallSchedulerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CallSchedulerModal: React.FC<CallSchedulerModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Call Scheduled:', { name, email, date });
    setIsSubmitted(true);
    
    setTimeout(() => {
        onClose();
        // Reset form state after a short delay to allow for modal closing animation
        setTimeout(() => {
            setIsSubmitted(false);
            setName('');
            setEmail('');
            setDate('');
        }, 500);
    }, 3000);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Schedule a Call">
      {isSubmitted ? (
        <div className="text-center p-8">
          <h3 className="text-2xl font-bold text-green-400">Thank You!</h3>
          <p className="mt-2 text-slate-300">Your request has been received. I'll be in touch shortly to confirm.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-400 mb-1">Full Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="John Doe"
              className="block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-400 mb-1">Email Address</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
              className="block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-slate-400 mb-1">Preferred Date & Time</label>
            <input
              type="datetime-local"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              min={new Date().toISOString().slice(0, 16)}
              className="block w-full bg-slate-700 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition"
            />
          </div>
          <div className="pt-4">
            <button
              type="submit"
              className="w-full btn-glow px-8 py-3 rounded-full text-slate-100 font-medium text-center"
            >
              <span className="text-glow">Confirm Schedule</span>
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
};

export default CallSchedulerModal;