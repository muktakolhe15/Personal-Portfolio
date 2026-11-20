import React, { useState } from 'react';
import { Mail, Github, Linkedin, Send, AlertCircle, CheckCircle2, ExternalLink } from 'lucide-react';
import { PROFILE_DATA } from '../data/portfolioData';

interface FormErrors {
  fullName?: string;
  email?: string;
  subject?: string;
  message?: string;
}

export const ContactSection: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [validatedPayload, setValidatedPayload] = useState<{
    fullName: string;
    email: string;
    subject: string;
    message: string;
  } | null>(null);

  const validate = (): FormErrors => {
    const nextErrors: FormErrors = {};
    if (!fullName.trim() || fullName.trim().length < 2) {
      nextErrors.fullName = 'Please enter your full name (at least 2 characters).';
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailPattern.test(email.trim())) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!subject.trim() || subject.trim().length < 3) {
      nextErrors.subject = 'Please enter a short subject (at least 3 characters).';
    }
    if (!message.trim() || message.trim().length < 10) {
      nextErrors.message = 'Please write a message of at least 10 characters.';
    }
    return nextErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setValidatedPayload(null);
      return;
    }

    setValidatedPayload({
      fullName: fullName.trim(),
      email: email.trim(),
      subject: subject.trim(),
      message: message.trim(),
    });
  };

  const buildMailtoHref = () => {
    if (!validatedPayload) return `mailto:${PROFILE_DATA.contact.email}`;
    const bodyText = `Name: ${validatedPayload.fullName}\nReply-To: ${validatedPayload.email}\n\n${validatedPayload.message}`;
    return `mailto:${PROFILE_DATA.contact.email}?subject=${encodeURIComponent(
      validatedPayload.subject
    )}&body=${encodeURIComponent(bodyText)}`;
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-20 sm:py-24 border-t border-[#E5D5DF] dark:border-[#24132D]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <p className="text-xs font-mono tracking-wide text-[#9D174D] dark:text-[#F472B6]">
                Get In Touch
              </p>
              <h2
                id="contact-heading"
                className="mt-2 font-display text-3xl sm:text-4xl font-bold tracking-tight text-[#1D1119] dark:text-white text-balance"
              >
                Let&apos;s Connect!
              </h2>
              <p className="mt-4 text-base leading-relaxed text-[#4A2E41] dark:text-[#DFC8D7]">
                I&apos;m always interested in connecting with people, exploring opportunities,
                collaborating on projects, and learning new things. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <a
                href={`mailto:${PROFILE_DATA.contact.email}`}
                className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] hover:border-[#EC4899]/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#9D174D]/12 border border-[#EC4899]/25 flex items-center justify-center text-[#9D174D] dark:text-[#F472B6] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs text-[#6E5365] dark:text-[#B89BB0]">Email</span>
                  <span className="block text-sm font-semibold text-[#1D1119] dark:text-white truncate group-hover:text-[#9D174D] dark:group-hover:text-[#F472B6] transition-colors">
                    {PROFILE_DATA.contact.email}
                  </span>
                </div>
              </a>

              <a
                href={PROFILE_DATA.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] hover:border-[#EC4899]/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#9D174D]/12 border border-[#EC4899]/25 flex items-center justify-center text-[#9D174D] dark:text-[#F472B6] shrink-0">
                  <Github className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs text-[#6E5365] dark:text-[#B89BB0]">GitHub</span>
                  <span className="block text-sm font-semibold text-[#1D1119] dark:text-white truncate group-hover:text-[#9D174D] dark:group-hover:text-[#F472B6] transition-colors">
                    github.com/muktakolhe15
                  </span>
                </div>
              </a>

              <a
                href={PROFILE_DATA.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] hover:border-[#EC4899]/60 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[#9D174D]/12 border border-[#EC4899]/25 flex items-center justify-center text-[#9D174D] dark:text-[#F472B6] shrink-0">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div className="min-w-0">
                  <span className="block text-xs text-[#6E5365] dark:text-[#B89BB0]">LinkedIn</span>
                  <span className="block text-sm font-semibold text-[#1D1119] dark:text-white truncate group-hover:text-[#9D174D] dark:group-hover:text-[#F472B6] transition-colors">
                    linkedin.com/in/mukta-kolhe
                  </span>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-2xl bg-white dark:bg-[#130A1A] border border-[#E5D5DF] dark:border-[#301B3B] p-6 sm:p-8 shadow-sm space-y-5"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block text-sm font-medium text-[#1D1119] dark:text-[#F3E5EE] mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={fullName}
                    onChange={(e) => {
                      setFullName(e.target.value);
                      if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: undefined }));
                    }}
                    placeholder="Your full name"
                    aria-invalid={Boolean(errors.fullName)}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#FAF7F9] dark:bg-[#0A050E] border border-[#DFC9D7] dark:border-[#3A2245] text-[#1D1119] dark:text-white placeholder:text-[#8E7385] focus:outline-none focus:ring-2 focus:ring-[#EC4899] focus:border-transparent"
                  />
                  {errors.fullName && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.fullName}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-[#1D1119] dark:text-[#F3E5EE] mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (errors.email) setErrors((prev) => ({ ...prev, email: undefined }));
                    }}
                    placeholder="you@example.com"
                    aria-invalid={Boolean(errors.email)}
                    className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#FAF7F9] dark:bg-[#0A050E] border border-[#DFC9D7] dark:border-[#3A2245] text-[#1D1119] dark:text-white placeholder:text-[#8E7385] focus:outline-none focus:ring-2 focus:ring-[#EC4899] focus:border-transparent"
                  />
                  {errors.email && (
                    <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400">
                      <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                      <span>{errors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact-subject"
                  className="block text-sm font-medium text-[#1D1119] dark:text-[#F3E5EE] mb-1.5"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  value={subject}
                  onChange={(e) => {
                    setSubject(e.target.value);
                    if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
                  }}
                  placeholder="Internship opportunity, collaboration, or inquiry"
                  aria-invalid={Boolean(errors.subject)}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#FAF7F9] dark:bg-[#0A050E] border border-[#DFC9D7] dark:border-[#3A2245] text-[#1D1119] dark:text-white placeholder:text-[#8E7385] focus:outline-none focus:ring-2 focus:ring-[#EC4899] focus:border-transparent"
                />
                {errors.subject && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.subject}</span>
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-[#1D1119] dark:text-[#F3E5EE] mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  value={message}
                  onChange={(e) => {
                    setMessage(e.target.value);
                    if (errors.message) setErrors((prev) => ({ ...prev, message: undefined }));
                  }}
                  placeholder="Write your message here..."
                  aria-invalid={Boolean(errors.message)}
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#FAF7F9] dark:bg-[#0A050E] border border-[#DFC9D7] dark:border-[#3A2245] text-[#1D1119] dark:text-white placeholder:text-[#8E7385] focus:outline-none focus:ring-2 focus:ring-[#EC4899] focus:border-transparent resize-y"
                />
                {errors.message && (
                  <p className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-600 dark:text-rose-400">
                    <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                    <span>{errors.message}</span>
                  </p>
                )}
              </div>

              <div className="pt-1 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-[#831843] via-[#9D174D] to-[#DB2777] hover:brightness-110 transition-all duration-150 shadow-sm shadow-[#9D174D]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#EC4899]"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
                <span className="text-xs text-[#6E5365] dark:text-[#B89BB0]">
                  Client-side validation · Direct email compose ready
                </span>
              </div>

              {validatedPayload && (
                <div
                  role="status"
                  className="mt-4 rounded-xl border border-emerald-500/40 bg-emerald-500/10 p-4 text-sm text-[#1D1119] dark:text-[#F3E5EE]"
                >
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div className="space-y-2">
                      <p className="font-semibold">
                        Message validated! No backend email server is configured on this static
                        portfolio yet.
                      </p>
                      <p className="text-xs text-[#4A2E41] dark:text-[#DFC8D7]">
                        Click below to send your pre-filled message directly via your email
                        application to{' '}
                        <span className="font-mono">{PROFILE_DATA.contact.email}</span>.
                      </p>
                      <a
                        href={buildMailtoHref()}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-[#9D174D] hover:bg-[#831843] transition-colors"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Open in Email App</span>
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
