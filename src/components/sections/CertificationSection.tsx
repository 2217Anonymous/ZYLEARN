import React, { useState } from 'react';
import { Award, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface CertificationSectionProps {
  onJoinClick?: () => void;
}

const PROGRAMS = [
  'AI & LLM Mastery',
  'Full Stack Web Development',
  'Data & Cloud Architecture',
  'CRM Sales Automation',
  'Instagram & Digital Marketing',
  'Google My Business Rank',
];

export const CertificationSection: React.FC<CertificationSectionProps> = ({ onJoinClick }) => {
  const [studentName, setStudentName] = useState('Alex Johnson');
  const [selectedProgram, setSelectedProgram] = useState('AI & LLM Mastery');

  return (
    <section className="py-24 bg-[#ededed] relative overflow-hidden glass-mesh glass-mesh">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

          {/* Left Controls */}
          <div className="space-y-7">
            <span className="mega-badge-yellow inline-flex">
              <Award className="w-3.5 h-3.5" /> ISO Verified Credentials
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-[#2a2a2e] tracking-tight leading-tight">
              Learn It. Build It. <br />
              <span className="text-[#E53935]">Prove It.</span>
            </h2>
            <p className="text-[#2a2a2e]/55 text-base leading-relaxed">
              Earn a verifiable digital certificate recognized by tech companies, agencies &amp; global clients.
              Includes cryptographic verification code &amp; LinkedIn 1-click add.
            </p>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-mono text-[#E53935] font-bold uppercase block mb-2 tracking-wider">
                  Student Name Preview
                </label>
                <input
                  type="text"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="mega-input"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-[#E53935] font-bold uppercase block mb-2 tracking-wider">
                  Program Track
                </label>
                <select
                  value={selectedProgram}
                  onChange={(e) => setSelectedProgram(e.target.value)}
                  className="mega-select"
                >
                  {PROGRAMS.map((p) => (
                    <option key={p} className="bg-white text-[#2a2a2e]">{p}</option>
                  ))}
                </select>
              </div>
            </div>

            <button onClick={onJoinClick} className="pink-btn">
              Earn Your Certificate
            </button>
          </div>

          {/* Right: Certificate Preview */}
          <div className="mega-card p-8 border-[#ededed] shadow-xl relative overflow-hidden bg-white">

            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-[20px]"
              style={{ backgroundColor: '#E53935' }} />

            <div className="flex items-center justify-between pb-5 mb-5 border-b border-[#ededed]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#E53935]/10 border border-[#E53935]/20 flex items-center justify-center">
                  <Award className="w-5 h-5 text-[#E53935]" />
                </div>
                <div>
                  <h4 className="font-black text-[#2a2a2e] text-sm">ZYLEARN ACADEMY</h4>
                  <span className="text-[10px] font-mono text-[#E53935] uppercase tracking-wider font-bold">
                    Official Certificate of Completion
                  </span>
                </div>
              </div>
              <ShieldCheck className="w-6 h-6 text-[#E53935]" />
            </div>

            <div className="text-center py-8 space-y-4">
              <p className="text-xs text-[#2a2a2e]/45 uppercase font-mono tracking-widest font-bold">This certifies that</p>
              <h3 className="text-2xl sm:text-3xl font-black text-[#2a2a2e] tracking-wide font-sans text-[#E53935]">
                {studentName || 'Your Name'}
              </h3>
              <p className="text-sm text-[#2a2a2e]/55 max-w-xs mx-auto leading-relaxed">
                has successfully completed all project capstones and practical assessments for
              </p>
              <span className="mega-badge text-xs">
                {selectedProgram}
              </span>
            </div>

            <div className="pt-5 border-t border-[#ededed] flex items-center justify-between text-[11px] font-mono text-[#2a2a2e]/45 font-bold">
              <span>ID: ZY-849201</span>
              <span className="text-[#E53935] flex items-center gap-1 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5" /> ISO Verified
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
