export interface EnglishSpeakingCountry {
  name: string;
  flag: string;
}

/**
 * "Majority" = English is the first/dominant language for most of the
 * population (the "inner circle" in linguistics terms, without the
 * jargon). "Official" = English has official-language status and is
 * widely used in government, education, or business, alongside one or
 * more other languages that most people actually grow up speaking.
 * Deliberately not exhaustive of every territory with any English status —
 * curated for accuracy over completeness.
 */
export const MAJORITY_ENGLISH_COUNTRIES: EnglishSpeakingCountry[] = [
  { name: "United Kingdom", flag: "🇬🇧" },
  { name: "United States", flag: "🇺🇸" },
  { name: "Ireland", flag: "🇮🇪" },
  { name: "Canada", flag: "🇨🇦" },
  { name: "Australia", flag: "🇦🇺" },
  { name: "New Zealand", flag: "🇳🇿" },
];

export const OFFICIAL_ENGLISH_COUNTRIES: EnglishSpeakingCountry[] = [
  { name: "Antigua and Barbuda", flag: "🇦🇬" },
  { name: "Bahamas", flag: "🇧🇸" },
  { name: "Barbados", flag: "🇧🇧" },
  { name: "Belize", flag: "🇧🇿" },
  { name: "Botswana", flag: "🇧🇼" },
  { name: "Dominica", flag: "🇩🇲" },
  { name: "Eswatini", flag: "🇸🇿" },
  { name: "Fiji", flag: "🇫🇯" },
  { name: "Ghana", flag: "🇬🇭" },
  { name: "Grenada", flag: "🇬🇩" },
  { name: "Guyana", flag: "🇬🇾" },
  { name: "India", flag: "🇮🇳" },
  { name: "Jamaica", flag: "🇯🇲" },
  { name: "Kenya", flag: "🇰🇪" },
  { name: "Lesotho", flag: "🇱🇸" },
  { name: "Liberia", flag: "🇱🇷" },
  { name: "Malawi", flag: "🇲🇼" },
  { name: "Malta", flag: "🇲🇹" },
  { name: "Namibia", flag: "🇳🇦" },
  { name: "Nigeria", flag: "🇳🇬" },
  { name: "Pakistan", flag: "🇵🇰" },
  { name: "Papua New Guinea", flag: "🇵🇬" },
  { name: "Philippines", flag: "🇵🇭" },
  { name: "Rwanda", flag: "🇷🇼" },
  { name: "Saint Kitts and Nevis", flag: "🇰🇳" },
  { name: "Saint Lucia", flag: "🇱🇨" },
  { name: "Saint Vincent and the Grenadines", flag: "🇻🇨" },
  { name: "Samoa", flag: "🇼🇸" },
  { name: "Sierra Leone", flag: "🇸🇱" },
  { name: "Singapore", flag: "🇸🇬" },
  { name: "South Africa", flag: "🇿🇦" },
  { name: "Sri Lanka", flag: "🇱🇰" },
  { name: "Tanzania", flag: "🇹🇿" },
  { name: "Trinidad and Tobago", flag: "🇹🇹" },
  { name: "Uganda", flag: "🇺🇬" },
  { name: "Vanuatu", flag: "🇻🇺" },
  { name: "Zambia", flag: "🇿🇲" },
  { name: "Zimbabwe", flag: "🇿🇼" },
];
