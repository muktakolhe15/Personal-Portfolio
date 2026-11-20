/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  GraduationCap,
  Code2,
  Layout,
  Database,
  Cpu,
  Wrench,
  ExternalLink,
  Trophy,
  Sparkles,
  Award,
  Calendar,
  Building2,
  ArrowUp,
  Heart,
  Layers,
  Users,
  Wallet,
  Newspaper,
  MapPin,
} from 'lucide-react';
import {
  PROFILE_DATA,
  EDUCATION_DATA,
  SKILL_CATEGORIES,
  PROJECTS_DATA,
  EXPERIENCES_DATA,
  ACHIEVEMENTS_DATA,
  ProjectItem,
} from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { TypingRoles } from './components/TypingRoles';
import { ProfilePortrait } from './components/ProfilePortrait';
import { ProjectVisual } from './components/ProjectVisual';
import { ProjectModal } from './components/ProjectModal';
import { CertificateModal, CertificateModalInfo } from './components/CertificateModal';
import { ContactSection } from './components/ContactSection';
import { Reveal } from './components/Reveal';

type ProjectFilter = 'all' | 'finance' | 'ai' | 'smart-city';

const PROJECT_ICON_MAP: Record<ProjectItem['visualType'], React.ReactNode> = {
  budgetbuddy: <Wallet className="w-5 h-5" />,
  finnews: <Newspaper className="w-5 h-5" />,
  citysense: <MapPin className="w-5 h-5" />,
};

const SKILL_ICON_MAP: Record<string, React.ReactNode> = {
  'programming-languages': <Code2 className="w-5 h-5" />,
  'web-development': <Layout className="w-5 h-5" />,
  'backend-database': <Database className="w-5 h-5" />,
  'ai-technology': <Cpu className="w-5 h-5" />,
  'tools-platforms': <Wrench className="w-5 h-5" />,
};

const EXPERIENCE_ICON_MAP: Record<string, React.ReactNode> = {
  hackathons: <Trophy className="w-5 h-5" />,
  'technical-activities': <Layers className="w-5 h-5" />,
  'other-experiences': <Users className="w-5 h-5" />,
};

export default function App() {
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof document !== 'undefined') {
      return document.documentElement.classList.contains('dark');
    }
    return true;
  });

  const [activeSection, setActiveSection] = useState<string>('hero');
  const [projectFilter, setProjectFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [projectLinkNotice, setProjectLinkNotice] = useState<'demo' | 'github' | null>(null);
  const [certificateModalInfo, setCertificateModalInfo] = useState<CertificateModalInfo | null>(
    null
  );

  // Sync dark mode class with documentElement and localStorage
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('mk-portfolio-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('mk-portfolio-theme', 'light');
    }
  }, [isDark]);

  // Track active section in viewport for animated nav highlighting
  useEffect(() => {
    const sectionIds = [
      'hero',
      'about',
      'education',
      'skills',
      'projects',
      'experience',
      'contact',
    ];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        { rootMargin: '-35% 0px -50% 0px', threshold: 0.01 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  const filteredProjects =
    projectFilter === 'all'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((proj) => proj.filterGroup === projectFilter);

  const handleProjectAction = (
    e: React.MouseEvent,
    project: ProjectItem,
    type: 'demo' | 'github'
  ) => {
    e.stopPropagation();
    const url = type === 'demo' ? project.liveDemoUrl : project.githubUrl;
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProject(project);
      setProjectLinkNotice(type);
    }
  };

  const handleOpenCertificate = (
    url: string,
    fallbackInfo: CertificateModalInfo
  ) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      setCertificateModalInfo(fallbackInfo);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#FAF7F9] text-[#1D1119] dark:bg-[#08040C] dark:text-[#F6EEF4] transition-colors duration-200">
      {/* Subtle Ambient Background Lighting */}
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 overflow-hidden z-0"
      >
        <div className="absolute -top-40 -left-32 w-[520px] h-[520px] rounded-full bg-[#6B123F]/15 dark:bg-[#6B123F]/28 blur-[130px]" />
        <div className="absolute top-1/3 -right-40 w-[480px] h-[480px] rounded-full bg-[#EC4899]/10 dark:bg-[#7E22CE]/20 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[440px] h-[440px] rounded-full bg-[#9D174D]/10 dark:bg-[#9D174D]/18 blur-[130px]" />
      </div>

      {/* Sticky Navigation Bar */}
      <Navbar
        isDark={isDark}
        onToggleTheme={() => setIsDark((prev) => !prev)}
        activeSection={activeSection}
      />

      <main className="relative z-10">
        {/* ================================================================
            1. HERO SECTION
           ================================================================ */}
        <section
          id="hero"
          aria-labelledby="hero-heading"
          className="pt-12 pb-20 sm:pt-16 sm:pb-24 lg:pt-24 lg:pb-28"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 lg:gap-12 items-center">
              {/* Left Column: Introduction & Primary CTAs */}
              <div className="md:col-span-7 space-y-6 text-center md:text-left flex flex-col items-center md:items-start">
                <div className="space-y-3 flex flex-col items-center md:items-start">
                  <p className="text-xs font-mono tracking-wide text-[#9D174D] dark:text-[#F472B6]">
                    B.Tech Computer Engineering · D.Y. Patil College of Engineering and Innovation
                  </p>
                  <h1
                    id="hero-heading"
                    className="font-display text-4xl sm:text-5xl lg:text-[3.5rem] font-bold tracking-tight leading-[1.08] text-[#1D1119] dark:text-white text-balance"
                  >
                    {PROFILE_DATA.greetingHeading}
                  </h1>
                  <div className="flex justify-center md:justify-start">
                    <TypingRoles roles={PROFILE_DATA.rotatingRoles} />
                  </div>
                </div>

                <p className="text-base sm:text-lg leading-relaxed text-[#4A2E41] dark:text-[#DFC8D7] max-w-2xl">
                  {PROFILE_DATA.heroIntro}
                </p>

                {/* Primary & Secondary Action Buttons */}
                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 pt-2">
                  <a
                    href="#projects"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-[#6B123F] via-[#9D174D] to-[#EC4899] hover:brightness-110 transition-all duration-150 shadow-lg shadow-[#9D174D]/25 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]"
                  >
                    <span>Explore My Projects</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold border border-[#D9C2D1] dark:border-[#3E224B] bg-white/80 dark:bg-[#140B1B] text-[#1D1119] dark:text-white hover:border-[#EC4899] transition-colors duration-150 whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]"
                  >
                    <span>Let&apos;s Connect</span>
                  </a>
                </div>

                {/* Social Links: GitHub & LinkedIn */}
                <div className="pt-4 flex items-center justify-center md:justify-start gap-4">
                  <span className="text-xs font-medium text-[#6E5365] dark:text-[#B89BB0]">
                    Connect on
                  </span>
                  <div className="flex items-center gap-2.5">
                    <a
                      href={PROFILE_DATA.contact.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Mukta Kolhe on GitHub"
                      className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#E5D5DF] dark:border-[#341E3E] bg-white dark:bg-[#130A1A] text-[#3A2232] dark:text-[#E5D3DF] hover:border-[#EC4899] hover:text-[#9D174D] dark:hover:text-[#F472B6] transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                    <a
                      href={PROFILE_DATA.contact.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Mukta Kolhe on LinkedIn"
                      className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#E5D5DF] dark:border-[#341E3E] bg-white dark:bg-[#130A1A] text-[#3A2232] dark:text-[#E5D3DF] hover:border-[#EC4899] hover:text-[#9D174D] dark:hover:text-[#F472B6] transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${PROFILE_DATA.contact.email}`}
                      aria-label="Email Mukta Kolhe"
                      className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#E5D5DF] dark:border-[#341E3E] bg-white dark:bg-[#130A1A] text-[#3A2232] dark:text-[#E5D3DF] hover:border-[#EC4899] hover:text-[#9D174D] dark:hover:text-[#F472B6] transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Right Column: Circular Profile Photo with Gradient Border */}
              <div className="md:col-span-5 flex justify-center md:justify-end">
                <ProfilePortrait variant="hero" />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================
            2. ABOUT ME SECTION
           ================================================================ */}
        <section
          id="about"
          aria-labelledby="about-heading"
          className="py-20 sm:py-24 border-t border-[#E5D5DF] dark:border-[#24132D]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <p className="text-xs font-mono tracking-wide text-[#9D174D] dark:text-[#F472B6]">
                      Introduction
                    </p>
                    <h2
                      id="about-heading"
                      className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1119] dark:text-white text-balance"
                    >
                      About Me
                    </h2>
                  </div>

                  <div className="space-y-4 text-base leading-relaxed text-[#3A2232] dark:text-[#DFC8D7]">
                    {PROFILE_DATA.aboutParagraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>

                {/* Core Interest Areas */}
                <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] p-6 sm:p-7">
                  <h3 className="font-display text-lg font-bold text-[#1D1119] dark:text-white">
                    Core Focus &amp; Interests
                  </h3>
                  <p className="mt-1.5 text-xs text-[#5C4655] dark:text-[#C4AEBE]">
                    Areas I actively explore, build in, and collaborate on.
                  </p>
                  <div className="mt-5 grid grid-cols-2 gap-2.5">
                    {PROFILE_DATA.interests.map((interest) => (
                      <div
                        key={interest}
                        className="px-3.5 py-2.5 rounded-lg bg-[#FAF7F9] dark:bg-[#1B0F24] border border-[#E5D5DF] dark:border-[#3A2245] text-xs font-medium text-[#3A2232] dark:text-[#EDD9E6] hover:border-[#EC4899]/60 transition-colors"
                      >
                        {interest}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================================
            3. EDUCATION SECTION (Vertical Timeline)
           ================================================================ */}
        <section
          id="education"
          aria-labelledby="education-heading"
          className="py-20 sm:py-24 border-t border-[#E5D5DF] dark:border-[#24132D]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-xs font-mono tracking-wide text-[#9D174D] dark:text-[#F472B6]">
                  Academic Journey
                </p>
                <h2
                  id="education-heading"
                  className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1119] dark:text-white text-balance"
                >
                  My Education
                </h2>
              </div>

              <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                {/* Summary Academic Card */}
                <div className="lg:col-span-5 rounded-2xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] p-6 sm:p-7 shadow-sm">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B123F] to-[#EC4899] flex items-center justify-center text-white mb-5">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#1D1119] dark:text-white">
                    {EDUCATION_DATA.degree}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#9D174D] dark:text-[#F472B6]">
                    {EDUCATION_DATA.branch}
                  </p>
                  <p className="mt-3 text-sm text-[#4A2E41] dark:text-[#DFC8D7] flex items-start gap-2">
                    <Building2 className="w-4 h-4 text-[#9D174D] dark:text-[#F472B6] shrink-0 mt-0.5" />
                    <span>{EDUCATION_DATA.college}</span>
                  </p>

                  <div className="mt-6 pt-5 border-t border-[#E5D5DF] dark:border-[#2E1938] grid grid-cols-3 gap-3">
                    <div>
                      <span className="block text-xs text-[#6E5365] dark:text-[#B89BB0]">
                        Engineering
                      </span>
                      <span className="mt-1 block font-mono text-sm font-semibold tabular-nums text-[#1D1119] dark:text-white">
                        {EDUCATION_DATA.engineeringDuration}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-[#6E5365] dark:text-[#B89BB0]">
                        Academic Year
                      </span>
                      <span className="mt-1 block font-mono text-sm font-semibold tabular-nums text-[#1D1119] dark:text-white">
                        {EDUCATION_DATA.academicYear}
                      </span>
                    </div>
                    <div>
                      <span className="block text-xs text-[#6E5365] dark:text-[#B89BB0]">
                        Graduation
                      </span>
                      <span className="mt-1 block font-mono text-sm font-semibold tabular-nums text-[#1D1119] dark:text-white">
                        {EDUCATION_DATA.expectedGraduationYear}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Vertical Timeline */}
                <div className="lg:col-span-7 relative pl-8 sm:pl-10 space-y-8 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-[2px] before:bg-gradient-to-b before:from-[#EC4899] before:via-[#9D174D] before:to-[#3E224B]">
                  {EDUCATION_DATA.timelineMilestones.map((item, idx) => (
                    <div key={idx} className="relative">
                      <span
                        aria-hidden="true"
                        className="absolute -left-8 sm:-left-10 top-1.5 w-6 h-6 rounded-full bg-[#FAF7F9] dark:bg-[#08040C] border-2 border-[#EC4899] flex items-center justify-center"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#EC4899]" />
                      </span>
                      <div className="rounded-2xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] p-6">
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="font-mono text-xs font-semibold tabular-nums text-[#9D174D] dark:text-[#F472B6]">
                            {item.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5 text-xs text-[#6E5365] dark:text-[#B89BB0]">
                            <Calendar className="w-3.5 h-3.5" />
                            <span>B.Tech Milestone</span>
                          </span>
                        </div>
                        <h3 className="mt-2 font-display text-lg font-bold text-[#1D1119] dark:text-white">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#5C4655] dark:text-[#C4AEBE]">
                          {item.subtitle}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[#4A2E41] dark:text-[#DFC8D7]">
                          {item.note}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================================
            4. TECHNICAL SKILLS SECTION
           ================================================================ */}
        <section
          id="skills"
          aria-labelledby="skills-heading"
          className="py-20 sm:py-24 border-t border-[#E5D5DF] dark:border-[#24132D]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-2xl">
                <p className="text-xs font-mono tracking-wide text-[#9D174D] dark:text-[#F472B6]">
                  Capabilities &amp; Stack
                </p>
                <h2
                  id="skills-heading"
                  className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1119] dark:text-white text-balance"
                >
                  My Technical Skills
                </h2>
                <p className="mt-3 text-base text-[#4A2E41] dark:text-[#DFC8D7]">
                  Technologies, frameworks, and tools I work with across software engineering, web
                  development, and AI-powered applications.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {SKILL_CATEGORIES.map((category) => (
                  <div
                    key={category.id}
                    className="rounded-2xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] p-6 flex flex-col justify-between hover:border-[#EC4899]/50 transition-colors duration-200"
                  >
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-[#9D174D]/12 border border-[#EC4899]/25 flex items-center justify-center text-[#9D174D] dark:text-[#F472B6] shrink-0">
                          {SKILL_ICON_MAP[category.id] || <Sparkles className="w-5 h-5" />}
                        </div>
                        <h3 className="font-display text-lg font-bold text-[#1D1119] dark:text-white">
                          {category.title}
                        </h3>
                      </div>

                      <p className="mt-3 text-sm text-[#5C4655] dark:text-[#C4AEBE] leading-relaxed">
                        {category.description}
                      </p>

                      {/* Animated Interactive Skill Items */}
                      <div className="mt-5 flex flex-wrap gap-2">
                        {category.items.map((skill) => (
                          <span
                            key={skill.name}
                            className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium bg-[#FAF7F9] dark:bg-[#1B0F24] border border-[#E5D5DF] dark:border-[#3A2245] text-[#2B1925] dark:text-[#F3E5EE] hover:-translate-y-0.5 hover:border-[#EC4899]/70 transition-all duration-150"
                          >
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================================
            5. FEATURED PROJECTS SECTION
           ================================================================ */}
        <section
          id="projects"
          aria-labelledby="projects-heading"
          className="py-20 sm:py-24 border-t border-[#E5D5DF] dark:border-[#24132D]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-mono tracking-wide text-[#9D174D] dark:text-[#F472B6]">
                    Selected Work
                  </p>
                  <h2
                    id="projects-heading"
                    className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1119] dark:text-white text-balance"
                  >
                    Projects I&apos;ve Built
                  </h2>
                </div>

                {/* Interactive Category Filter Controls */}
                <div
                  role="group"
                  aria-label="Filter projects by category"
                  className="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-[#EFE6EC] dark:bg-[#140B1B] border border-[#E5D5DF] dark:border-[#301B3B]"
                >
                  {(
                    [
                      { id: 'all', label: 'All Projects' },
                      { id: 'finance', label: 'Finance' },
                      { id: 'ai', label: 'FinNews AI' },
                      { id: 'smart-city', label: 'Smart City' },
                    ] as { id: ProjectFilter; label: string }[]
                  ).map((tab) => {
                    const active = projectFilter === tab.id;
                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setProjectFilter(tab.id)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap shrink-0 transition-colors ${
                          active
                            ? 'bg-gradient-to-r from-[#831843] to-[#DB2777] text-white shadow-sm'
                            : 'text-[#5C4655] dark:text-[#C4AEBE] hover:text-[#1D1119] dark:hover:text-white'
                        }`}
                      >
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Project Cards Grid */}
              <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-7">
                {filteredProjects.map((project) => (
                  <article
                    key={project.id}
                    onClick={() => {
                      setSelectedProject(project);
                      setProjectLinkNotice(null);
                    }}
                    className="group cursor-pointer rounded-2xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] p-6 flex flex-col justify-between hover:-translate-y-1 hover:border-[#EC4899]/70 transition-all duration-200 shadow-sm"
                  >
                    <div>
                      {project.screenshotUrl ? (
                        <div className="mb-5">
                          <ProjectVisual project={project} />
                        </div>
                      ) : (
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-xl bg-[#9D174D]/12 border border-[#EC4899]/25 flex items-center justify-center text-[#9D174D] dark:text-[#F472B6] shrink-0">
                            {PROJECT_ICON_MAP[project.visualType]}
                          </div>
                          <p className="text-xs font-medium text-[#9D174D] dark:text-[#F472B6]">
                            {project.category}
                          </p>
                        </div>
                      )}

                      <div>
                        {project.screenshotUrl && (
                          <p className="text-xs font-medium text-[#9D174D] dark:text-[#F472B6]">
                            {project.category}
                          </p>
                        )}
                        <h3 className="font-display text-xl font-bold tracking-tight text-[#1D1119] dark:text-white group-hover:text-[#9D174D] dark:group-hover:text-[#F472B6] transition-colors">
                          {project.title}
                        </h3>
                        {project.tagline && (
                          <p className="mt-1 text-xs font-medium text-[#6E5365] dark:text-[#B89BB0]">
                            {project.tagline}
                          </p>
                        )}
                      </div>

                      <p className="mt-3 text-sm leading-relaxed text-[#3A2232] dark:text-[#DFC8D7]">
                        {project.shortDescription}
                      </p>

                      {/* Problem It Solves */}
                      <div className="mt-4 pt-4 border-t border-[#EFE6EC] dark:border-[#261530]">
                        <h4 className="text-xs font-semibold text-[#1D1119] dark:text-white">
                          Problem It Solves
                        </h4>
                        <p className="mt-1 text-xs leading-relaxed text-[#5C4655] dark:text-[#C4AEBE]">
                          {project.problemSolved}
                        </p>
                      </div>

                      {/* Key Features */}
                      <div className="mt-4">
                        <h4 className="text-xs font-semibold text-[#1D1119] dark:text-white">
                          Key Features &amp; Focus Areas
                        </h4>
                        <ul className="mt-2 space-y-1.5 text-xs text-[#4A2E41] dark:text-[#DFC8D7]">
                          {project.keyFeatures.slice(0, 6).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span
                                aria-hidden="true"
                                className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EC4899] shrink-0"
                              />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        {project.keyFeatures.length > 6 && (
                          <p className="mt-2 text-xs font-medium text-[#9D174D] dark:text-[#F472B6]">
                            + {project.keyFeatures.length - 6} more features (click card to view
                            all)
                          </p>
                        )}
                      </div>

                      {/* Categories (for FinNews AI) */}
                      {project.categories && project.categories.length > 0 && (
                        <div className="mt-4">
                          <h4 className="text-xs font-semibold text-[#1D1119] dark:text-white">
                            News Categories
                          </h4>
                          <p className="mt-1 text-xs text-[#5C4655] dark:text-[#C4AEBE]">
                            {project.categories.join(' · ')}
                          </p>
                        </div>
                      )}

                      {/* Technologies Used */}
                      <div className="mt-4">
                        <h4 className="text-xs font-semibold text-[#1D1119] dark:text-white">
                          Technologies Used
                        </h4>
                        <p className="mt-1 font-mono text-xs text-[#9D174D] dark:text-[#F9A8D4]">
                          {project.technologies.join(' · ')}
                        </p>
                      </div>
                    </div>

                    {/* Action Buttons: Live Demo & GitHub */}
                    <div className="mt-6 pt-5 border-t border-[#EFE6EC] dark:border-[#261530] flex flex-wrap items-center gap-3">
                      {project.liveDemoUrl ? (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#831843] to-[#DB2777] hover:brightness-110 transition-all whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => handleProjectAction(e, project, 'demo')}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-[#831843] to-[#DB2777] hover:brightness-110 transition-all whitespace-nowrap shrink-0"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </button>
                      )}

                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-[#E5D5DF] dark:border-[#3A2245] text-[#1D1119] dark:text-white hover:border-[#EC4899] transition-colors whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={(e) => handleProjectAction(e, project, 'github')}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold border border-[#E5D5DF] dark:border-[#3A2245] text-[#1D1119] dark:text-white hover:border-[#EC4899] transition-colors whitespace-nowrap shrink-0"
                        >
                          <Github className="w-3.5 h-3.5" />
                          <span>GitHub</span>
                        </button>
                      )}
                    </div>
                  </article>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================================
            6. HACKATHONS, ACHIEVEMENTS & EXPERIENCE SECTION (Combined)
           ================================================================ */}
        <section
          id="experience"
          aria-labelledby="experience-heading"
          className="py-20 sm:py-24 border-t border-[#E5D5DF] dark:border-[#24132D]"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-xs font-mono tracking-wide text-[#9D174D] dark:text-[#F472B6]">
                  Collaboration, Learning &amp; Credentials
                </p>
                <h2
                  id="experience-heading"
                  className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1119] dark:text-white text-balance"
                >
                  Hackathons, Achievements &amp; Experience
                </h2>
                <p className="mt-3 text-base text-[#4A2E41] dark:text-[#DFC8D7]">
                  Hackathon participation, campus technical activities, workshops, certifications,
                  and collaborative student engineering experiences.
                </p>
              </div>

              {/* Subheading 1: Hackathons & Technical Experience */}
              <div className="mt-12">
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E5D5DF] dark:border-[#2E1938]">
                  <h3 className="font-display text-xl font-bold text-[#1D1119] dark:text-white">
                    Hackathons &amp; Technical Experience
                  </h3>
                  <span className="text-xs font-mono text-[#6E5365] dark:text-[#B89BB0]">
                    01 · Practice &amp; Events
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
                  {EXPERIENCES_DATA.map((exp) => (
                    <div
                      key={exp.id}
                      className="rounded-2xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] p-6 flex flex-col justify-between hover:border-[#EC4899]/50 transition-colors"
                    >
                      <div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#9D174D]/12 border border-[#EC4899]/25 flex items-center justify-center text-[#9D174D] dark:text-[#F472B6] shrink-0">
                            {EXPERIENCE_ICON_MAP[exp.id] || <Trophy className="w-5 h-5" />}
                          </div>
                          <p className="text-xs font-semibold text-[#9D174D] dark:text-[#F472B6]">
                            {exp.categoryTitle}
                          </p>
                        </div>

                        <h4 className="mt-4 font-display text-lg font-bold text-[#1D1119] dark:text-white">
                          {exp.eventName}
                        </h4>
                        <p className="mt-2 text-sm leading-relaxed text-[#4A2E41] dark:text-[#DFC8D7]">
                          {exp.summary}
                        </p>

                        <ul className="mt-4 space-y-2 text-xs text-[#3A2232] dark:text-[#DFC8D7]">
                          {exp.highlights.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span
                                aria-hidden="true"
                                className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#EC4899] shrink-0"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 pt-4 border-t border-[#EFE6EC] dark:border-[#261530]">
                        {exp.certificateUrl ? (
                          <a
                            href={exp.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9D174D] dark:text-[#F472B6] hover:underline"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              handleOpenCertificate(exp.certificateUrl, {
                                title: exp.eventName,
                                organization: exp.categoryTitle,
                                description: exp.summary,
                              })
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9D174D] dark:text-[#F472B6] hover:underline"
                          >
                            <Award className="w-3.5 h-3.5" />
                            <span>Certificate Placeholder</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Subheading 2: Achievements & Certifications */}
              <div id="achievements" className="mt-14">
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-[#E5D5DF] dark:border-[#2E1938]">
                  <div>
                    <h3 className="font-display text-xl font-bold text-[#1D1119] dark:text-white">
                      Achievements &amp; Certifications
                    </h3>
                    <p className="mt-1 text-xs text-[#5C4655] dark:text-[#C4AEBE]">
                      Editable credential slots for online certifications, technical workshops,
                      hackathon participation, competitions, and student development programs.
                    </p>
                  </div>
                  <span className="text-xs font-mono text-[#6E5365] dark:text-[#B89BB0] shrink-0">
                    02 · Credentials
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {ACHIEVEMENTS_DATA.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] p-6 flex flex-col justify-between hover:border-[#EC4899]/50 transition-colors"
                    >
                      <div>
                        {/* Thumbnail or Icon Header */}
                        {item.certificateImageUrl ? (
                          <div className="mb-4 aspect-[16/9] rounded-xl overflow-hidden border border-[#E5D5DF] dark:border-[#301B3B]">
                            <img
                              src={item.certificateImageUrl}
                              alt={item.title}
                              referrerPolicy="no-referrer"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="flex items-center justify-between gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-[#9D174D]/12 border border-[#EC4899]/25 flex items-center justify-center text-[#9D174D] dark:text-[#F472B6]">
                              <Award className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-[11px] text-[#6E5365] dark:text-[#B89BB0]">
                              {item.date}
                            </span>
                          </div>
                        )}

                        <p className="text-xs font-semibold text-[#9D174D] dark:text-[#F472B6]">
                          {item.category}
                        </p>
                        <h4 className="mt-1 font-display text-lg font-bold text-[#1D1119] dark:text-white">
                          {item.title}
                        </h4>
                        <p className="mt-1 text-xs font-medium text-[#5C4655] dark:text-[#C4AEBE]">
                          {item.organization}
                        </p>
                        <p className="mt-3 text-sm leading-relaxed text-[#4A2E41] dark:text-[#DFC8D7]">
                          {item.description}
                        </p>
                      </div>

                      <div className="mt-5 pt-4 border-t border-[#EFE6EC] dark:border-[#261530]">
                        {item.certificateUrl ? (
                          <a
                            href={item.certificateUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9D174D] dark:text-[#F472B6] hover:underline"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>View Certificate</span>
                          </a>
                        ) : (
                          <button
                            type="button"
                            onClick={() =>
                              handleOpenCertificate(item.certificateUrl, {
                                title: item.title,
                                organization: item.organization,
                                date: item.date,
                                description: item.description,
                              })
                            }
                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#9D174D] dark:text-[#F472B6] hover:underline"
                          >
                            <ExternalLink className="w-3.5 h-3.5" />
                            <span>Certificate Link Placeholder</span>
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ================================================================
            8. CONTACT ME SECTION
           ================================================================ */}
        <ContactSection />
      </main>

      {/* ================================================================
          9. FOOTER
         ================================================================ */}
      <footer className="relative z-10 border-t border-[#E5D5DF] dark:border-[#24132D] bg-[#F5EEF2] dark:bg-[#060309] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left space-y-1">
            <p className="text-sm font-medium text-[#1D1119] dark:text-white flex items-center justify-center sm:justify-start gap-1.5">
              <span>Designed &amp; Built with</span>
              <Heart className="w-4 h-4 text-[#EC4899] fill-[#EC4899]" aria-label="love" />
              <span>by Mukta Kolhe</span>
            </p>
            <p className="text-xs text-[#6E5365] dark:text-[#B89BB0] font-mono tabular-nums">
              © {currentYear} Mukta Kolhe. All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE_DATA.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#E5D5DF] dark:border-[#301B3B] bg-white dark:bg-[#130A1A] text-[#3A2232] dark:text-[#E5D3DF] hover:border-[#EC4899] hover:text-[#9D174D] dark:hover:text-[#F472B6] transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PROFILE_DATA.contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#E5D5DF] dark:border-[#301B3B] bg-white dark:bg-[#130A1A] text-[#3A2232] dark:text-[#E5D3DF] hover:border-[#EC4899] hover:text-[#9D174D] dark:hover:text-[#F472B6] transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PROFILE_DATA.contact.email}`}
              aria-label="Send Email"
              className="w-10 h-10 rounded-lg flex items-center justify-center border border-[#E5D5DF] dark:border-[#301B3B] bg-white dark:bg-[#130A1A] text-[#3A2232] dark:text-[#E5D3DF] hover:border-[#EC4899] hover:text-[#9D174D] dark:hover:text-[#F472B6] transition-colors"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="ml-2 inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-lg text-xs font-semibold border border-[#E5D5DF] dark:border-[#301B3B] bg-white dark:bg-[#130A1A] text-[#1D1119] dark:text-white hover:border-[#EC4899] transition-colors whitespace-nowrap shrink-0"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </footer>

      {/* Modals for Project Details & Certificate Placeholders */}
      <ProjectModal
        project={selectedProject}
        linkNotice={projectLinkNotice}
        onClose={() => {
          setSelectedProject(null);
          setProjectLinkNotice(null);
        }}
      />
      <CertificateModal
        info={certificateModalInfo}
        onClose={() => setCertificateModalInfo(null)}
      />
    </div>
  );
}
