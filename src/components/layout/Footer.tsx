import { Link } from "@tanstack/react-router";
import { Phone, Mail, ArrowUpRight, Zap, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-16 border-t border-ember/15 bg-[oklch(0.08_0.02_40)] text-[oklch(0.75_0.015_50)]">
      {/* Decorative top accent */}
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-ember/50 to-transparent" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Identity & Career Objective */}
          <div className="space-y-4 lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ember/10 border border-ember/35 text-ember font-display text-lg font-bold shadow-[0_0_15px_oklch(0.69_0.21_45_/_0.25)]">
                M
              </span>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                CH Madhusudhan
              </span>
            </Link>
            <p className="max-w-md text-sm leading-relaxed text-[oklch(0.62_0.015_45)]">
              Pursuing Diploma in Electrical &amp; Electronics Engineering (EEE) at Government
              Polytechnic College, Pendurthi. Passionate about practical engineering, workplace
              safety, motor systems, and industrial automation.
            </p>
            <div className="rounded-xl border border-ember/20 bg-ember/5 p-4 backdrop-blur-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-ember flex items-center gap-1.5 mb-1.5">
                <Zap className="h-3.5 w-3.5" />
                Career Objective
              </p>
              <p className="text-sm italic text-[oklch(0.85_0.015_50)]">
                &ldquo;To gain practical experience and improve my skills in the electrical
                field.&rdquo;
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Navigation
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "Home", href: "/" },
                { name: "About Me", href: "/#about" },
                { name: "Education", href: "/#education" },
                { name: "Technical Skills", href: "/#skills" },
                { name: "Personal Strengths", href: "/#strengths" },
                { name: "Contact", href: "/#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1.5 text-[oklch(0.6_0.015_45)] transition-colors hover:text-ember"
                  >
                    <span className="h-1 w-1 rounded-full bg-ember/40 opacity-0 transition-all group-hover:opacity-100" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-4">
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-white">
              Direct Contact
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:6302657026"
                  className="group flex items-start gap-3 text-[oklch(0.6_0.015_45)] hover:text-ember transition-colors"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ember/8 border border-ember/20 text-ember group-hover:border-ember/40">
                    <Phone className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[oklch(0.45_0.01_40)]">
                      Phone Number
                    </span>
                    <span className="font-medium text-[oklch(0.82_0.015_50)] group-hover:text-ember">
                      +91 6302657026
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:chitadamadhusudhan@gmail.com"
                  className="group flex items-start gap-3 text-[oklch(0.6_0.015_45)] hover:text-ember transition-colors"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ember/8 border border-ember/20 text-ember group-hover:border-ember/40">
                    <Mail className="h-4 w-4" />
                  </span>
                  <div>
                    <span className="block text-[11px] uppercase tracking-wider text-[oklch(0.45_0.01_40)]">
                      Email Address
                    </span>
                    <span className="font-medium text-[oklch(0.82_0.015_50)] group-hover:text-ember break-all">
                      chitadamadhusudhan@gmail.com
                    </span>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-ember/8 border border-ember/20 text-ember">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <span className="block text-[11px] uppercase tracking-wider text-[oklch(0.45_0.01_40)]">
                    Location
                  </span>
                  <span className="font-medium text-[oklch(0.82_0.015_50)]">Visakhapatnam, AP</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-ember/12 pt-8 text-xs sm:flex-row">
          <p className="text-[oklch(0.5_0.01_40)]">
            © {new Date().getFullYear()} CH Madhusudhan. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/#about"
              className="inline-flex items-center gap-1 text-[oklch(0.55_0.015_45)] hover:text-ember transition-colors"
            >
              Back to Top
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
