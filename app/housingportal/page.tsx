import type { Metadata } from "next";
import { SiteHeader, SiteFooter } from "../components/site";
import PortalSearch from "./portal-search";

const displayFont = "font-[family-name:var(--font-display)]";

export const metadata: Metadata = {
  title: "Search for NYC housing resources — Housing Resources Portal",
  description:
    "Search NYC housing resources by topic or keyword: eviction support, rental assistance, affordable housing applications, owner resources, and more.",
};

export default function HousingPortalPage() {
  return (
    <div className="flex flex-col flex-1 bg-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:top-2 focus:left-2 focus:bg-white focus:text-[var(--blue-40)] focus:px-4 focus:py-2 focus:rounded-md font-semibold"
      >
        Skip to main content
      </a>

      <SiteHeader title="Housing Resources Portal" />

      <main id="main" className="flex-1 max-w-[1200px] w-full mx-auto px-6 pt-10 pb-20">
        <div className="flex flex-wrap items-start justify-between gap-6 mb-8">
          <h1
            className={`${displayFont} font-semibold text-[2rem] sm:text-[2.5rem] leading-[1.1]`}
          >
            Search for NYC housing resources
          </h1>
          <a
            href="https://www.nyc.gov/site/housingportal/have-a-question/have-a-question.page"
            className="rounded-full bg-[var(--blue-40)] hover:bg-[var(--blue-10)] text-white font-semibold text-[0.95rem] px-7 py-3"
          >
            Have a Question?
          </a>
        </div>

        <PortalSearch />

        <h2
          className={`${displayFont} font-semibold text-[1.9rem] sm:text-[2.25rem] mt-20`}
        >
          Not finding what you&apos;re looking for?
        </h2>
        <p className="text-[1rem] leading-relaxed mt-6 max-w-[54ch]">
          <a
            href="https://www.nyc.gov/311/connect-with-us.page"
            className="text-[var(--blue-40)] font-semibold underline underline-offset-2 hover:text-[var(--blue-10)]"
          >
            Contact 311
          </a>{" "}
          to be directed to someone who can answer your housing questions.
        </p>
      </main>

      <SiteFooter />
    </div>
  );
}
