import React, { useState } from 'react';
import { PERSONAL_INFO, MailIcon, PhoneIcon, MapPinIcon } from '../constants';

const Contact: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form Submitted:', { name, email, message });
        setIsSubmitted(true);

        setTimeout(() => {
            setIsSubmitted(false);
            setName('');
            setEmail('');
            setMessage('');
        }, 4000);
    };

    return (
        <section id="contact" className="scroll-mt-24">
            <h2 className="text-3xl font-bold text-white mb-5">Get In Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-800/40 border border-slate-700 p-5 rounded-2xl">
                {/* Left Column: Form */}
                <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Send me a message</h3>
                    <p className="text-slate-400 mb-6">I'm open to discussing new projects and opportunities.</p>
                    {isSubmitted ? (
                        <div className="bg-green-500/10 border border-green-500/30 text-green-300 p-4 rounded-lg text-center">
                            <h4 className="font-bold">Thank you!</h4>
                            <p>Your message has been sent successfully.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="contact-name" className="sr-only">Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    placeholder="Your Name"
                                    className="block w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-email" className="sr-only">Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Your Email"
                                    className="block w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="contact-message" className="sr-only">Message</label>
                                <textarea
                                    id="contact-message"
                                    rows={4}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    placeholder="Your Message"
                                    className="block w-full bg-slate-700 border border-slate-600 rounded-md py-2 px-3 text-white focus:outline-none focus:ring-2 focus:ring-sky-500"
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full btn-glow px-8 py-3 rounded-full text-slate-100 font-medium"
                            >
                                <span className="text-glow">Send Message</span>
                            </button>
                        </form>
                    )}
                </div>

                {/* Right Column: Contact Info */}
                <div className="space-y-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Contact Information</h3>
                    <div className="flex items-start gap-4">
                        <div className="bg-slate-700 p-3 rounded-full">
                           <MailIcon className="w-6 h-6 text-sky-400" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">Email</h4>
                            <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-400 hover:text-sky-400 transition-colors">{PERSONAL_INFO.email}</a>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-slate-700 p-3 rounded-full">
                           <PhoneIcon className="w-6 h-6 text-sky-400" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">Phone</h4>
                            <p className="text-slate-400">{PERSONAL_INFO.mobile}</p>
                        </div>
                    </div>
                     <div className="flex items-start gap-4">
                        <div className="bg-slate-700 p-3 rounded-full">
                           <MapPinIcon className="w-6 h-6 text-sky-400" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-white">Address</h4>
                            <p className="text-slate-400">{PERSONAL_INFO.address}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;