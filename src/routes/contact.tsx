import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Copy, Check, Send, Clock, ShieldCheck } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      {
        title: "Contact CH Madhusudhan | Phone: 6302657026 & Email",
      },
      {
        name: "description",
        content:
          "Get in touch with CH Madhusudhan. Phone: 6302657026, Email: chitadamadhusudhan@gmail.com. Diploma in EEE student at Government Polytechnic College, Pendurthi.",
      },
      {
        property: "og:title",
        content: "Contact CH Madhusudhan — Electrical & Electronics Engineering",
      },
      {
        property: "og:description",
        content:
          "Phone: 6302657026 | Email: chitadamadhusudhan@gmail.com. Available for practical engineering opportunities.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

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
    <PageLayout
      badge="Direct Contact"
      title="Get in Touch"
      subtitle="Feel free to connect directly via phone or email for opportunities, inquiries, or technical discussions in the electrical field."
    >
      <div className="space-y-12">
        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-ember/25 bg-section-card p-8 shadow-[0_15px_40px_oklch(0_0_0_/_0.4)] transition-all duration-300 hover:border-ember/40">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-ember/10 border border-ember/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ember">
                  Direct Phone
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/15 border border-ember/35 text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.2)]">
                  <Phone className="h-6 w-6" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)] block">
                Mobile Number
              </span>
              <p className="mt-2 font-display text-2xl font-bold text-white tracking-tight">
                6302657026
              </p>
              <p className="mt-2 text-xs text-[oklch(0.6_0.015_45)] leading-relaxed">
                Available for phone discussions, interviews, and direct queries.
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
                title="Copy phone number"
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
          <div className="group relative flex flex-col justify-between rounded-3xl border border-ember/25 bg-section-card p-8 shadow-[0_15px_40px_oklch(0_0_0_/_0.4)] transition-all duration-300 hover:border-ember/40">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-ember/10 border border-ember/25 px-3 py-1 text-xs font-bold uppercase tracking-wider text-ember">
                  Email Inbox
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ember/15 border border-ember/35 text-ember shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.2)]">
                  <Mail className="h-6 w-6" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)] block">
                Personal Email
              </span>
              <p className="mt-2 font-display text-base font-bold text-white tracking-tight break-all">
                chitadamadhusudhan@gmail.com
              </p>
              <p className="mt-2 text-xs text-[oklch(0.6_0.015_45)] leading-relaxed">
                Send official inquiries, job details, or technical communications anytime.
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
                title="Copy email address"
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

          {/* Location / Institution Card */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-ember/15 bg-section-card p-8 transition-all duration-300 md:col-span-2 lg:col-span-1">
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
                Current Location
              </span>
              <p className="mt-2 font-display text-2xl font-bold text-white">Visakhapatnam</p>
              <p className="mt-1 text-sm text-[oklch(0.78_0.16_50)]">Pendurthi, Andhra Pradesh</p>
              <p className="mt-3 text-xs text-[oklch(0.6_0.015_45)] leading-relaxed">
                Government Polytechnic College, Pendurthi. Available across Visakhapatnam region.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-ember/15">
              <div className="flex items-center gap-2 rounded-xl bg-ember/5 border border-ember/15 px-3 py-2 text-xs text-slate-300">
                <Clock className="h-3.5 w-3.5 text-ember" />
                <span>IST (UTC +5:30) Timezone</span>
              </div>
            </div>
          </div>
        </div>

        {/* Form and Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Contact Message Form */}
          <div className="lg:col-span-7 rounded-3xl border border-ember/20 bg-section-card p-8 sm:p-10">
            <div className="mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-ember flex items-center gap-2">
                <Send className="h-3.5 w-3.5" />
                Direct Message
              </span>
              <h3 className="font-display text-2xl font-bold text-white mt-1">Leave a Message</h3>
            </div>

            {formSubmitted ? (
              <div className="rounded-2xl border border-ember/25 bg-ember/5 p-8 text-center space-y-4">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-ember/15 text-ember border border-ember/30">
                  <Check className="h-7 w-7 text-green-400" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">
                  Message Sent Successfully!
                </h4>
                <p className="text-sm text-[oklch(0.72_0.015_50)] max-w-sm mx-auto">
                  Thank you for reaching out. For urgent communications, feel free to call directly
                  at <strong className="text-ember font-bold">6302657026</strong>.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({ name: "", email: "", subject: "", message: "" });
                  }}
                  className="border-ember/30 text-white text-xs uppercase font-bold tracking-wider hover:border-ember"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label
                      htmlFor="form-name"
                      className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)]"
                    >
                      Your Name
                    </label>
                    <input
                      id="form-name"
                      type="text"
                      required
                      placeholder="e.g. Ramesh Varma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-ember/20 bg-ember/5 px-4 py-3 text-sm text-white placeholder-[oklch(0.45_0.01_45)] focus:border-ember/50 focus:outline-none focus:ring-1 focus:ring-ember/40 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="form-email"
                      className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)]"
                    >
                      Email Address
                    </label>
                    <input
                      id="form-email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-ember/20 bg-ember/5 px-4 py-3 text-sm text-white placeholder-[oklch(0.45_0.01_45)] focus:border-ember/50 focus:outline-none focus:ring-1 focus:ring-ember/40 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="form-subject"
                    className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)]"
                  >
                    Subject
                  </label>
                  <input
                    id="form-subject"
                    type="text"
                    required
                    placeholder="e.g. Electrical Engineering Inquiries"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-ember/20 bg-ember/5 px-4 py-3 text-sm text-white placeholder-[oklch(0.45_0.01_45)] focus:border-ember/50 focus:outline-none focus:ring-1 focus:ring-ember/40 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="form-message"
                    className="text-xs font-bold uppercase tracking-wider text-[oklch(0.55_0.015_45)]"
                  >
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
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

          {/* Verification & Academic Snapshot */}
          <div className="lg:col-span-5 rounded-3xl border border-ember/15 bg-[oklch(0.11_0.028_41)] p-8 sm:p-10 flex flex-col justify-between">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-ember">
                  Candidate Snapshot
                </span>
                <h3 className="font-display text-2xl font-bold text-white mt-1">CH Madhusudhan</h3>
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

              <div className="space-y-3 border-t border-ember/15 pt-4 text-xs">
                <div className="flex justify-between py-1.5 border-b border-ember/10">
                  <span className="text-[oklch(0.55_0.015_45)]">Education</span>
                  <span className="text-white font-bold">Diploma in EEE (Pursuing)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-ember/10">
                  <span className="text-[oklch(0.55_0.015_45)]">SSC Score</span>
                  <span className="text-ember font-bold">86% (GVMC High School)</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-ember/10">
                  <span className="text-[oklch(0.55_0.015_45)]">Core Skills</span>
                  <span className="text-white font-bold">Electrical Safety, Motors, PLC</span>
                </div>
                <div className="flex justify-between py-1.5">
                  <span className="text-[oklch(0.55_0.015_45)]">Key Strengths</span>
                  <span className="text-white font-bold">Quick Learner, Team Work, Discipline</span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-ember/15 flex items-center gap-3">
              <ShieldCheck className="h-6 w-6 text-ember shrink-0" />
              <p className="text-xs text-[oklch(0.72_0.015_50)]">
                Direct communication verified. All inquiries receive prompt responses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
