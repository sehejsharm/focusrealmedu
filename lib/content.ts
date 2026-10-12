export const NAV_LINKS = [
  { href: "#problem", label: "Problem" },
  { href: "#solution", label: "Solution" },
  { href: "#product", label: "Product" },
  { href: "#market", label: "Market" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
] as const;

export const CONTACT = {
  email: "admin@focusrealm.org",
  phone: "+91 93221 07991",
  phoneHref: "tel:+919322107991",
  site: "focusrealm.org",
  siteHref: "https://focusrealm.org",
  demoHref:
    "mailto:admin@focusrealm.org?subject=Focus%20Realm%20walkthrough%20request",
};

/**
 * Numbered notes referenced by superscripts across the page.
 * TODO: replace each `source` with the original publication once confirmed.
 */
export const NOTES = [
  {
    id: 1,
    text: "Share of Indian teachers reporting high burnout; up to 40% of the working day spent on non-teaching administrative work.",
    source: "As cited in the Focus Realm education research brief.",
  },
  {
    id: 2,
    text: "Share of students describing the curriculum as outdated or rote.",
    source: "As cited in the Focus Realm education research brief.",
  },
  {
    id: 3,
    text: "Share of Indian teenagers reporting high academic stress.",
    source: "As cited in the Focus Realm education research brief.",
  },
  {
    id: 4,
    text: "Share of students who feel disengaged when instruction pace does not match their readiness.",
    source: "As cited in the Focus Realm education research brief.",
  },
  {
    id: 5,
    text: "Projected global learning management system market size by 2030, at an 18.3% CAGR.",
    source: "As cited in the Focus Realm market research brief.",
  },
  {
    id: 6,
    text: "Projected size of India's EdTech sector.",
    source: "As cited in the Focus Realm market research brief.",
  },
] as const;
