import React, { useEffect } from 'react';
import { X, ExternalLink, Github, Info } from 'lucide-react';
import { ProjectItem, PROFILE_DATA } from '../data/portfolioData';
import { ProjectVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: ProjectItem | null;
  linkNotice?: 'demo' | 'github' | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, linkNotice, onClose }) => {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#FAF7F9] dark:bg-[#120919] border border-[#E5D5DF] dark:border-[#3B1F47] shadow-2xl p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-4 right-4 w-10 h-10 rounded-lg flex items-center justify-center border border-[#E5D5DF] dark:border-[#3B1F47] text-[#4A2E41] dark:text-[#DFC8D7] hover:border-[#EC4899] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="pr-12">
          <p className="text-xs font-medium text-[#9D174D] dark:text-[#F472B6]">
            {project.category}
          </p>
          <h3
            id="project-modal-title"
            className="mt-1 font-display text-2xl sm:text-3xl font-bold tracking-tight text-[#1D1119] dark:text-white"
          >
            {project.title}
          </h3>
          {project.tagline && (
            <p className="mt-1 text-sm font-medium text-[#5C4655] dark:text-[#C4AEBE]">
              {project.tagline}
            </p>
          )}
        </div>

        {linkNotice && (
          <div className="mt-5 rounded-xl border border-[#EC4899]/40 bg-[#9D174D]/10 p-4 flex items-start gap-3">
            <Info className="w-5 h-5 text-[#9D174D] dark:text-[#F472B6] shrink-0 mt-0.5" />
            <div className="text-sm text-[#3A2232] dark:text-[#EDD9E6]">
              <p className="font-semibold">
                {linkNotice === 'demo'
                  ? 'Live Demo URL Pending Configuration'
                  : 'GitHub Repository URL Pending Configuration'}
              </p>
              <p className="mt-1 text-xs text-[#5C4655] dark:text-[#C4AEBE]">
                This project card uses an editable URL slot in{' '}
                <code className="font-mono">src/data/portfolioData.ts</code> so no placeholder
                or unverified links are fabricated. Add the live URL when deployed, or explore
                public repositories on Mukta&apos;s GitHub profile below.
              </p>
            </div>
          </div>
        )}

        {project.screenshotUrl && (
          <div className="mt-6">
            <ProjectVisual project={project} />
          </div>
        )}

        <div className="mt-6 space-y-5 text-sm leading-relaxed text-[#3A2232] dark:text-[#DFC8D7]">
          <div>
            <h4 className="font-display text-base font-semibold text-[#1D1119] dark:text-white">
              Overview
            </h4>
            <p className="mt-1.5">{project.shortDescription}</p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-[#1D1119] dark:text-white">
              Problem It Solves
            </h4>
            <p className="mt-1.5">{project.problemSolved}</p>
          </div>

          <div>
            <h4 className="font-display text-base font-semibold text-[#1D1119] dark:text-white">
              Key Features &amp; Focus Areas
            </h4>
            <ul className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {project.keyFeatures.map((feature, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span
                    aria-hidden="true"
                    className="mt-2 w-1.5 h-1.5 rounded-full bg-[#EC4899] shrink-0"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.categories && project.categories.length > 0 && (
            <div>
              <h4 className="font-display text-base font-semibold text-[#1D1119] dark:text-white">
                Supported Categories
              </h4>
              <p className="mt-1.5 text-sm text-[#5C4655] dark:text-[#C4AEBE]">
                {project.categories.join(' · ')}
              </p>
            </div>
          )}

          <div>
            <h4 className="font-display text-base font-semibold text-[#1D1119] dark:text-white">
              Technologies Used
            </h4>
            <p className="mt-1.5 font-mono text-xs sm:text-sm text-[#9D174D] dark:text-[#F9A8D4]">
              {project.technologies.join(' · ')}
            </p>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-[#E5D5DF] dark:border-[#341E3E] flex flex-wrap items-center gap-3">
          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#831843] via-[#9D174D] to-[#DB2777] hover:brightness-110 transition-all"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open Live Demo</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-medium border border-[#E5D5DF] dark:border-[#341E3E] text-[#5C4655] dark:text-[#C4AEBE]">
              Live Demo Link: Editable Slot
            </span>
          )}

          <a
            href={project.githubUrl || PROFILE_DATA.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold border border-[#E5D5DF] dark:border-[#3B1F47] text-[#1D1119] dark:text-white hover:border-[#EC4899] transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>{project.githubUrl ? 'View Repository' : 'Visit Mukta’s GitHub'}</span>
          </a>
        </div>
      </div>
    </div>
  );
};
