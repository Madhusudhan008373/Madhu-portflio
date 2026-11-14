import { useState } from "react";
import { Phone, Mail, MapPin, Copy, Check, Send, ShieldCheck, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ContactSection() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });

  const handleCopyPhone = () => {
    navigator.clipboard.writeText("6302657026");
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("chitadamadhusudhan@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative scroll-mt-24 px-6 py-24 sm:px-10 lg:px-16 xl:px-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-0 bottom-0 h-96 w-96 rounded-full bg-ember/5 blur-[120px]" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-ember-mid/4 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-ember/30 bg-ember/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.15)] mb-4">
            <Phone className="h-3.5 w-3.5" />
            Direct Contact
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white">
            Get in <span className="text-ember">Touch</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-[oklch(0.75_0.015_50)]">
            Reach out directly for internships, apprenticeship opportunities, or professional
            queries in the electrical engineering field.
          </p>
        </div>

        {/* Top 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {/* Phone Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-ember/25 bg-section-card p-8 shadow-[0_15px_40px_oklch(0_0_0_/_0.4)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-ember/10 border border-ember/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ember">
                  Phone
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/15 border border-ember/35 text-ember">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)] block">
                Direct Contact
              </span>
              <p className="mt-2 font-display text-2xl font-bold text-white tracking-tight">
                6302657026
              </p>
              <p className="mt-2 text-xs text-[oklch(0.6_0.015_45)]">
                Available for phone discussions and interviews.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-ember/15">
              <Button
                asChild
                className="flex-1 bg-ember text-white font-bold uppercase tracking-wider text-xs hover:bg-ember-mid shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.4)]"
              >
                <a href="tel:6302657026">
                  <Phone className="mr-2 h-3.5 w-3.5" />
                  <span>Call Now</span>
                </a>
              </Button>
              <button
                type="button"
                onClick={handleCopyPhone}
                title="Copy phone"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ember/20 bg-ember/5 text-[oklch(0.72_0.08_50)] hover:border-ember/40 hover:text-ember transition-colors"
              >
                {copiedPhone ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-ember/25 bg-section-card p-8 shadow-[0_15px_40px_oklch(0_0_0_/_0.4)]">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-ember/10 border border-ember/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ember">
                  Email
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/15 border border-ember/35 text-ember">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)] block">
                Email Address
              </span>
              <p className="mt-2 font-display text-base font-bold text-white tracking-tight break-all">
                chitadamadhusudhan@gmail.com
              </p>
              <p className="mt-2 text-xs text-[oklch(0.6_0.015_45)]">
                For formal queries, internship applications, and project inquiries.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-ember/15">
              <Button
                asChild
                className="flex-1 bg-ember text-white font-bold uppercase tracking-wider text-xs hover:bg-ember-mid shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.4)]"
              >
                <a href="mailto:chitadamadhusudhan@gmail.com">
                  <Mail className="mr-2 h-3.5 w-3.5" />
                  <span>Send Email</span>
                </a>
              </Button>
              <button
                type="button"
                onClick={handleCopyEmail}
                title="Copy email"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-ember/20 bg-ember/5 text-[oklch(0.72_0.08_50)] hover:border-ember/40 hover:text-ember transition-colors"
              >
                {copiedEmail ? (
                  <Check className="h-4 w-4 text-green-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Location Card */}
          <div className="flex flex-col justify-between rounded-3xl border border-ember/15 bg-section-card p-8 md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-ember/8 border border-ember/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[oklch(0.78_0.16_50)]">
                  Location
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/10 border border-ember/25 text-ember">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)] block">
                Based In
              </span>
              <p className="mt-2 font-display text-2xl font-bold text-white">Visakhapatnam</p>
              <p className="mt-1 text-sm text-[oklch(0.65_0.015_45)]">Andhra Pradesh, India</p>
              <p className="mt-3 text-xs text-[oklch(0.6_0.015_45)]">
                Open to opportunities in Visakhapatnam and nearby industrial zones.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-ember/15">
              <div className="flex items-center gap-2.5 rounded-xl bg-ember/5 border border-ember/15 px-3.5 py-3">
                <Clock className="h-4 w-4 text-ember shrink-0" />
                <span className="text-xs text-[oklch(0.72_0.08_50)]">
                  IST (UTC +5:30) — Available Mon–Sat
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form + Profile Summary */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 rounded-3xl border border-ember/20 bg-section-card p-8">
            {formSubmitted ? (
              <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-ember/15 border border-ember/30 text-ember">
                  <Check className="h-8 w-8" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-sm text-[oklch(0.68_0.015_45)] max-w-xs">
                  Thank you for reaching out. I will get back to you as soon as possible.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="mt-4 text-xs font-bold uppercase tracking-wider text-ember hover:text-[oklch(0.78_0.16_50)] transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <h3 className="font-display text-xl font-bold text-white mb-6">Send a Message</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="hp-name"
                      className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)]"
                    >
                      Your Name
                    </label>
                    <input
                      id="hp-name"
                      type="text"
                      required
                      placeholder="e.g. Ravi Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-ember/20 bg-ember/5 px-4 py-3 text-sm text-white placeholder-[oklch(0.45_0.01_45)] focus:border-ember/50 focus:outline-none focus:ring-1 focus:ring-ember/40 transition-colors"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="hp-email"
                      className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)]"
                    >
                      Email Address
                    </label>
                    <input
                      id="hp-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-ember/20 bg-ember/5 px-4 py-3 text-sm text-white placeholder-[oklch(0.45_0.01_45)] focus:border-ember/50 focus:outline-none focus:ring-1 focus:ring-ember/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="hp-subject"
                    className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)]"
                  >
                    Subject
                  </label>
                  <input
                    id="hp-subject"
                    type="text"
                    required
                    placeholder="e.g. Internship Placement in Electrical Engineering"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-ember/20 bg-ember/5 px-4 py-3 text-sm text-white placeholder-[oklch(0.45_0.01_45)] focus:border-ember/50 focus:outline-none focus:ring-1 focus:ring-ember/40 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="hp-message"
                    className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="hp-message"
                    rows={4}
                    required
                    placeholder="Type your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-ember/20 bg-ember/5 px-4 py-3 text-sm text-white placeholder-[oklch(0.45_0.01_45)] focus:border-ember/50 focus:outline-none focus:ring-1 focus:ring-ember/40 transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-ember text-white font-bold uppercase tracking-wider text-xs hover:bg-ember-mid shadow-[0_0_20px_oklch(0.69_0.21_45_/_0.4)]"
                >
                  <Send className="mr-2 h-4 w-4" />
                  <span>Send Message</span>
                </Button>
              </form>
            )}
          </div>

          {/* Profile Summary Sidebar */}
          <div className="lg:col-span-5 rounded-3xl border border-ember/15 bg-[oklch(0.11_0.028_41)] p-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-ember">
                Summary Profile
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-white">CH Madhusudhan</h3>
              <p className="text-xs text-[oklch(0.6_0.015_45)]">
                Government Polytechnic College, Pendurthi
              </p>
            </div>

            <div className="rounded-2xl border border-ember/20 bg-ember/5 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-ember block mb-1">
                Career Objective
              </span>
              <p className="text-xs italic text-[oklch(0.85_0.015_50)] leading-relaxed">
                &ldquo;To gain practical experience and improve my skills in the electrical
                field.&rdquo;
              </p>
            </div>

            <div className="space-y-2.5 border-t border-ember/15 pt-4 text-xs">
              {[
                { label: "Diploma", value: "EEE (Pursuing)", highlight: false },
                { label: "SSC Score", value: "86% (GVMC High School)", highlight: true },
                { label: "Skills", value: "Safety • Motors • PLC", highlight: false },
                { label: "Strengths", value: "Learner • Team • Diligent", highlight: false },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex justify-between py-1.5 border-b border-ember/10"
                >
                  <span className="text-[oklch(0.55_0.015_45)]">{row.label}</span>
                  <span className={row.highlight ? "text-ember font-bold" : "text-white font-bold"}>
                    {row.value}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-ember/8 border border-ember/20 p-3.5">
              <ShieldCheck className="h-6 w-6 text-ember shrink-0" />
              <p className="text-[11px] text-[oklch(0.72_0.015_50)] leading-tight">
                Prompt response guaranteed. Reach out via call or email for any verification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
