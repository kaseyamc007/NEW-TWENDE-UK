import React, { useState } from 'react';
import { Mail, Phone, Facebook, Globe, MessageSquare, Send, CheckCircle } from 'lucide-react';
import { ContactFormData } from '../types';

interface ContactSectionProps {
  onJoinClick: () => void;
}

export default function ContactSection({ onJoinClick }: ContactSectionProps) {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const validate = () => {
    const errs: typeof errors = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!formData.subject.trim()) errs.subject = 'Subject is required';
    if (!formData.message.trim()) errs.message = 'Please type a brief message';

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API mail dispatcher
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-20 sm:py-24 bg-neutral-900 text-white scroll-mt-10 relative">
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-orange-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Title block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 bg-emerald-950/40 border border-emerald-900 px-3.5 py-1.5 rounded-full inline-block mb-3">
            Contact & Support
          </span>
          <h2 className="text-3xl sm:text-4xl font-sans font-bold tracking-tight text-white mb-4" id="contact-heading">
            Get In Touch With Our Registry
          </h2>
          <p className="text-base text-neutral-400 font-medium leading-relaxed">
            Need urgent help raising a claims alert, verifying coordinates, or registering from Scotland/Northern Ireland? Our team stands ready to assist you.
          </p>
        </div>

        {/* Contact Layout grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-stretch" id="contact-layout-grid">
          
          {/* Info card block - Left */}
          <div className="lg:col-span-5 space-y-8 flex flex-col justify-between">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight text-white">
                Contact Information
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Connect with Twende Zambia UK. We operate an offline registry, emergency hotline desk, and active social channels for direct diaspora updates.
              </p>

              {/* Contact list items */}
              <div className="space-y-4">
                <a 
                  href="mailto:info@twendezambia.co.uk" 
                  className="p-4.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800/80 transition-all flex items-center gap-4 group"
                >
                  <div className="p-2.5 bg-emerald-500/10 text-emerald-400 rounded-lg group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 font-bold uppercase">Official Mailbox</span>
                    <span className="text-sm font-semibold text-white">info@twendezambia.co.uk</span>
                  </div>
                </a>

                <a 
                  href="tel:+447376575093" 
                  className="p-4.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800/80 transition-all flex items-center gap-4 group"
                >
                  <div className="p-2.5 bg-orange-500/10 text-orange-400 rounded-lg group-hover:bg-orange-600 group-hover:text-white transition-all">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 font-bold uppercase">Support Hotline (24/7 Calls)</span>
                    <span className="text-sm font-bold text-white font-mono">+44 7376 575093</span>
                  </div>
                </a>

                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer"
                  className="p-4.5 rounded-xl bg-neutral-950 hover:bg-neutral-800 border border-neutral-800/80 transition-all flex items-center gap-4 group"
                >
                  <div className="p-2.5 bg-[#1877f2]/10 text-[#1877f2] rounded-lg group-hover:bg-[#1877f2] group-hover:text-white transition-all">
                    <Facebook className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 font-bold uppercase">Our Facebook Hub</span>
                    <span className="text-sm font-semibold text-white">Twende Zambia UK</span>
                  </div>
                </a>

                <div 
                  className="p-4.5 rounded-xl bg-neutral-950 border border-neutral-800/80 flex items-center gap-4"
                >
                  <div className="p-2.5 bg-zinc-800 text-zinc-400 rounded-lg">
                    <Globe className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[10px] text-neutral-500 font-bold uppercase">Official Domain</span>
                    <span className="text-sm font-semibold text-neutral-300">www.twendezambia.co.uk</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Banner encouraging Joining private WhatsApp */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#198754] to-neutral-950 border border-emerald-900/40 space-y-4" id="whatsapp-promobox">
              <div className="flex gap-3">
                <div className="p-2.5 bg-white/10 text-white rounded-lg self-start">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-extrabold text-[#fd7e14] text-base leading-tight">Join Our Exclusive WhatsApp Group</h4>
                  <p className="text-xs text-zinc-300 mt-1">
                    Become part of an active, mutually supporting community that immediately stands with you in times of sudden mourning.
                  </p>
                </div>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={onJoinClick}
                  className="bg-white hover:bg-zinc-100 text-emerald-900 text-xs font-extrabold px-4.5 py-2 rounded-lg transition-colors shadow-sm"
                >
                  Join Now
                </button>
                <a
                  href="https://wa.me/447376575093"
                  className="bg-emerald-700 hover:bg-emerald-600 text-white text-xs font-bold px-4 py-2 rounded-lg transition-colors flex items-center gap-1 border border-emerald-600"
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp Support
                </a>
              </div>
            </div>

          </div>

          {/* Interactive contact input form - Right */}
          <div className="lg:col-span-7 bg-neutral-950 border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between" id="contact-form-container">
            <div>
              <h3 className="text-lg font-bold text-white mb-1.5">Direct Message Portal</h3>
              <p className="text-xs text-neutral-400 mb-6">Drop your queries or feedback regarding registrations or committee operations.</p>
              
              {isSent ? (
                <div className="text-center py-12 space-y-3.5 bg-neutral-900 border border-neutral-800 rounded-xl max-w-md mx-auto" id="contact-success-alert">
                  <div className="w-12 h-12 bg-emerald-900/60 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-800">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-white">Message Dispatch Completed!</h4>
                  <p className="text-xs text-neutral-400 leading-relaxed px-6">
                    Our admin registrar has received your ticket safely and will follow up with you at your email registered in our logs.
                  </p>
                  <button
                    onClick={() => setIsSent(false)}
                    className="text-xs font-bold text-emerald-400 hover:text-emerald-300 pt-1"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-4">
                  {/* Name and email row */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Your Full Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Milimo Banda"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full text-xs sm:text-sm px-3 py-2.5 bg-neutral-900 border border-neutral-850 focus:border-emerald-500 rounded-lg outline-none focus:ring-1 focus:ring-emerald-500 text-white font-medium"
                      />
                      {errors.name && <p className="text-red-400 text-[10px] font-semibold">{errors.name}</p>}
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Email Address</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="m.banda@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full text-xs sm:text-sm px-3 py-2.5 bg-neutral-900 border border-neutral-850 focus:border-emerald-500 rounded-lg outline-none focus:ring-1 focus:ring-emerald-500 text-white font-medium"
                      />
                      {errors.email && <p className="text-red-400 text-[10px] font-semibold">{errors.email}</p>}
                    </div>
                  </div>

                  {/* Phone & Subject */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Contact Number (Optional)</label>
                      <input
                        type="text"
                        name="phone"
                        placeholder="+44 7111 222333"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full text-xs sm:text-sm px-3 py-2.5 bg-neutral-900 border border-neutral-850 focus:border-emerald-500 rounded-lg outline-none focus:ring-1 focus:ring-emerald-500 text-white font-medium"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider">Subject Line</label>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Membership Eligibility or Sponsorship Enquiry"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full text-xs sm:text-sm px-3 py-2.5 bg-neutral-900 border border-neutral-850 focus:border-emerald-500 rounded-lg outline-none focus:ring-1 focus:ring-emerald-500 text-white"
                      />
                      {errors.subject && <p className="text-red-400 text-[10px] font-semibold">{errors.subject}</p>}
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="space-y-1.5">
                    <label className="block text-[10px] font-bold text-neutral-400 uppercase tracking-wider font-sans">Detailed Message</label>
                    <textarea
                      name="message"
                      rows={4}
                      placeholder="Hi, I am of Zambian origin living under London borough. I want to register three child dependents..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full text-xs sm:text-sm px-3 py-2.5 bg-neutral-900 border border-neutral-850 focus:border-emerald-500 rounded-lg outline-none focus:ring-1 focus:ring-emerald-500 text-white"
                    />
                    {errors.message && <p className="text-red-400 text-[10px] font-semibold">{errors.message}</p>}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs tracking-wider uppercase rounded-xl transition-all shadow-md flex items-center justify-center gap-2 select-none"
                    >
                      {isSubmitting ? (
                        <>In Transit...</>
                      ) : (
                        <>
                          Dispatch Ticket Now 
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Note pointing to offline support safety */}
            <p className="text-[10px] text-neutral-500 text-center italic mt-6">
              *Twende Zambia UK operates standard data safety. Your emails are only referenced for official registry communication.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
