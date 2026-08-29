import Image from "next/image";

/* Standard nyc.gov footer link groups */
const FOOTER_COLUMNS = [
  [
    { label: "nyc.gov home", href: "https://www.nyc.gov/main" },
    { label: "Services", href: "https://www.nyc.gov/main/services" },
    { label: "Events", href: "https://www.nyc.gov/main/events" },
    { label: "Office of the Mayor", href: "https://www.nyc.gov/mayors-office" },
    { label: "Your government", href: "https://www.nyc.gov/main/your-government" },
  ],
  [
    { label: "311", href: "https://portal.311.nyc.gov/" },
    {
      label: "Contact NYC government",
      href: "https://www.nyc.gov/main/your-government/contact-nyc-government",
    },
    { label: "Register to vote", href: "https://www.nycvotes.org/" },
    { label: "Emergency alerts", href: "https://a858-nycnotify.nyc.gov/notifynyc/" },
    { label: "Jobs", href: "https://cityjobs.nyc.gov/" },
  ],
  [
    { label: "Website feedback", href: "https://www.nyc.gov/main/forms/website-feedback" },
    {
      label: "Accessibility resources",
      href: "https://www.nyc.gov/site/mopd/initiatives/digital-accessibility.page",
    },
    { label: "Privacy policy", href: "https://www.nyc.gov/main/nyc-gov-privacy-policy" },
    { label: "Terms of use", href: "https://www.nyc.gov/main/terms-of-use" },
    { label: "About nyc.gov content", href: "https://www.nyc.gov/main/about-our-content" },
  ],
];

export function SiteHeader({ title }: { title?: string }) {
  return (
    <header className="bg-[var(--nyc-black)]">
      <div className="max-w-[1200px] mx-auto px-6 py-3 flex items-center gap-4">
        <a href="https://www.nyc.gov/main" aria-label="NYC.gov home" className="flex-none">
          {/* Official white NYC logo (public/nyc_logo.png), transparent padding
              trimmed into nyc_logo_trimmed.png so it sizes cleanly. */}
          <Image src="/nyc_logo_trimmed.png" alt="" width={78} height={26} priority />
        </a>
        {title && (
          <span className="text-white font-bold text-[1.05rem] leading-none">{title}</span>
        )}
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-[var(--nyc-black)] text-white mt-auto">
      <div className="max-w-[1200px] mx-auto px-6 py-12 flex flex-col lg:flex-row gap-10 lg:gap-20">
        <span className="font-bold text-[1rem] whitespace-nowrap">More on nyc.gov</span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 flex-1">
          {FOOTER_COLUMNS.map((column, i) => (
            <ul key={i} className="flex flex-col gap-3">
              {column.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-[0.8rem] font-semibold text-white hover:underline"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>
      <div className="border-t border-white/15">
        <p className="max-w-[1200px] mx-auto px-6 py-4 text-[0.75rem] text-[var(--gray-70)]">
          © City of New York. 2026 All Rights Reserved. NYC is a trademark and service
          mark of the City of New York.
        </p>
      </div>
    </footer>
  );
}
