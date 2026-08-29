/*
  Dataset extracted verbatim from the live NYC Housing Resource Portal
  (nyc.gov/assets/housingportal/js/housing-data.js, retrieved 2026-07-20).
  Field semantics follow the original housing-filter.js: tags are
  semicolon-separated topics, keywords back the search box, universal
  resources appear in every filtered result set.
*/
export interface HousingResource {
  tags: string;
  title: string;
  blurb: string;
  url: string;
  keywords: string;
  image: string;
  alt: string;
  universal: boolean;
}

export const IMAGE_BASE = "https://www.nyc.gov/assets/housingportal/images/content/pages/";

export const HOUSING_RESOURCES: HousingResource[] = [
  {
    "tags": "prepare and apply for affordable housing",
    "title": "NYC Housing Connect",
    "blurb": "Use NYC Housing Connect to search and apply for affordable housing rental and homeownership opportunities.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/housing-connect-rentals.page",
    "keywords": "housing lottery, lotteries, available units, rental, rent, housing connect, NYC Housing Connect, hpd, apply, find a home, search, open lottery, open lotteries, affordable housing, homeownership, affordable homeownership, affordable rental, affordable rentals, cheap housing, cheap rent",
    "image": "nyc-housing-connect.jpg",
    "alt": "Apartment building from the street.",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support; get help paying for rental housing; manage a residential property; find financial resources for owners",
    "title": "NYS Emergency Rental Assistance Program",
    "blurb": "ERAP provides rental and other assistance to help low and moderate-income households.",
    "url": "https://otda.ny.gov/programs/emergency-rental-assistance/",
    "keywords": "emergency rental assistance program, erap, new york state, state, new york state emergency rental assistance program, rent arrears, rent help, undocumented",
    "image": "erap.jpg",
    "alt": "title of the ERAP program",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support; learn about housing regulations",
    "title": "Tenant Protection",
    "blurb": "Learn about a strong set of rights that protect tenants in New York City.",
    "url": "https://www1.nyc.gov/content/tenantprotection/pages/",
    "keywords": "tenants rights, rent regulation, tenant protection laws, covid-19 protections, eviction, evictions, rent, emergency, rent regulated, legal assistance, tenant hotline, housing court answers, housing court, broker fees, tenant, harassment, tenant laws, Mayor's Office to Protect Tenants, MOPT",
    "image": "tenant-protection.jpg",
    "alt": "Mother hugging son.",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support; learn about housing regulations",
    "title": "NYC Tenant Resource Portal",
    "blurb": "Find tools to help navigate public and private resources to stabilize your housing situation.",
    "url": "https://www1.nyc.gov/content/tenantresourceportal/pages/",
    "keywords": "tenants rights, rent regulation, tenant protection laws, covid-19 protections, Mayor's Office to Protect Tenants, Mayor's Public Engagement Unit's Tenant Support Unit, legal service providers, community based organizations, evictions, lock outs, free legal advice",
    "image": "IMG52_tenant-resource-portal.jpg",
    "alt": "Building image with the NYC Tenant Resource Portal title.",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Homeowner Help Desk",
    "blurb": "The Homeowner Help Desk is a new program that assists homeowners at risk of being displaced from their communities.",
    "url": "https://homeownerhelpny.org/help-desk",
    "keywords": "homeowner, homeowner help desk, deed theft, scams, grants, loans, foreclosure, estate planning, home repairs, flood risk, mortgage, property tax",
    "image": "homeowner-help-desk.jpg",
    "alt": "Person wearing a Homeowner Help Desk tshirt",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing",
    "title": "HPD Housing Ambassadors",
    "blurb": "Connect with someone who can help you apply for affordable housing in New York City.",
    "url": "http://www1.nyc.gov/site/hpd/services-and-information/housing-ambassadors.page",
    "keywords": "housing ambassador, help, counselor, rent, find a home, guide, disabled, disability, people with disabilities, access, NYC Housing Connect, housing lottery, affordable housing, insurance",
    "image": "housing-ambassador-logo",
    "alt": "New Yorkers talking to a counselor at a table.",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing",
    "title": "Housing resources for people with disabilities",
    "blurb": "If you have a disability, connect with someone who can help you apply for affordable housing in New York City.",
    "url": "http://www1.nyc.gov/site/hpd/services-and-information/resources-for-people-with-disabilities.page",
    "keywords": "housing ambassador, help, counselor, rent, find a home, guide, disabled, disability, people with disabilities, access, NYC Housing Connect, housing lottery, affordable housing, DRIE",
    "image": "46_HAPwD.png",
    "alt": "Hands writes in a notebook.",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing",
    "title": "NYC Housing Connect guides",
    "blurb": "Learn about eligible income levels, find out what documents you need, and read step-by-step guides to the application process.",
    "url": "http://www1.nyc.gov/site/hpd/services-and-information/housing-connect-application-guides.page",
    "keywords": "process, apply, application, application documents, income, eligibility, income calculator, interview, AMI, area median income, credit, credit history, screening, eligibility confirmation, housing connect, find a home, NYC Housing Connect, Housing Connect, guide, affordable housing",
    "image": "IMG1_ApplicationGuide.png",
    "alt": "Illustrated cover of NYC Ready, Set, Apply! Application guide.",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing",
    "title": "NYCHA (New York City Public Housing Authority)",
    "blurb": "Determine your eligibility, apply, or look up application status for public housing through NYCHA.",
    "url": "http://www1.nyc.gov/site/nycha/eligibility/eligibility.page",
    "keywords": "NYCHA, housing lottery, lotteries, available units, public housing, rental, rent, eligibility, apply, application status, status, find a home, search",
    "image": "nycha.jpg",
    "alt": "An adult and child play on a bright playground in NYCHA courtyard.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing; find financial resources for owners",
    "title": "Universal Broadband NY",
    "blurb": "Reduce your home internet service cost now.",
    "url": "https://broadbandbenefit.cityofnewyork.us/resources",
    "keywords": "broadband, emergency broadband benefit, EBB, discount, internet, internet discount",
    "image": "universal-broadband.JPG",
    "alt": "Text that reads \"reduce your home internet service cost now. Check eligibility.\"",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing",
    "title": "NYC Mitchell-Lama Connect",
    "blurb": "Use the Mitchell-Lama Connect site to apply to current waiting lists for Mitchell-Lama rentals and co-ops.",
    "url": "https://a806-housingconnect.nyc.gov/nyclottery/lottery.html#ml-current-projects",
    "keywords": "housing lottery, lotteries, rental, available units, rent, own, mitchell-lama, hpd, apply, find a home, search, Mitchell-Lama Connect, NYC Mitchell-Lama Connect, co-op, co-ops, cooperatives, affordable homeownership, affordable housing, seniors, AMI, occupancy standards, City M-L",
    "image": "mitchell-lama-connect.jpg",
    "alt": "View of NYC Mitchell-Lama apartment building.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing; prepare and apply for affordable housing",
    "title": "NYS Mitchell-Lama",
    "blurb": "Find available apartments for middle-income families and seniors through the NYS Mitchell-Lama program.",
    "url": "https://hcr.ny.gov/mitchell-lama-applicant-information#development-lists-for-middle-income-families-and-seniors",
    "keywords": "NYS, State, lotteries, M-L, affordable housing, co-ops, Mitchell-Lama",
    "image": "nys-mitchell-lama.jpg",
    "alt": "A Mitchell-Lama development",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing",
    "title": "NYC Housing Development Corporation (HDC)",
    "blurb": "Find HDC-financed affordable rentals and co-ops in New York City.",
    "url": "http://www.nychdc.com/pages/Now-Renting.html",
    "keywords": "housing lottery, lotteries, available units, rental, rent, own, hdc, co-op, coop, find a home",
    "image": "IMG7_HDC.png",
    "alt": "View of HDC-financed apartment building.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing; prepare and apply for affordable housing",
    "title": "NY State Affordable Housing Search and Assistance Resources",
    "blurb": "Explore housing lotteries, NY Housing Search apartment listings and much more.",
    "url": "https://hcr.ny.gov/find-affordable-housing",
    "keywords": "housing lottery, lotteries, available units, rental, rent, apply, find a home, search, open lottery, open lotteries, affordable housing, homeownership, affordable homeownership, affordable rental, affordable rentals, SCRIE, Section 8, State, NYS",
    "image": "hcr-housing-resources.jpg",
    "alt": "icons of houses",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing; learn about housing regulations",
    "title": "Your rights as a renter",
    "blurb": "Learn what you're entitled to as a tenant, including what your landlord must do and cannot do.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/tenants-rights-and-responsibilities.page",
    "keywords": "tenants rights, fair housing, landlord harassment, discrimination, repairs, maintenance, safety, rent, landlord, housing rights, eviction, lease",
    "image": "IMG35_RentersRights.png",
    "alt": "An older woman smiles.",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support; learn about housing regulations",
    "title": "Legal help for housing issues",
    "blurb": "Learn who to contact if you need legal help with issues like discrimination, eviction, or rent increases.",
    "url": "https://www1.nyc.gov/site/hra/help/legal-services-for-tenants.page",
    "keywords": "legal help, tenants rights, housing court, landlord harassment, harassment, discrimination, housing issue, report, complaint, eviction, rent increase, landlord, rent, housing court",
    "image": "IMG10_LegalHelp.jpg",
    "alt": "A man speaking to a counselor inside a mobile HPD help center.",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support; learn about housing regulations",
    "title": "Report housing discrimination",
    "blurb": "Report housing discrimination based on age, citizenship, race, religion, disability, gender expression, sexual orientation, or other protected classes.",
    "url": "http://www1.nyc.gov/site/cchr/help/i-need-help.page",
    "keywords": "tenants rights, fair housing, landlord harassment, harassment, discrimination, safety, complaint, report, landlord, vouchers, homebuyer, source of income discrimination",
    "image": "IMG11_Discrimination.jpg",
    "alt": "A sign reading No Tenant Stands Alone.",
    "universal": false
  },
  {
    "tags": "report a housing maintenance complaint",
    "title": "Report or find a housing maintenance complaint",
    "blurb": "File a complaint about an unsafe housing condition like lead paint, or lack of heat, hot water, or window bars.",
    "url": "http://www1.nyc.gov/site/hpd/services-and-information/report-a-maintenance-issue.page",
    "keywords": "tenants rights, fair housing, maintenance, safety, complaint, report, heat, no heat, utilities, lead, lead paint, lead paint violation, HPD violation, housing quality, housing safety, maintenance requirements, quality, safety, maintenance, lead, lead paint, water, allergens, indoor allergens, indoor allergen hazards, basement, cellar, bedbugs, elevators, fire, fire safety, gas, heat, hot water, heat and hot water, mold, pests, smoke detectors, carbon monoxide detectors, stove knob covers, window guards, property management",
    "image": "IMG12_UnsafeHousing.png",
    "alt": "A City employee inspects the roof of a building.",
    "universal": false
  },
  {
    "tags": "report a housing maintenance complaint",
    "title": "Report an issue at a NYCHA property",
    "blurb": "Report an issue or emergency or request a repair at a NYCHA property.",
    "url": "https://portal.311.nyc.gov/article/?kanumber=KA-01076",
    "keywords": "tenants rights, maintenance, safety, complaint, report, NYCHA, emergency, repairs",
    "image": "IMG13_NYCHARepairs.png",
    "alt": "NYCHA building in front of a blue sky.",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support",
    "title": "Report harassment",
    "blurb": "If you're being harassed by your landlord, get information and see who to contact for help.",
    "url": "https://www1.nyc.gov/content/tenantprotection/pages/resources",
    "keywords": "tenants rights, fair housing, landlord harassment, discrimination, safety, eviction, landlord",
    "image": "IMG14_Rights.jpg",
    "alt": "A group of New Yorkers at a public meeting.",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support",
    "title": "Report an illegal lockout or eviction",
    "blurb": "Only a City Marshal or sheriff can carry out an eviction. Report a landlord illegally locking you out or issuing an eviction.",
    "url": "https://portal.311.nyc.gov/article/?kanumber=KA-02518",
    "keywords": "tenants rights, fair housing, landlord harassment, discrimination, eviction, safety, complaint, report, landlord, illegal lockout, locked out, evicted",
    "image": "illegal-eviction.jpg",
    "alt": "A man smiles at a podium in front of a \"No tenant stands alone sign,\" while the audience claps and cheers.",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing",
    "title": "Financial counseling for affordable housing applicants",
    "blurb": "Meet with a counselor to get your finances ready to apply for housing through NYC Housing Connect.",
    "url": "http://www1.nyc.gov/site/hpd/services-and-information/ready-to-rent.page",
    "keywords": "Financial Empowerment Center, finances, counselor, credit, credit history, income, debt, NYC Housing Connect, Housing Connect, Ready to Rent",
    "image": "IMG17_FinancialCounseling.png",
    "alt": "Two people converse while looking at print materials.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing",
    "title": "Emergency help for rent or housing costs",
    "blurb": "See if you qualify for a One Shot Deal emergency assistance grant. These help people who can't meet expenses due to unexpected events.",
    "url": "https://portal.311.nyc.gov/article/?kanumber=KA-01104",
    "keywords": "emergency, grant, housing, rental arrears grant, one shot deal, covid-19, coronavirus, eviction, one shot, rent, homeless, homelessness, homeless prevention",
    "image": "IMG18_OneShotDeal.png",
    "alt": "A family of three holding a painting.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing",
    "title": "Services for preventing homelessness",
    "blurb": "The Homebase program offers homelessness-prevention services to New Yorkers. Learn more and find a Homebase center near you.",
    "url": "https://www1.nyc.gov/site/dhs/prevention/homebase.page",
    "keywords": "Homebase, eviction, homelessness prevention, emergency, homeless, shelter, DHS, help, eviction, evicted",
    "image": "IMG19_Homebase.png",
    "alt": "Two smiling City workers wear Homebase tshirts and hold print materials and clipboards.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing",
    "title": "Rent freeze for seniors",
    "blurb": "If you're a senior living in rent-regulated housing and you make $50,000 or less, apply to freeze your rent.",
    "url": "https://portal.311.nyc.gov/article/?kanumber=KA-02289",
    "keywords": "senior, rent regulated, rent freeze, senior citizen rent increase exemption, senior citizen rent increase exemption (scrie), scrie, seniors, rental assistance, lower my rent",
    "image": "IMG20_RentFreezeSeniors.jpg",
    "alt": "An older woman smiling while sitting in her home.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing",
    "title": "Rent freeze for people with disabilities",
    "blurb": "If you have a disability and live in rent-regulated housing, see if you can get your rent frozen at its current rate.",
    "url": "https://portal.311.nyc.gov/article/?kanumber=KA-02290",
    "keywords": "disabled, disability rent regulated, rent freeze, people with disabilities, disability, disability rent increase exemption, disability rent increase exemption (drie), drie, lower my rent",
    "image": "IMG21_RentFreezeDisabilities.png",
    "alt": "Two people using wheelchairs smile in a public park.",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing; get help paying for rental housing; find shelter quickly; find financial resources for owners; manage a residential property; learn about housing regulations",
    "title": "Housing resources for people with disabilities",
    "blurb": "Find housing resources, programs, and personal assistance for people with disabilities.",
    "url": "http://www1.nyc.gov/site/mopd/resources/housing.page",
    "keywords": "disabled, disability, people with disabilities, apply, find a home, process, apply, application, fair housing, access, modifications, homeowner,",
    "image": "47_ResourcesPwD.png",
    "alt": "An assortment buildings in New York City.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing",
    "title": "Resources for avoiding eviction",
    "blurb": "Find financial and legal help to avoid eviction.",
    "url": "https://www1.nyc.gov/site/hra/help/rental-assistance.page",
    "keywords": "rental arrears grant, rent supplement, eviction, homelessness, CITYFEPS, Homeless Prevention Fund, legal help, foreclosure, Anti-Eviction, evicted, homeless, landlord, owner",
    "image": "IMG22_RentalGrants.png",
    "alt": "NYC apartment buildings on a sunny day.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing; find financial resources for owners; manage a residential property",
    "title": "Help paying for heat and utilities",
    "blurb": "See if you qualify for the Home Energy Assistance Program (HEAP) that helps pay for heating fuel, equipment, and repairs.",
    "url": "https://www1.nyc.gov/site/hra/help/energy-assistance.page",
    "keywords": "HEAP, heating assistance, heat, energy, heating, repairs, UAP, disabled, utility assistance program, utilities, people with disabilities, disability, homeowner, financial assistance, air conditioner, air conditioning, a/c, water, electricity, bills",
    "image": "IMG31_HeatUtilities.png",
    "alt": "Warm light radiates from a brownstone window.",
    "universal": false
  },
  {
    "tags": "manage a residential property",
    "title": "Property Owner Clinics",
    "blurb": "Monthly opportunities to learn about the City's financing and repair programs",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/property-owner-clinics.page",
    "keywords": "clinic, clinincs, financing, loan, loans, repair, repairs, upgrade, upgrades, building system, building systems, operating costs, property owner, owner, owners",
    "image": "IMG53_property-owner-clinic.jpg",
    "alt": "Icons of a multfamily building.",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Green Housing Preservation Program (GHPP)",
    "blurb": "Low- and no-interest loans to finance energy efficiency, water conservation, remediate lead-based paint hazards, and rehabilitate your building",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/green-housing-preservation-program-ghpp.page",
    "keywords": "GHPP, energy, loan, loans, solar, sustainability, efficiency, water, lead, lead paint, rehab, rehabilitation, renovation, repairs loan, financing, loan, repairs, repair, repair assistance, capital improvement, capital improvements, building improvement, building improvements, violation, building systems, major repair, upgrades, green housing, preservation, green housing preservation program (GHPP)",
    "image": "IMG56_ghpp.jpg",
    "alt": "Solar panels on a roof.",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "HomeFix",
    "blurb": "Low or no-interest and potentially forgivable loans for home repairs",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/homefix.page",
    "keywords": "homefix, loan, primary residence, median income, AMI, owner, HRP, multifamily, loans, building systems, major repair, upgrades, loan, financing, rehab, rehabilitation, renovation, repairs loan, repairs, repair, repair assistance, capital improvement, capital improvements, building improvement, building improvements, violation, building systems, major repair, upgrades, homeowner repair loans, CNYCN",
    "image": "IMG57_homefix.JPG",
    "alt": "HomeFix logo.",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Lead Hazard Reduction and Healthy Homes Program",
    "blurb": "Apply for federally funded grants for lead paint hazard reduction in your home or rental property.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/lead-hazard-reduction-and-healthy-homes-program.page",
    "keywords": "Reduce lead, poison, peeling, cracking, health risks, 1960, low-income, very low-income, occupants, children under six, owner, lead, lead paint, violation, health, healthy homes, lead hazard reduction and healthy homes",
    "image": "IMG58_lead-hazard-healthy-homes_Page_1.jpg",
    "alt": "Baby playing with toys in front of a wall with peeling paint.",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Multifamily Housing Rehabilitation Loan Program (HRP)",
    "blurb": "See if you qualify for moderate rehabiliation loans for your home.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/multifamily-housing-rehabilitation-loan-program-hrp.page",
    "keywords": "financing, rehab, rehabilitation, renovation, repairs loan, repairs, repair, repair assistance, capital improvement, capital improvements, building improvement, building improvements, violation, building systems, major repair, upgrades, loan, primary residence, co-op, owner HRP, multifamily, loans, building systems, upgrades, moderate repair",
    "image": "IMG59_hrp.JPG",
    "alt": "Cityscape.",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Participation Loan Program (PLP)",
    "blurb": "Find low interest loans or tax exemptions for your multifamily property to facilitate rehabiltation of affordable housing.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/participation-loan-program-plp.page",
    "keywords": "tax exemption, financing, rehab, rehabilitation, renovation, repairs loan, repairs, repair, repair assistance, capital improvement, capital improvements, building improvement, building improvements, violation, building systems, major repair",
    "image": "IMG60_plp.jpg",
    "alt": "Cityscape.",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "School Tax Relief (STAR) Program",
    "blurb": "The School Tax Relief (STAR) program offers property tax relief to eligible New York State homeowners.",
    "url": "https://www.tax.ny.gov/star/default.htm",
    "keywords": "tax bill reduction, NYS Tax Department, school taxes, income-based, homeowner, primary residence, credit check, State, NYS, taxes",
    "image": "IMG61_star.jpg",
    "alt": "Family unpacking boxes.",
    "universal": false
  },
  {
    "tags": "learn about housing regulations",
    "title": "Housing Stability and Tenant Protection Act of 2019",
    "blurb": "Find out how significant changes in New York State rent laws affect you.",
    "url": "https://rentguidelinesboard.cityofnewyork.us/resources/rent-regulation-laws/rent-laws-of-2019/",
    "keywords": "rent, vacancy, capital improvement, rent control, owner occupancy, decontrol, NYS Homes and Community Renewal, rent laws, rights, housing rights, NYS HCR, MCI, IAI, HSTPA, rent control, rent stabilization, rent-stabilized",
    "image": "IMG61_rent-laws.jpg",
    "alt": "Cityscape.",
    "universal": false
  },
  {
    "tags": "manage a residential property",
    "title": "Clear building violation",
    "blurb": "Find out how to clear a Housing Code Violation",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/clear-violations.page",
    "keywords": "Housing Maintenance Code, code violations, Orders to Correct, Section 8, Housing Quality Standards, failure notice, podcast, inspector, clear violation, allergen, certification, owner, violation, clear building violation",
    "image": "IMG63_clear-violation.JPG",
    "alt": "Inspectors on a roof.",
    "universal": false
  },
  {
    "tags": "manage a residential property",
    "title": "Register your property",
    "blurb": "Property owners are required to register annually by September 1st.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/register-your-property.page",
    "keywords": "property registration, property management, property owner responsibilities, register, owner, annual registration",
    "image": "IMG64_property-registration.jpg",
    "alt": "HPD employee assisting with property registration.",
    "universal": false
  },
  {
    "tags": "manage a residential property; learn about housing regulations",
    "title": "Housing quality/safety issues",
    "blurb": "Learn about maintenance requirements for heat and hot water, lead-based paint, indoor allergen hazards, and more.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/housing-quality-and-safety.page",
    "keywords": "housing quality, housing safety, maintenance requirements, quality, safety, maintenance, lead, lead paint, water, allergens, indoor allergens, indoor allergen hazards, basement, cellar, bedbugs, elevators, fire, fire safety, gas, heat, hot water, heat and hot water, mold, pests, smoke detectors, carbon monoxide detectors, stove knob covers, window guards, property management",
    "image": "IMG65_housing-safety.jpg",
    "alt": "Cover of ABCs of Housing.",
    "universal": false
  },
  {
    "tags": "manage a residential property",
    "title": "HDFC Cooperatives",
    "blurb": "Learn about HDFC Cooperatives and find resources.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/hdfc.page",
    "keywords": "HDFC, HDFC Co-op, HDFC Co-ops, HDFC Cooperatives, HDFC Cooperative, HDFC Coop, affordable homeownership",
    "image": "IMG66_hdfc.jpg",
    "alt": "HDFC co-op.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing; prepare and apply for affordable housing",
    "title": "Resources for HPD Section 8 voucher holders",
    "blurb": "Find resources for HPD Section 8 vouchers holders, like forms, information, and programs.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/about-section-8.page",
    "keywords": "section 8, vouchers, housing choice, housing choice vouchers, subsidy, assistance, HPD, voucher, DTR, rental subsidy, affordable housing, housing choice voucher, PBV",
    "image": "IMG23_Section8.jpg",
    "alt": "NYC residential buildings by the river.",
    "universal": false
  },
  {
    "tags": "find financial resources for owners; manage a residential property",
    "title": "Resources for HPD Section 8 Owners",
    "blurb": "List your available properties for HPD Section 8 voucher holders",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/section-8-owners.page",
    "keywords": "Section 8 owner, GoSection8, Housing Choice, DTR, rental subsidy, affordable housing, guaranteed monthly rent, annual inspections, Section 8, voucher, Section 8 owners, PBV",
    "image": "IMG54_section-8-owners.jpg",
    "alt": "Building from below.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing",
    "title": "Resources for NYCHA Section 8 voucher holders",
    "blurb": "Find resources for NYCHA Section 8 vouchers holders, like tenant information, programs, and NYCHA's Self Service Portal.",
    "url": "https://www1.nyc.gov/site/nycha/section-8/about-section-8.page",
    "keywords": "section 8, vouchers, housing choice, housing choice vouchers, subsidy, assistance, NYCHA, self service portal, voucher, rental subsidy, affordable housing, housing choice voucher, PBV",
    "image": "45_NYCHASection8.png",
    "alt": "People stand on the new roof of a NYCHA building overlooking the city.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing; prepare and apply for affordable housing",
    "title": "NYS Section 8",
    "blurb": "Learn about and apply for the NYS Section 8 Housing Choice Voucher Program",
    "url": "https://hcr.ny.gov/section8",
    "keywords": "NYS, State, affordable housing, rent, Section 8, voucher, housing choice voucher",
    "image": "nys-section-8.jpg",
    "alt": "A residential street.",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing; find shelter quickly; get help paying for rental housing",
    "title": "Help transitioning to and keeping permanent housing",
    "blurb": "Find programs and rent assistance to help you transition to or keep your permanent housing.",
    "url": "https://www1.nyc.gov/site/hra/help/rental-assistance.page",
    "keywords": "rental assistance, transition, permanency, shelter, permanent housing, temporary housing, HRA, LINC, CITYFEPS, SEPS, HUD-VASH, Pathway Home, veteran, vouchers",
    "image": "IMG9_Transition.png",
    "alt": "A row of brownstones on a tree-lined block.",
    "universal": false
  },
  {
    "tags": "find financial resources for owners",
    "title": "Down payment assistance for first-time homebuyers",
    "blurb": "See if you qualify for the HomeFirst Down Payment Assistance Program. It gives first-time buyers up to $100,000 to cover down payment or closing costs.",
    "url": "http://www1.nyc.gov/site/hpd/services-and-information/homefirst-down-payment-assistance-program.page",
    "keywords": "down payment, homebuyer, own, buy, first-time homebuyer, homeowner, homeowners, homeownership, grant, homefirst, homebuyers, first-time homebuyers, grants",
    "image": "IMG25_DownPayment.jpg",
    "alt": "A young woman wearing glasses smiles.",
    "universal": false
  },
  {
    "tags": "find financial resources for owners; manage a residential property",
    "title": "Renovation and repair assistance",
    "blurb": "See if you qualify for a loan to help pay for renovations or repairs to your building.",
    "url": "http://www1.nyc.gov/site/hpd/services-and-information/home-repair-and-preservation-financing.page",
    "keywords": "renovation, repairs, loan, loan, repair, repair assistance, capital improvement, financing, capital improvements, building improvement, building improvements, boiler, roof, heating, violation, building systems, major repair, upgrades, homeowner repair loans",
    "image": "IMG26_RenoRepair.png",
    "alt": "Boilers in a NYC residential building.",
    "universal": false
  },
  {
    "tags": "find financial resources for owners",
    "title": "Property tax benefits for designated homeowners",
    "blurb": "Tax breaks are available for a variety of populations, from seniors to veterans to clergymembers. See if you're eligible.",
    "url": "https://portal.311.nyc.gov/article/?kanumber=KA-01795",
    "keywords": "exemption, abatement, property tax break, homeowner, owner, clergy, veteran, senior, tax break, tax breaks, property tax, financial assistance, tax, taxes",
    "image": "IMG32_ShelterFamilies.png",
    "alt": "An older veteran smiling at a parade before posters reading \"Thank You.\"",
    "universal": false
  },
  {
    "tags": "find financial resources for owners",
    "title": "Co-op and condo tax abatement",
    "blurb": "See if you qualify for a tax break as an owner of a co-op or condo unit.",
    "url": "http://www1.nyc.gov/site/finance/benefits/landlords-coop-condo.page",
    "keywords": "exemption, abatement, property tax break, homeowner, owner, coop, co-op, condo, tax break, tax breaks, property tax, financial assistance, tax, taxes",
    "image": "IMG28_TaxBreakCondo.png",
    "alt": "Different types of condo buildings rise above the trees.",
    "universal": false
  },
  {
    "tags": "find financial resources for owners",
    "title": "Property tax break for homeowners with disabilities",
    "blurb": "If you're a homeowner with a disability and you make $58,399 a year or less, apply for a Disabled Homeowners' Exemption (DHE) tax break.",
    "url": "http://www1.nyc.gov/site/finance/benefits/landlords-dhe.page",
    "keywords": "exemption, abatement, disabled, disability, property tax break, homeowner, owner tax break, people with disabilities, tax breaks, property tax, financial assistance, disability, handicapped, disabled homeowners' exemption, disabled homeowners' exemption (DHE), dhe",
    "image": "IMG29_TaxBreakDisability.jpg",
    "alt": "A young man in a wheelchair smiles on the sidewalk.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing; find financial resources for owners; manage a residential property",
    "title": "Help paying for energy-reducing home upgrades",
    "blurb": "Learn about the New York State Weatherization Assistance Program (WAP).",
    "url": "http://www.nyshcr.org/programs/weatherizationassistance/",
    "keywords": "WAP, energy, cooling, heating, upgrades, heat, utilities, owner, homeowner, air conditioning, sustainability, water, electricity, bills, State, NYS",
    "image": "IMG30_HomeUpgrade.PNG",
    "alt": "Solar panels glimmer in the sun on a NYC roof.",
    "universal": false
  },
  {
    "tags": "find shelter quickly",
    "title": "Shelters for families with children",
    "blurb": "Find shelter intake centers for families with children, how to get there, and what you should bring to apply.",
    "url": "http://www1.nyc.gov/site/dhs/shelter/families/families-with-children-applying.page",
    "keywords": "shelter, homeless, homelessness, adult, children, family, temporary housing, emergency, DHS, PATH, find a shelter, eviction, evicted",
    "image": "families-with-children.jpg",
    "alt": "family applying",
    "universal": false
  },
  {
    "tags": "find shelter quickly",
    "title": "Shelters for single adults",
    "blurb": "Find shelter intake centers for single men and women, how to get there, and what you should bring to apply.",
    "url": "http://www1.nyc.gov/site/dhs/shelter/singleadults/single-adults-applying.page",
    "keywords": "shelter, homeless, homelessness, adult, temporary housing, emergency, DHS, find a shelter, eviction, evicted",
    "image": "IMG33_ShelterAdults.png",
    "alt": "Brownstones on a city block.",
    "universal": false
  },
  {
    "tags": "find shelter quickly",
    "title": "Shelters for families without children",
    "blurb": "Find shelter intake centers for adult families, how to get there, and what you should bring to apply.",
    "url": "http://www1.nyc.gov/site/dhs/shelter/families/adult-families-applying.page",
    "keywords": "shelter, homeless, homelessness, adult, temporary housing, emergency, DHS, find a shelter, eviction, evicted",
    "image": "IMG34_NoChildren.png",
    "alt": "People walk down the sidewalk in NYC.",
    "universal": false
  },
  {
    "tags": "find shelter quickly",
    "title": "Shelters and crisis services for young adults",
    "blurb": "Learn about youth crisis shelters, drop-in-centers, and transitional living programs. These include specialized programs for pregnant, parenting, and LGBTQ youth.",
    "url": "http://www1.nyc.gov/site/dycd/services/runaway-homeless-youth.page",
    "keywords": "shelter, homeless, homelessness, youth, LGBTQ, temporary housing, emergency, DHS, find a shelter, runaways, eviction, evicted",
    "image": "IMG39_RunawayYouth.png",
    "alt": "Youth and counselors talk at a table.",
    "universal": false
  },
  {
    "tags": "find shelter quickly",
    "title": "Housing resources for LGBTQ youth",
    "blurb": "All LGBTQ youth deserve a safe and affirming place to live. Find safe temporary and emergency housing.",
    "url": "https://growingupnyc.cityofnewyork.us/generationnyc/topics/lgbtq/#housing",
    "keywords": "shelter, homeless, homelessness, youth, LGBTQ, temporary housing, emergency, DHS, find a shelter, eviction, evicted",
    "image": "50_lgbtq-youth.png",
    "alt": "A group of LGBTQ youth pose on a roof in New York City.",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support; learn about housing regulations",
    "title": "Your rights as a homebuyer or owner",
    "blurb": "Learn about unfair behavior related to homebuying, like discriminatory real estate ads, appraisal, and mortgage lending.",
    "url": "https://www1.nyc.gov/site/fairhousing/rights-responsibilities/what-do-owners-and-renters-need-to-know.page",
    "keywords": "fair housing, discrimination, homeowner, owner, homeowner, rights, housing rights, mortgage, realtor",
    "image": "IMG36_OwnersRights.png",
    "alt": "Brownstones on a tree-lined block.",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing",
    "title": "Guide for calculating your income",
    "blurb": "Find out how your income is calculated for affordable housing eligibility.",
    "url": "http://www1.nyc.gov/site/hpd/services-and-information/housing-connect-application-guides.page",
    "keywords": "Income, eligibility, income calculator, apply, application, income source, guide, finances, AMI, NYC Housing Connect, Housing Connect, earnings, affordable housing",
    "image": "IMG37_IncomeGuide.png",
    "alt": "Illustration of calculator, pen, and notepad.",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support; get help paying for rental housing; learn about housing regulations",
    "title": "Rent increase regulations for rent-stabilized apartments",
    "blurb": "Find out how much your landlord can raise the rent of your rent stabilized apartment.",
    "url": "https://www1.nyc.gov/site/rentguidelinesboard/index.page",
    "keywords": "rent, rent stabilized, rent increase, rent regulated, lease renewal, NYCRGB, tenants rights, fair housing, preferential rent, Rent Guidelines Board",
    "image": "40_-rent-stabilized-apartments.png",
    "alt": "A hand holds a stack of papers and a set of keys.",
    "universal": false
  },
  {
    "tags": "report a housing maintenance complaint; get help paying for rental housing; find shelter quickly; find eviction or harassment support; learn about housing regulations",
    "title": "Tenant support specialists for help with housing resources",
    "blurb": "Contact the City's Tenant Support Unit for dedicated help with issues like landlord harrassment or home repairs.",
    "url": "http://www1.nyc.gov/nyc-resources/tenant-support-unit.page",
    "keywords": "Tenant Support Unit, counselor, tenants rights, fair housing, temporary housing, homelessness, maintenance, safety, complaint, report, repairs, home-related repairs, eviction, harassment",
    "image": "41_Tenant-Support-Unit.png",
    "alt": "Man wearing a tshirt reading NYC Tenant Support.",
    "universal": false
  },
  {
    "tags": "learn about housing regulations",
    "title": "Information about rent regulated apartments",
    "blurb": "Report or find information about rent regulated units, such as rent history, rent increases, and whether your home is rent stabilized or controlled.",
    "url": "https://hcr.ny.gov/office-rent-administration-ora",
    "keywords": "rent, rent stabilized, rent regulated, rent controlled, rent control, rent increase, lease renewal, NYCRGB, tenants rights, fair housing, state, NYS",
    "image": "42_rent-regulated-apartments.png",
    "alt": "Afternoon sun hits the side of red brick buildings in NYC.",
    "universal": false
  },
  {
    "tags": "report a housing maintenance complaint; find eviction or harassment support; manage a residential property",
    "title": "Property information search",
    "blurb": "Search for building-specific information such as complaints and violations, actions, applications, and inspections.",
    "url": "http://a810-bisweb.nyc.gov/bisweb/bsqpm01.jsp",
    "keywords": "BIS, department of buildings, building information, repairs, construction, permits, complaint, tenants rights, fair housing, violations, inspections, search, property registration, property information",
    "image": "43_Building-information-search.png",
    "alt": "Construction workers wearing reflective vests and hardhats work on a building.",
    "universal": false
  },
  {
    "tags": "learn about housing regulations",
    "title": "Frequently asked questions about housing",
    "blurb": "Find answers to common questions about housing related topics like rent regulation, leases, subletting, and security deposits.",
    "url": "https://www1.nyc.gov/site/rentguidelinesboard/resources/frequently-asked-questions-faqs.page",
    "keywords": "rent, rent controlled, rent control, rent stabilized, rent regulation, rent guidelines, lease, leases, subletting, security deposit, succession, repairs, rent increase, conversion, deregulation, complaint, housing rights, renter, renters, tenant, tenants",
    "image": "44_renters-rights.png",
    "alt": "Buildings of different colors and ages rise above the treeline in NYC.",
    "universal": false
  },
  {
    "tags": "find shelter quickly; find eviction or harassment support",
    "title": "Housing resources for domestic violence victims",
    "blurb": "If you're experiencing domestic violence, get help finding temporary housing, emergency shelter and support services.",
    "url": "https://www1.nyc.gov/site/dhs/prevention/domestic-violence.page",
    "keywords": "No Violence Again, NoVA, domestic violence, abuse, domestic abuse, homelessness, emergency, shelter, DHS, HOPE",
    "image": "45_DV.png",
    "alt": "Someone crosses the street near some brownstones.",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing; find shelter quickly",
    "title": "Housing help for young people",
    "blurb": "Learn how to access housing resources for youth and people ages 18-25 who are leaving foster care.",
    "url": "http://www1.nyc.gov/site/acs/youth/housing.page",
    "keywords": "HAC, ACS, foster care, youth, LGBTQ, transition, permanency, shelter, permanent housing, temporary housing, HRA, apply, finances, find a home, process, application, counselor, process, homeless, homelessness",
    "image": "48_Youth.png",
    "alt": "Children play in a colorful playground.",
    "universal": false
  },
  {
    "tags": "find financial resources for owners; manage a residential property",
    "title": "Residential construction tax benefit programs",
    "blurb": "Tax incentives for property owners and developers.",
    "url": "https://portal.311.nyc.gov/article/?kanumber=KA-02242",
    "keywords": "tax benefit, tax exemption, 421-a, j-51, MCI abatement, major capital improvement abatement, solar electric generating system abatement, udaap",
    "image": "IMG67_tax-benefits",
    "alt": "Newly constructed building",
    "universal": false
  },
  {
    "tags": "find financial resources for owners",
    "title": "State of NY Mortgage Agency",
    "blurb": "Low-interest mortgage loans and programs to help qualified buyers purchase their home.",
    "url": "https://hcr.ny.gov/sonyma",
    "keywords": "down payment, homebuyer, own, buy, first-time homebuyer, homeowner, homeowners, homeownership, grant, homefirst, homebuyers, first-time homebuyers, grants, State, NYS",
    "image": "IMG68_SONYMA",
    "alt": "residential street",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support; learn about housing regulations",
    "title": "Fair Housing NYC",
    "blurb": "Your rights and responsibilities as tenants, homeowners, landlords, and building owners.",
    "url": "https://www1.nyc.gov/site/fairhousing/index.page",
    "keywords": "fair housing, discrimination, fair housing complaint, protected classes",
    "image": "fair-housing-nyc.jpg",
    "alt": "there is no room for housing discrimination in nyc",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing; find shelter quickly; get help paying for rental housing",
    "title": "HUD Resource Locator",
    "blurb": "Find affordable housing and resources near you.",
    "url": "https://resources.hud.gov/",
    "keywords": "find affordable housing opportunities, affordable housing, homesless resources, senior, senios, special needs housing",
    "image": "hud-logo.jpg",
    "alt": "HUD logo",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing",
    "title": "Mitchell-Lama Program",
    "blurb": "Learn about the Mitchell-Lama program that provides affordable rental and cooperative housing to moderate- and middle-income families.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/mitchell-lama-program.page",
    "keywords": "Mitchell-Lama, M-L",
    "image": "IMG6_MitchellLama.png",
    "alt": "A Mitchell-Lama building",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support; get help paying for rental housing; manage a residential property; find financial resources for owners",
    "title": "Adult Protective Services",
    "blurb": "Find information and services for physically and/or mentally impaired adults.",
    "url": "https://www1.nyc.gov/site/hra/help/adult-protective-services.page",
    "keywords": "seniors, adult protective services",
    "image": "adult-protective-services.JPG",
    "alt": "An older woman smiling.",
    "universal": false
  },
  {
    "tags": "learn about housing regulations; manage a residential property",
    "title": "Succession Rights",
    "blurb": "Find information about succession rights for rent-regulated apartments.",
    "url": "https://hcr.ny.gov/succession",
    "keywords": "succession rights, death, inheritance, State, NYS",
    "image": "succession.JPG",
    "alt": "A man reviews paperwork with a couple.",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing; find shelter quickly",
    "title": "City FHEPS",
    "blurb": "Find out how to apply for a rental assistance supplement that helps individuals and families find and keep housing.",
    "url": "https://www1.nyc.gov/site/hra/help/cityfheps.page",
    "keywords": "City FHEPS, FHEPS, rental assistance, HRA",
    "image": "city-fheps.jpg",
    "alt": "A building with blue sky",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing; find shelter quickly; prepare and apply for affordable housing; find financial resources for owners",
    "title": "Resources for Veterans",
    "blurb": "Find housing resources for veterans, including emergency services, rental assistance, and homeownership support.",
    "url": "https://www1.nyc.gov/site/veterans/services/housing.page",
    "keywords": "Veteran, Veterans",
    "image": "IMG27_TaxbreaksSpecial.jpg",
    "alt": "A Veteran smiling",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Property Tax Payment Assistance",
    "blurb": "Find information about how to pay your property taxes.",
    "url": "https://portal.311.nyc.gov/article/?kanumber=KA-01251",
    "keywords": "tax, taxes, tax assistance, pay taxes, property taxes",
    "image": "property-taxes.jpg",
    "alt": "A residential street.",
    "universal": false
  },
  {
    "tags": "manage a residential property",
    "title": "Clear DOB Violations",
    "blurb": "Clear violations with the Department of Buildings (DOB).",
    "url": "https://www1.nyc.gov/site/buildings/industry/resolving-dob-violations.page#:~:text=To%20remove%20a%20DOB%20violation%20from%20a%20property,your%20property%2C%20access%20the%20Buildings%20Information%20System%20%28BIS%29",
    "keywords": "DOB, violations, buiding violations",
    "image": "dob-violation.JPG",
    "alt": "A paper violation form",
    "universal": false
  },
  {
    "tags": "manage a residential property",
    "title": "Property Management Classes",
    "blurb": "Find information about upcoming property management classes.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/classes.page",
    "keywords": "Owner, classes, owner training, landlord support",
    "image": "property-management-class.jpg",
    "alt": "A class in progress in front of a presentation on a screen.",
    "universal": false
  },
  {
    "tags": "manage a residential property",
    "title": "Rent Registration",
    "blurb": "Owners of rent regulated apartments can submit various applications on Rent Connect.",
    "url": "https://rent.hcr.ny.gov/RentConnect/Owner/OwnerOverview",
    "keywords": "Rent registration, rent connect, owner, owners, State, NYS",
    "image": "rent-registration.JPG",
    "alt": "Person typing on a computer",
    "universal": false
  },
  {
    "tags": "learn about housing regulations; manage a residential property",
    "title": "NYC's Zoning and Land Use Map (ZoLa)",
    "blurb": "ZoLa provides a simple way to research zoning regulations.",
    "url": "https://zola.planning.nyc.gov/about/#9.72/40.7125/-73.733",
    "keywords": "zoning, tax map, property information, records, hpdonline, violations, land use",
    "image": "zola.JPG",
    "alt": "Image of ZoLa map",
    "universal": false
  },
  {
    "tags": "learn about housing regulations; manage a residential property",
    "title": "HPD Online",
    "blurb": "Find building information about complaints and litigation, property registration, violations and charges, and block and lot information.",
    "url": "https://www1.nyc.gov/site/hpd/about/hpd-online.page",
    "keywords": "condo lot, building lot, BBL, building history, violations, complaints, property registration",
    "image": "hpd-online.JPG",
    "alt": "Screenshot of HPD Online portal",
    "universal": false
  },
  {
    "tags": "learn about housing regulations",
    "title": "NYC Open Data",
    "blurb": "Open Data is free public data published by New York City agencies and other partners",
    "url": "https://opendata.cityofnewyork.us/",
    "keywords": "Data, open data, research",
    "image": "nyc-open-data.jpg",
    "alt": "Icons of people and items in bubbles",
    "universal": false
  },
  {
    "tags": "learn about housing regulations; manage a residential property",
    "title": "Violation e-Certification",
    "blurb": "Certify HPD violations and Housing Quality Standards (HQS) failures online",
    "url": "https://webapps.hpdnyc.org/eSignature/Login.aspx",
    "keywords": "violations, owner, certification, e-certification, HQS failures, Housing Quality Standards failures",
    "image": "violation-ecertification.jpg",
    "alt": "Screenshot of eCertification portal",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Multifamily Water Assistance Program (MWAP)",
    "blurb": "MWAP provides a water and sewer credit for eligible HPD- or HDC-assisted affordable multifamily housing projects.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/multifamily-water-assistance-program.page",
    "keywords": "Water, water assistance, utilities, debt, water credit, sewer credit",
    "image": "mwap.jpg",
    "alt": "Graphic with the title of the program",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Water Debt Assistance Program (WDAP)",
    "blurb": "WDAP may remove properties from the 90-day lien sale until the property is sold, refinanced, or the owner has the ability to pay the debt.",
    "url": "https://www1.nyc.gov/site/dep/pay-my-bills/water-debt-assistance-program.page",
    "keywords": "Water, water assistance, utilities, debt, DEP, tax lien sale, lien sale",
    "image": "wdap.jpg",
    "alt": "A City staff person helping a New Yorkers",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Water Conservation and Reuse Grants",
    "blurb": "The Pilot Program provides commercial, industrial, and multifamily residential property owners with incentives to install fixture retrofits and other water efficiency technologies.",
    "url": "https://www1.nyc.gov/site/dep/water/water-conservation-reuse-grants.page",
    "keywords": "Water, water assistance, utilities, debt, DEP, grants",
    "image": "water-conservation-resuse-grant.jpg",
    "alt": "A leaking faucet",
    "universal": false
  },
  {
    "tags": "find financial resources for owners; prepare and apply for affordable housing",
    "title": "NYC Financial Empowerment Centers",
    "blurb": "Centers provide FREE one-on-one professional, financial counseling and coaching to support you in reaching your goals.",
    "url": "https://www1.nyc.gov/site/dca/consumers/get-free-financial-counseling.page",
    "keywords": "Financial empowerment, money, counselling, finances",
    "image": "financial-empowerment-center.jpg",
    "alt": "Logo of Financial Empowerment Center",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "FloodHelpNY",
    "blurb": "Learn more about floodplains and how to protect your property from flooding.",
    "url": "https://www.floodhelpny.org/",
    "keywords": "floods, floodplain, owner, landlord, insurance, backwater valve program, homeowner",
    "image": "floodhelpny.JPG",
    "alt": "Map of flood rish in NYC",
    "universal": false
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Home Support Unit (HSU)",
    "blurb": "HSU works with landlords, real estate brokers, and property managers to lease vacant apartments to qualified New Yorkers receiving rental assistance.",
    "url": "https://www1.nyc.gov/nyc-resources/home-support-unit.page",
    "keywords": "Home Support Unit, owner support, HSU, section 8, SOTA, voucher",
    "image": "nyc-home-support-unit.jpg",
    "alt": "Graphic of multifamily buildings",
    "universal": false
  },
  {
    "tags": "get help paying for rental housing; find eviction or harassment support; manage a residential property",
    "title": "NYS Rent Connect",
    "blurb": "Tenants and owners of rent stabilizied apartments can request rent history, file forms, and more.",
    "url": "https://rent.hcr.ny.gov/RentConnect/Welcome",
    "keywords": "NYS, State, rent-stabilizied, tenants, owners, rent, registration",
    "image": "nys-rent-connect.jpg",
    "alt": "Graphic of a person in front of a skyline",
    "universal": false
  },
  {
    "tags": "find eviction or harassment support",
    "title": "Tenant Harassment Resources",
    "blurb": "Resources and information for tenants who may be experiencing harassment.",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/tenant-harassment.page",
    "keywords": "Tenant harassment, anti-harassment unit",
    "image": "stop-harassment.jpg",
    "alt": "Text graphic of a hand that reads stop harassment",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing; manage a residential property",
    "title": "AffordableHousing.com",
    "blurb": "Formerly GoSection8.com, find or list rental units for the Section 8 program",
    "url": "https://www.affordablehousing.com/",
    "keywords": "Section 8, affordablehousing.com, gosection8.com",
    "image": "affordable-housing-logo.jpg",
    "alt": "Text graphic of AffordableHousing.com logo",
    "universal": false
  },
  {
    "tags": "prepare and apply for affordable housing; find shelter quickly; get help paying for rental housing; find financial resources for owners; report a housing maintenance complaint; manage a residential property; find eviction or harassment support; learn about housing regulations",
    "title": "Contact someone directly",
    "blurb": "Didn't find what you were looking for? Contact someone directly who can help.",
    "url": "http://www1.nyc.gov/site/housingportal/have-a-question/have-a-question.page",
    "keywords": "contact, help, customer service, emergency, representative",
    "image": "IMG38_ContactSomeone.png",
    "alt": "An older woman smiles.",
    "universal": true
  },
  {
    "tags": "manage a residential property; find financial resources for owners",
    "title": "Sustainability",
    "blurb": "Learn about sustainability initiatives and resources",
    "url": "https://www1.nyc.gov/site/hpd/services-and-information/sustainability.page",
    "keywords": "energy, energy efficiency, local law 97, LL97, sustainability, green, carbon, emissions, retrofits, climate, climate change",
    "image": "sustainability.jpg",
    "alt": "Rendering of passive house",
    "universal": true
  }
];
