interface CountryData {
    code: string;
    name: string;
    dial: string;
    flag: string;
    digits: number;
    format: string;
    continent?: string;
    capital?: string;
    currency?: string;
    languages?: string[];
}
declare const COUNTRIES: CountryData[];
/**
 * Format a raw phone number string based on a specific country format template.
 * @param value The raw string containing numbers
 * @param format The format string where "#" represents a digit (e.g. "## ### ####")
 * @returns The formatted phone number string
 */
declare function formatPhone(value: string, format: string): string;
/**
 * Validates a phone number based on the expected number of digits for a given country.
 * @param phone The input phone string
 * @param country The CountryData object
 * @returns True if the number of digits matches the expected digits for the country
 */
declare function validatePhone(phone: string, country: CountryData): boolean;
/**
 * Helper to get a CountryData object by its 2-letter ISO code.
 * @param code The 2-letter ISO country code (e.g. "IN", "US")
 * @returns The matching CountryData or undefined
 */
declare function getCountryByCode(code: string): CountryData | undefined;
/**
 * Tries to guess the country based on the dial code present in a full phone number.
 * Note: Some dial codes are shared (e.g. +1 for US/Canada). This returns the first match,
 * usually the primary country for that dial code.
 * @param phone The raw phone string starting with a country code (e.g. "+919876543210")
 * @returns The guessed CountryData or undefined
 */
declare function guessCountryByNumber(phone: string): CountryData | undefined;
/**
 * Formats a local phone number into the international E.164 standard format.
 * @param phone The local phone number (e.g. "9876543210")
 * @param country The CountryData object
 * @returns The E.164 formatted string (e.g. "+919876543210")
 */
declare function formatAsE164(phone: string, country: CountryData): string;
/**
 * Searches for countries by name, iso code, or dial code.
 * Perfect for building dropdown filtering and search bars.
 * @param query The search query string
 * @returns Array of matching CountryData objects
 */
declare function searchCountries(query: string): CountryData[];
/**
 * Generates an array mask based on the country's format.
 * Useful for integrating with masked input libraries (like react-text-mask).
 * @param format The country's format string (e.g. "## ### ####")
 * @returns Array of strings and RegExps (e.g. [/\d/, /\d/, ' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/])
 */
declare function getMaskArray(format: string): Array<string | RegExp>;
/**
 * Returns all countries belonging to a specific continent.
 * @param continent The continent code (e.g., 'AS', 'EU', 'AF', 'NA', 'SA', 'OC', 'AN')
 * @returns Array of CountryData objects
 */
declare function getCountriesByContinent(continent: string): CountryData[];
/**
 * Returns all countries that use a specific currency.
 * @param currency The 3-letter currency code (e.g., 'USD', 'EUR', 'INR')
 * @returns Array of CountryData objects
 */
declare function getCountriesByCurrency(currency: string): CountryData[];
/**
 * Returns all countries that speak a specific language.
 * @param language The 2-letter language code (e.g., 'en', 'es', 'fr')
 * @returns Array of CountryData objects
 */
declare function getCountriesByLanguage(language: string): CountryData[];
/**
 * Returns a unique list of all currencies used globally.
 * @returns Array of unique currency strings (e.g., 'USD', 'EUR')
 */
declare function getAllCurrencies(): string[];
/**
 * Returns a unique list of all languages spoken globally.
 * @returns Array of unique language strings (e.g., 'en', 'es')
 */
declare function getAllLanguages(): string[];
/**
 * Returns a unique list of all continents.
 * @returns Array of unique continent strings
 */
declare function getAllContinents(): string[];

export { COUNTRIES, type CountryData, formatAsE164, formatPhone, getAllContinents, getAllCurrencies, getAllLanguages, getCountriesByContinent, getCountriesByCurrency, getCountriesByLanguage, getCountryByCode, getMaskArray, guessCountryByNumber, searchCountries, validatePhone };
