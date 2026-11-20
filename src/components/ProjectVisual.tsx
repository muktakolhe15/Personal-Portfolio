import React from 'react';
import { ProjectItem } from '../data/portfolioData';

interface ProjectVisualProps {
  project: ProjectItem;
}

/**
 * ProjectVisual
 * Displays the project's screenshot (`project.screenshotUrl`) when provided.
 * Returns null when no screenshot URL is configured so no placeholder boxes appear.
 */
export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project }) => {
  if (!project.screenshotUrl) {
    return null;
  }

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#160B1E] border border-[#3B1E47]/50">
      <img
        src={project.screenshotUrl}
        alt={`${project.title} screenshot`}
        referrerPolicy="no-referrer"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
    </div>
  );
};
