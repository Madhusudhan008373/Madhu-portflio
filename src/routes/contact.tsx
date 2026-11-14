import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Phone,
  Mail,
  MapPin,
  Copy,
  Check,
  Send,
  ArrowRight,
  ArrowLeft,
  GraduationCap,
  Sparkles,
  Zap,
  Clock,
  ShieldCheck,
} from "lucide-react";
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
    // Simulate sending message / trigger mailto fallback
    setFormSubmitted(true);
  };

  return (
    <PageLayout
      badge="Get in Touch"
      title="Contact CH Madhusudhan"
      subtitle="Feel free to connect directly via phone or email for internship placements, apprenticeship roles, or technical discussions in the electrical field."
    >
      <div className="space-y-12">
        {/* Direct Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Phone Card */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-cyan-500/30 bg-[#0c1424]/90 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-400">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-cyan-500/10 border border-cyan-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Call & WhatsApp
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Phone className="h-6 w-6" />
                </div>
              </div>

              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Direct Phone
              </h2>
              <p className="mt-2 font-display text-2xl font-bold text-white tracking-tight">
                6302657026
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Available for phone discussions, interviews, and direct communication.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-slate-800">
              <Button
                asChild
                className="flex-1 bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400"
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
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {copiedPhone ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Email Card */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-cyan-500/30 bg-[#0c1424]/90 p-8 shadow-[0_15px_40px_rgba(0,0,0,0.5)] transition-all duration-300 hover:border-cyan-400">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-cyan-500/10 border border-cyan-400/30 px-3 py-1 text-xs font-bold uppercase tracking-wider text-cyan-300">
                  Email
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                  <Mail className="h-6 w-6" />
                </div>
              </div>

              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Email Address
              </h2>
              <p className="mt-2 font-display text-lg sm:text-xl font-bold text-white break-all tracking-tight">
                chitadamadhusudhan@gmail.com
              </p>
              <p className="mt-2 text-xs text-slate-400">
                Send official inquiries, job details, or internship opportunities anytime.
              </p>
            </div>

            <div className="mt-8 flex items-center gap-3 pt-6 border-t border-slate-800">
              <Button
                asChild
                className="flex-1 bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400"
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
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
              >
                {copiedEmail ? (
                  <Check className="h-4 w-4 text-emerald-400" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>

          {/* Academic Base / Location Card */}
          <div className="group relative flex flex-col justify-between rounded-3xl border border-slate-800 bg-[#0a0f1c]/80 p-8 transition-all duration-300 hover:border-cyan-500/40 md:col-span-2 lg:col-span-1">
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="rounded-full bg-slate-900 border border-slate-800 px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-300">
                  Location & Campus
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 border border-slate-800 text-cyan-400">
                  <MapPin className="h-6 w-6" />
                </div>
              </div>

              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Academic Base
              </h2>
              <p className="mt-2 font-display text-xl font-bold text-white">
                Government Polytechnic College
              </p>
              <p className="mt-1 text-sm text-cyan-300">Pendurthi, Andhra Pradesh</p>
              <p className="mt-3 text-xs text-slate-400">
                Schooling from GVMC High School, Madhavadhara (86%).
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <div className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400">
                <Clock className="h-3.5 w-3.5 text-cyan-400" />
                <span>IST (Indian Standard Time)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form & Profile Summary Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Quick Message Form */}
          <div className="lg:col-span-7 rounded-3xl border border-slate-800 bg-[#0a0f1c]/90 p-8 sm:p-10">
            <div className="mb-6 space-y-1">
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                <Send className="h-3.5 w-3.5 text-cyan-400" />
                Direct Inquiry
              </span>
              <h3 className="font-display text-2xl font-bold text-white">Send a Message</h3>
              <p className="text-xs text-slate-400">
                Have an inquiry or opportunity? Fill out the details below.
              </p>
            </div>

            {formSubmitted ? (
              <div className="rounded-2xl border border-cyan-500/30 bg-cyan-950/20 p-8 text-center space-y-4 animate-in fade-in zoom-in-95 duration-300">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/40">
                  <Check className="h-7 w-7" />
                </div>
                <h4 className="font-display text-xl font-bold text-white">
                  Thank You for Reaching Out!
                </h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto">
                  Your message has been formatted. You can also reach CH Madhusudhan directly at{" "}
                  <strong className="text-cyan-300 font-bold">6302657026</strong> or{" "}
                  <strong className="text-cyan-300 font-bold">chitadamadhusudhan@gmail.com</strong>.
                </p>
                <div className="pt-2">
                  <Button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    variant="outline"
                    className="border-slate-800 text-slate-200 text-xs uppercase font-bold tracking-wider hover:border-cyan-400"
                  >
                    Send Another Message
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="name"
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      Your Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label
                      htmlFor="email"
                      className="text-xs font-bold uppercase tracking-wider text-slate-400"
                    >
                      Your Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      placeholder="e.g. name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="subject"
                    className="text-xs font-bold uppercase tracking-wider text-slate-400"
                  >
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    required
                    placeholder="e.g. Internship Opportunity in Electrical Engineering"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-bold uppercase tracking-wider text-slate-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    placeholder="Type your message or project details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-4 py-3 text-sm text-white placeholder-slate-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
                >
                  <Send className="mr-2 h-4 w-4" />
                  <span>Send Message</span>
                </Button>
              </form>
            )}
          </div>

          {/* Profile Overview Card */}
          <div className="lg:col-span-5 rounded-3xl border border-cyan-500/20 bg-[#0c1424]/90 p-8 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-cyan-400">
                Summary Profile
              </span>
              <h3 className="mt-1 font-display text-2xl font-bold text-white">CH Madhusudhan</h3>
              <p className="text-xs text-slate-400">
                Diploma in EEE • Government Polytechnic College, Pendurthi
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-500/20 bg-slate-900/60 p-4">
              <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 block mb-1">
                Career Objective
              </span>
              <p className="text-xs italic text-slate-200 leading-relaxed">
                &ldquo;To gain practical experience and improve my skills in the electrical
                field.&rdquo;
              </p>
            </div>

            <div className="space-y-3 border-t border-slate-800 pt-4 text-xs">
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Education</span>
                <span className="text-white font-bold text-right">Diploma EEE (Pursuing)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">SSC Score</span>
                <span className="text-cyan-300 font-bold text-right">86% (GVMC High School)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-slate-800/60">
                <span className="text-slate-400 font-medium">Technical Skills</span>
                <span className="text-white font-bold text-right">Safety • Motors • PLC</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-slate-400 font-medium">Strengths</span>
                <span className="text-white font-bold text-right">Learner • Team • Diligent</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 p-3.5">
                <ShieldCheck className="h-6 w-6 text-cyan-400 shrink-0" />
                <p className="text-[11px] text-slate-300 leading-tight">
                  Prompt communication guaranteed. Reach out via call or email for any verification.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-800">
          <Button
            asChild
            variant="outline"
            className="w-full sm:w-auto border-slate-800 bg-slate-900/70 text-slate-200 text-xs font-semibold uppercase tracking-wider hover:border-cyan-400 hover:text-cyan-300"
          >
            <Link to="/strengths">
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to Strengths</span>
            </Link>
          </Button>

          <Button
            asChild
            className="w-full sm:w-auto bg-cyan-500 text-slate-950 font-bold uppercase tracking-wider text-xs hover:bg-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          >
            <Link to="/">
              <span>Return to Home</span>
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageLayout>
  );
}
