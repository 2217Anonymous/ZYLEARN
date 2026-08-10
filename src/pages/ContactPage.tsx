import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Clock } from 'lucide-react';
import { SectionShell } from '@/components/ui/SectionShell';

const fieldClass =
  'w-full px-4 py-3.5 bg-[#ededed] border border-[#2a2a2e]/12 text-sm text-[#2a2a2e] outline-none focus:border-[#E53935] transition-colors placeholder:text-[#2a2a2e]/35';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Program Inquiry',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <SectionShell variant="light" showTitle={false} demoLabel="CONTACT" className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.28em] text-[#E53935] mb-4 inline-flex items-center gap-2">
            <Mail className="w-3.5 h-3.5 text-[#F5C518]" /> Direct Contact
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#2a2a2e] tracking-tight uppercase leading-[1.02]">
            Interested?{' '}
            <span className="text-[#F5C518]">Let&apos;s Talk</span>
          </h1>
          <p className="text-[#2a2a2e]/50 text-base mt-4 leading-relaxed max-w-xl">
            Questions about AI, full-stack, CRM, or growth tracks? Talk with our admissions team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          <div className="lg:col-span-5 space-y-5">
            <div className="bg-white border border-[#2a2a2e]/10 p-7 sm:p-8 space-y-7">
              <h3 className="text-xl font-black text-[#2a2a2e] uppercase tracking-tight">Contact Details</h3>
              <div className="space-y-6">
                {[
                  { icon: MapPin, label: 'Campus', value: 'Zylearn Innovation Hub, Bengaluru', accent: '#E53935' },
                  { icon: Phone, label: 'Phone & WhatsApp', value: '+91 98765 43210', accent: '#F5C518' },
                  { icon: Mail, label: 'Admissions', value: 'admissions@zylearn.com', accent: '#E53935' },
                ].map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 flex items-center justify-center shrink-0 border"
                        style={{
                          borderColor: item.accent,
                          backgroundColor: item.accent === '#F5C518' ? '#F5C518' : `${item.accent}14`,
                          color: item.accent === '#F5C518' ? '#2a2a2e' : item.accent,
                        }}
                      >
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40">
                          {item.label}
                        </p>
                        <p className="text-[#2a2a2e]/70 mt-1 text-sm leading-relaxed">{item.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-white border border-[#2a2a2e]/10 p-7 sm:p-8 space-y-3">
              <div className="flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.18em] text-[#E53935]">
                <Clock className="w-4 h-4 text-[#F5C518]" /> Operating Hours
              </div>
              <h4 className="font-black text-lg uppercase tracking-tight text-[#2a2a2e]">Admissions Desk</h4>
              <p className="text-sm text-[#2a2a2e]/50 leading-relaxed">
                Mon – Sat: 9:00 AM – 8:00 PM IST
                <br />
                Sunday: 10:00 AM – 4:00 PM IST
              </p>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white border border-[#2a2a2e]/10 p-7 sm:p-10">
              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-14 h-14 mx-auto flex items-center justify-center bg-[#E53935]/10 border border-[#E53935]/30 text-[#E53935]">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-black text-[#2a2a2e] text-2xl uppercase tracking-tight">Message Received</h3>
                  <p className="text-[#2a2a2e]/50 text-sm max-w-md mx-auto leading-relaxed">
                    An admissions counsellor will reach out to{' '}
                    <strong className="text-[#E53935]">{formData.email}</strong> within 4 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-black text-[#2a2a2e] text-2xl uppercase tracking-tight mb-1">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-[#2a2a2e]/45">We&apos;ll get back to you quickly.</p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40 block mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Alex Johnson"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40 block mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="alex@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={fieldClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40 block mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40 block mb-2">
                        Inquiry Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className={`${fieldClass} appearance-none`}
                      >
                        <option>Program Inquiry</option>
                        <option>Workshop Registration</option>
                        <option>Campus Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-[#2a2a2e]/40 block mb-2">
                      Your Message
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Tell us about your goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${fieldClass} resize-none`}
                    />
                  </div>

                  <button type="submit" className="pink-btn w-full justify-center text-xs py-4">
                    Send Message <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </SectionShell>
  );
};
