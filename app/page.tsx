import Image from "next/image";
import Link from "next/link";
import { SiteHeader, SiteFooter } from "./components/site";

const HPD = "https://www.nyc.gov/site/hpd";

const displayFont = "font-[family-name:var(--font-display)]";

/* Quick links shown in the hero card */
const QUICK_LINKS = [
  {
    label: "Tenant Rights",
    href: `${HPD}/services-and-information/tenants-rights.page`,
    icon: <ScalesIcon />,
  },
  {
    label: "Eviction Resources",
    href: `${HPD}/services-and-information/eviction-prevention.page`,
    icon: <HouseIcon />,
  },
  {
    label: "Find Housing",
    href: `${HPD}/services-and-information/find-affordable-housing.page`,
    icon: <BuildingIcon />,
  },
];

/* Service tiles — titles, copy, and URLs mirror nyc.gov/site/hpd/index.page */
const SERVICES = [
  {
    title: "Find Affordable Housing",
    description: "City-sponsored rental and homeownership opportunities.",
    href: `${HPD}/services-and-information/find-affordable-housing.page`,
  },
  {
    title: "Report a Complaint",
    description: "Issues related to, safety, harassment, and discrimination.",
    href: `${HPD}/services-and-information/report-a-housing-complaint.page`,
  },
  {
    title: "Learn about Safety",
    description: "Maintenance requirements for heat, hot water, lead, and other issues.",
    href: `${HPD}/services-and-information/housing-quality-and-safety.page`,
  },
  {
    title: "Find Building Data",
    description: "Search HPDOnline for complaints, violations, and more.",
    href: `${HPD}/about/hpd-online.page`,
  },
  {
    title: "Get Help Paying",
    description: "Rental and down-payment assistance.",
    href: `${HPD}/services-and-information/rental-and-downpayment-assistance.page`,
  },
  {
    title: "Know Your Rights",
    description: "Tenants' rights and responsibilities.",
    href: `${HPD}/services-and-information/tenants-rights-and-responsibilities.page`,
  },
  {
    title: "Register Your Property",
    description: "Property owners are required to register annually with HPD.",
    href: `${HPD}/services-and-information/register-your-property.page`,
  },
  {
    title: "Preserve Housing",
    description: "Home repair loans and preservation financing.",
    href: `${HPD}/services-and-information/home-repair-and-preservation-financing.page`,
  },
  {
    title: "Develop Housing",
    description: "Financing programs for new construction.",
    href: `${HPD}/services-and-information/new-construction-financing.page`,
  },
  {
    title: "Access Section 8 Info",
    description: "Resources for tenants and property owners.",
    href: `${HPD}/services-and-information/section-8.page`,
  },
  {
    title: "Do Business with HPD",
    description: "Requests for Proposals, Qualifications, and contracts.",
    href: `${HPD}/services-and-information/contract-opportunities.page`,
  },
  {
    title: "Plan Your Neighborhood",
    description: "Citywide initiatives, neighborhood focus areas, and planning.",
    href: `${HPD}/services-and-information/neighborhood-planning.page`,
  },
];

const PROGRAMS = [
  {
    title: "Find Housing Resources",
    description:
      "The City has many resources to help you find a safe and affordable place to live.",
    href: "/housingportal",
    image: "/nyc_housing_resource_portal.png",
    alt: "Logo for the NYC Housing Resource Portal",
  },
  {
    title: "NYC Tenant Resource Portal",
    description:
      "An online resource to help renters access resources to prevent evictions and remain stably housed.",
    href: "https://www.nyc.gov/content/tenantresourceportal/pages/",
    image: "/nyc_tenant_resource_portal.png",
    alt: "Cover image for the NYC Tenant Resource Portal",
  },
  {
    title: "NYC Housing Connect",
    description: "Find and apply for affordable housing.",
    href: "https://housingconnect.nyc.gov/PublicWeb/",
    image: "/nyc_housing_connect.png",
    alt: "Logo for NYC Housing Connect",
  },
];

export default function Home() {
  return (
    <div id="top" className="flex flex-col flex-1 bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-white focus:text-[var(--blue-40)] focus:px-4 focus:py-2 focus:rounded-md font-semibold"
      >
        Skip to main content
      </a>

      <SiteHeader />

      <main id="main" className="flex-1">
        {/* Hero */}
        <section className="relative">
          <div className="relative h-[280px] sm:h-[360px] lg:h-[440px]">
            <Image
              src="/find_housing_help_image.png"
              alt="Brownstone apartment buildings in a New York City neighborhood"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20" aria-hidden="true" />
            <div className="absolute inset-0">
              <div className="max-w-[1200px] mx-auto px-6 h-full flex items-center">
                <h1
                  className={`${displayFont} text-white font-semibold text-[2.5rem] sm:text-[3.25rem] lg:text-[4rem] leading-[1.1] [text-shadow:0_2px_12px_rgba(0,0,0,0.45)]`}
                >
                  Find housing help
                </h1>
              </div>
            </div>
          </div>

          {/* Quick Links card */}
          <div className="max-w-[1200px] mx-auto px-6 lg:px-0 lg:absolute lg:inset-0 lg:pointer-events-none">
            <div className="lg:max-w-[1200px] lg:mx-auto lg:px-6 lg:h-full lg:flex lg:items-center lg:justify-end">
              <div className="pointer-events-auto bg-white rounded-3xl shadow-[var(--card-shadow)] px-8 py-8 -mt-10 lg:mt-0 relative w-full sm:w-[380px] lg:mr-4">
                <h2 className={`${displayFont} text-[1.5rem] font-semibold mb-6`}>
                  Quick Links
                </h2>
                <ul className="flex flex-col gap-6">
                  {QUICK_LINKS.map((link) => (
                    <li key={link.label} className="flex items-center gap-4">
                      <span className="w-8 flex-none text-black" aria-hidden="true">
                        {link.icon}
                      </span>
                      <a
                        href={link.href}
                        className="text-[var(--blue-40)] font-bold underline underline-offset-2 hover:text-[var(--blue-10)]"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="max-w-[1200px] mx-auto px-6 mt-16">
          <h2
            className={`${displayFont} text-center font-semibold text-[1.75rem] sm:text-[2.5rem] leading-[1.05]`}
          >
            What can we help you find?
          </h2>
          <form
            action="https://www.nyc.gov/assets/home/html/search-redirect.html"
            method="get"
            role="search"
            className="relative max-w-[640px] mx-auto mt-8"
          >
            <input
              type="text"
              name="search-terms"
              aria-label="Search Housing Preservation and Development"
              autoComplete="off"
              className="w-full rounded-full border border-[var(--gray-70)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] bg-white pl-6 pr-14 py-3 text-[1rem] focus:border-[var(--blue-40)]"
            />
            <input type="hidden" name="sitesearch" value="www1.nyc.gov/site/hpd" />
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1.5 top-1/2 -translate-y-1/2 size-9 rounded-full bg-[var(--blue-40)] hover:bg-[var(--blue-10)] text-white flex items-center justify-center cursor-pointer"
            >
              <SearchIcon />
            </button>
          </form>
        </section>

        {/* Service tiles */}
        <section
          aria-label="Services and information"
          className="max-w-[1200px] mx-auto px-6 mt-14"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <a
                  href={service.href}
                  className="group relative block h-full bg-white rounded-xl shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow p-6 pr-14"
                >
                  <h3 className={`${displayFont} font-semibold text-[1.3rem] leading-snug mb-2`}>
                    {service.title}
                  </h3>
                  <p className="text-[0.875rem] leading-relaxed max-w-[24ch]">
                    {service.description}
                  </p>
                  <span
                    className="absolute right-5 top-1/2 -translate-y-1/2 text-black group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  >
                    <ChevronIcon />
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* Who Are We */}
        <section className="max-w-[1200px] mx-auto px-6 mt-16">
          <div className="bg-white rounded-2xl shadow-[var(--card-shadow)] p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-8 lg:gap-10 items-center">
            <div>
              <h2 className={`${displayFont} font-semibold text-[1.75rem] sm:text-[2rem] mb-4`}>
                Who Are We?
              </h2>
              <p className="text-[0.95rem] leading-relaxed">
                Our mission is to promote quality and affordability in the city&apos;s
                housing, and diversity and strength in the city&apos;s neighborhoods.
              </p>
              <p className="text-[0.95rem] leading-relaxed mt-4">We do this by:</p>
              <ul className="list-disc pl-5 text-[0.95rem] leading-relaxed mt-1 flex flex-col gap-1">
                <li>Maintaining building and resident safety and health</li>
                <li>Creating opportunities for New Yorkers through housing affordability</li>
                <li>Engaging New Yorkers to build and sustain neighborhood strength and diversity</li>
              </ul>
              <p className="text-[0.95rem] leading-relaxed mt-4">
                Because every New Yorker deserves a safe, affordable place to live in a
                neighborhood they love.
              </p>
              <div className="flex flex-wrap gap-4 mt-7">
                <a
                  href={`${HPD}/about/about-hpd.page`}
                  className="rounded-full bg-[var(--blue-40)] hover:bg-[var(--blue-10)] text-white font-semibold text-[0.9rem] px-7 py-3"
                >
                  Learn More
                </a>
                <a
                  href={`${HPD}/about/hpd-accessibility-statement.page`}
                  className="rounded-full bg-[var(--blue-40)] hover:bg-[var(--blue-10)] text-white font-semibold text-[0.9rem] px-7 py-3"
                >
                  Website Accessibility Statement
                </a>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-[3/2]">
              <Image
                src="/nyc_housing_people.png"
                alt="HPD staff and community members at a ribbon-cutting ceremony outside a new affordable housing building"
                fill
                sizes="(min-width: 1024px) 540px, 100vw"
                className="object-cover"
              />
              <a
                href="/nyc_housing_people.png"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View full-size photo"
                className="absolute bottom-3 right-3"
              >
                <Image src="/media_icon.png" alt="" width={32} height={32} />
              </a>
            </div>
          </div>
        </section>

        {/* Programs and Initiatives */}
        <section className="max-w-[1200px] mx-auto px-6 mt-20 mb-16">
          <h2 className={`${displayFont} font-semibold text-[1.75rem] sm:text-[2rem]`}>
            Programs and Initiatives
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 lg:px-6">
            {PROGRAMS.map((program) => {
              const CardLink = program.href.startsWith("/") ? Link : "a";
              return (
              <li key={program.title}>
                <CardLink
                  href={program.href}
                  className="group block h-full bg-white rounded-xl shadow-[var(--card-shadow)] hover:shadow-[var(--card-shadow-hover)] transition-shadow p-6"
                >
                  <div className="relative aspect-square rounded-lg overflow-hidden mb-6">
                    <Image
                      src={program.image}
                      alt={program.alt}
                      fill
                      sizes="(min-width: 1024px) 320px, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <h3 className={`${displayFont} font-semibold text-[1.3rem] leading-snug`}>
                    {program.title}
                  </h3>
                  <div className="flex items-center gap-3 mt-2">
                    <p className="text-[0.875rem] leading-relaxed flex-1">
                      {program.description}
                    </p>
                    <span
                      className="flex-none text-black group-hover:translate-x-0.5 transition-transform"
                      aria-hidden="true"
                    >
                      <ChevronIcon />
                    </span>
                  </div>
                </CardLink>
              </li>
              );
            })}
          </ul>
        </section>

        {/* Back to top */}
        <div className="max-w-[1200px] mx-auto px-6 mb-10">
          <a
            href="#top"
            aria-label="Back to top"
            className="inline-flex size-11 rounded-full border-2 border-[var(--blue-40)] text-[var(--blue-40)] hover:bg-[var(--blue-40)] hover:text-white items-center justify-center transition-colors"
          >
            <ArrowUpIcon />
          </a>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}

/* --- Icons (inline SVG, stroke/fill inherit currentColor) --- */

function ScalesIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 5v22" />
      <path d="M6 8.5h20" />
      <path d="M16 27h-5.5M16 27h5.5" />
      <path d="M9 8.5 5 17c0 2 1.8 3.5 4 3.5s4-1.5 4-3.5l-4-8.5Z" />
      <path d="M23 8.5 19 17c0 2 1.8 3.5 4 3.5s4-1.5 4-3.5l-4-8.5Z" />
      <circle cx="16" cy="5" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor">
      <path d="M16 4 3 15h3.5v12h7.5v-8h4v8h7.5V15H29L16 4Z" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 32 32" fill="currentColor">
      <path d="M5 27V9l7-4v22H5Zm9 0V5l13 5v17H14Zm-6.5-3h2v-3h-2v3Zm0-6h2v-3h-2v3Zm0-6h2V9h-2v3Zm10 12h2v-3h-2v3Zm0-6h2v-3h-2v3Zm0-6h2v-3h-2v3Zm5 12h2v-3h-2v3Zm0-6h2v-3h-2v3Zm0-6h2v-3h-2v3Z" />
      <rect x="3" y="27" width="26" height="2" rx="1" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
      <circle cx="7" cy="7" r="5" />
      <line x1="10.8" y1="10.8" x2="14.5" y2="14.5" />
    </svg>
  );
}

function ChevronIcon() {
  return (
    <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 3l8 8-8 8" />
    </svg>
  );
}

function ArrowUpIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 15V3M4 8l5-5 5 5" />
    </svg>
  );
}
