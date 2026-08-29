"use client";

import { useMemo, useRef, useState } from "react";
import { HOUSING_RESOURCES, IMAGE_BASE, type HousingResource } from "./resources";

const displayFont = "font-[family-name:var(--font-display)]";

const PLACEHOLDER_SRC = "/housing_placeholder.jpg";
const SHELTER_TOPIC = "find shelter quickly";

/*
  Topic and keyword lists are derived from the dataset exactly as the
  original housing-filter.js writeTags() does: case-insensitive de-dupe,
  alphabetical sort, with "find shelter quickly" pinned to the end.
*/
const TOPICS = (() => {
  const topics: string[] = [];
  for (const resource of HOUSING_RESOURCES) {
    for (const raw of resource.tags.split(";")) {
      const tag = raw.trim();
      if (!tag || tag === SHELTER_TOPIC) continue;
      if (!topics.some((t) => t.toLowerCase() === tag.toLowerCase())) topics.push(tag);
    }
  }
  topics.sort();
  topics.push(SHELTER_TOPIC);
  return topics;
})();

const KEYWORD_OPTIONS = (() => {
  const keywords: string[] = [];
  for (const resource of HOUSING_RESOURCES) {
    for (const raw of resource.keywords.split(",")) {
      const keyword = raw.trim();
      if (!keyword) continue;
      if (!keywords.some((k) => k.toLowerCase() === keyword.toLowerCase()))
        keywords.push(keyword);
    }
  }
  keywords.sort();
  return keywords;
})();

/* Port of isValid() from the original housing-filter.js, semantics unchanged:
   universal resources pass any filtered search; keyword matching is a raw
   (untrimmed) case-insensitive substring test against the keywords field. */
function isValid(
  resource: HousingResource,
  keywords: string,
  checks: string[]
): boolean {
  let valid = resource.universal;
  if (keywords.length === 0 && (checks.length === 0 || checks.length === TOPICS.length)) {
    valid = true;
  }
  if (keywords.length > 0) {
    valid = valid || resource.keywords.toLowerCase().includes(keywords.toLowerCase());
  } else {
    for (const check of checks) {
      valid = valid || resource.tags.toLowerCase().includes(check.toLowerCase());
    }
  }
  return valid;
}

interface AppliedSearch {
  keywords: string;
  checks: string[];
}

export default function PortalSearch() {
  const [checked, setChecked] = useState<ReadonlySet<string>>(new Set());
  const [keyword, setKeyword] = useState("");
  const [applied, setApplied] = useState<AppliedSearch>({ keywords: "", checks: [] });
  const resultsHeadingRef = useRef<HTMLParagraphElement | null>(null);

  const isAll = applied.keywords.length === 0 && applied.checks.length === 0;

  const results = useMemo(
    () => HOUSING_RESOURCES.filter((r) => isValid(r, applied.keywords, applied.checks)),
    [applied]
  );

  function handleSearch(e: React.FormEvent) {
    e.preventDefault();
    // As in the original searchResources(): a keyword overrides the topic
    // checkboxes (they stay visually checked but are ignored).
    const checks = keyword.length > 0 ? [] : [...checked];
    setApplied({ keywords: keyword, checks });
    if (keyword.length > 0 || checks.length > 0) {
      requestAnimationFrame(() => {
        resultsHeadingRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }

  function handleReset() {
    setChecked(new Set());
    setKeyword("");
    setApplied({ keywords: "", checks: [] });
  }

  function toggleTopic(topic: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(topic)) next.delete(topic);
      else next.add(topic);
      return next;
    });
  }

  return (
    <>
      <form onSubmit={handleSearch}>
        <fieldset>
          <legend className={`${displayFont} font-semibold text-[1.35rem] mb-5`}>
            Select a topic and click the search button:
          </legend>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4 max-w-[900px]">
            {TOPICS.map((topic) => (
              <label
                key={topic}
                className="flex items-start gap-3 cursor-pointer select-none"
              >
                <input
                  type="checkbox"
                  checked={checked.has(topic)}
                  onChange={() => toggleTopic(topic)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className="mt-0.5 size-6 flex-none rounded-full border-2 border-[var(--gray-70)] bg-white flex items-center justify-center text-white peer-checked:bg-[var(--blue-40)] peer-checked:border-[var(--blue-40)] peer-focus-visible:outline-3 peer-focus-visible:outline-dotted peer-focus-visible:outline-[var(--focus-ring)] peer-focus-visible:outline-offset-3 [&>svg]:opacity-0 peer-checked:[&>svg]:opacity-100"
                >
                  <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 7l3 3 6-7" />
                  </svg>
                </span>
                <span className="font-bold text-[1.05rem] leading-snug">{topic}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <label
          htmlFor="keyword"
          className={`${displayFont} block font-semibold text-[1.35rem] mt-10 mb-5`}
        >
          Or enter a keyword and click the search button:
        </label>
        <div className="flex items-center gap-5 max-w-[900px]">
          <div className="relative flex-1 flex items-center">
            <input
              id="keyword"
              type="text"
              list="keywordlist"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck={false}
              autoComplete="off"
              className="w-full rounded-full border border-[var(--gray-70)] shadow-[0_2px_8px_rgba(0,0,0,0.08)] bg-white pl-6 pr-24 py-3.5 text-[1rem] focus:border-[var(--blue-40)]"
            />
            <datalist id="keywordlist">
              {KEYWORD_OPTIONS.map((k) => (
                <option key={k} value={k} />
              ))}
            </datalist>
            {keyword && (
              <button
                type="button"
                onClick={() => setKeyword("")}
                aria-label="Clear this field"
                title="Clear this field"
                className="absolute right-16 text-[var(--gray-40)] hover:text-black font-bold px-2 cursor-pointer"
              >
                ✕
              </button>
            )}
            <button
              type="submit"
              aria-label="Search"
              className="absolute right-1 size-11 rounded-full bg-[var(--blue-40)] hover:bg-[var(--blue-10)] text-white flex items-center justify-center cursor-pointer"
            >
              <svg width="19" height="19" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <circle cx="7" cy="7" r="5" />
                <line x1="10.8" y1="10.8" x2="14.5" y2="14.5" />
              </svg>
            </button>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="text-[var(--blue-40)] font-bold text-[1.05rem] underline underline-offset-2 hover:text-[var(--blue-10)] cursor-pointer"
          >
            Reset
          </button>
        </div>
      </form>

      <p
        ref={resultsHeadingRef}
        role="heading"
        aria-level={2}
        aria-live="polite"
        aria-atomic="true"
        className={`${displayFont} font-semibold text-[1.9rem] sm:text-[2.25rem] mt-14 scroll-mt-6`}
      >
        <span className="text-[var(--blue-40)]">{results.length}</span>{" "}
        {isAll
          ? "featured NYC housing resources"
          : results.length === 1
            ? "result for you"
            : "results for you"}
      </p>

      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-10">
        {results.map((resource) => (
          <li key={resource.title + resource.url}>
            <a href={resource.url} className="group block">
              <div className="aspect-square w-full max-w-[220px] shadow-[var(--card-shadow)] rounded-sm overflow-hidden bg-white">
                {/* Plain img on purpose: images are hotlinked from nyc.gov
                    (server-side optimization would be blocked by Akamai), with
                    the original portal's placeholder fallback on error. */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={IMAGE_BASE + resource.image}
                  alt={resource.alt}
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget;
                    if (!img.src.endsWith(PLACEHOLDER_SRC)) img.src = PLACEHOLDER_SRC;
                  }}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3
                className={`${displayFont} font-semibold text-[1.15rem] leading-snug mt-4 group-hover:underline`}
              >
                {resource.title}
              </h3>
              <p className="text-[0.875rem] leading-relaxed mt-2">{resource.blurb}</p>
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
