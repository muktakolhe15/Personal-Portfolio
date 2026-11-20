import React, { useEffect } from 'react';
import { X, Award, FileText } from 'lucide-react';

export interface CertificateModalInfo {
  title: string;
  organization: string;
  date?: string;
  description: string;
}

interface CertificateModalProps {
  info: CertificateModalInfo | null;
  onClose: () => void;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ info, onClose }) => {
  useEffect(() => {
    if (!info) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [info, onClose]);

  if (!info) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="cert-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl bg-[#FAF7F9] dark:bg-[#120919] border border-[#E5D5DF] dark:border-[#3B1F47] shadow-2xl p-6 sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close certificate details"
          className="absolute top-4 right-4 w-9 h-9 rounded-lg flex items-center justify-center border border-[#E5D5DF] dark:border-[#3B1F47] text-[#4A2E41] dark:text-[#DFC8D7] hover:border-[#EC4899] transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[#9D174D]/15 border border-[#EC4899]/30 flex items-center justify-center text-[#9D174D] dark:text-[#F472B6]">
            <Award className="w-5 h-5" />
          </div>
          <div>
            {info.date && (
              <p className="text-xs font-mono text-[#9D174D] dark:text-[#F472B6]">{info.date}</p>
            )}
            <h3
              id="cert-modal-title"
              className="font-display text-lg font-bold text-[#1D1119] dark:text-white pr-8"
            >
              {info.title}
            </h3>
          </div>
        </div>

        <p className="mt-3 text-xs font-medium text-[#5C4655] dark:text-[#C4AEBE]">
          Issuer / Organizer: {info.organization}
        </p>

        <p className="mt-4 text-sm leading-relaxed text-[#3A2232] dark:text-[#DFC8D7]">
          {info.description}
        </p>

        <div className="mt-5 rounded-xl border border-dashed border-[#9D174D]/40 bg-[#9D174D]/5 p-4 flex items-start gap-3">
          <FileText className="w-5 h-5 text-[#9D174D] dark:text-[#F472B6] shrink-0 mt-0.5" />
          <p className="text-xs text-[#5C4655] dark:text-[#C4AEBE] leading-relaxed">
            Certificate file or verification link has not been attached yet. Add{' '}
            <code className="font-mono">certificateUrl</code> or{' '}
            <code className="font-mono">certificateImageUrl</code> in{' '}
            <code className="font-mono">src/data/portfolioData.ts</code> to link directly to your
            credential.
          </p>
        </div>
      </div>
    </div>
  );
};
