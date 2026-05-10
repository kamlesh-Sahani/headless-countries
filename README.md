# headless-countries 🌍

📚 **[Documentation & Interactive Demo](https://headless-countries.vercel.app/)**

A massive, lightweight, headless utility package providing comprehensive data for all 247 recognized world countries and territories. 

Build anything from dynamic country selectors, currency pickers, and language filters, to complete phone number validation and masking systems.

**Zero UI dependencies.** You bring your own UI (React, Vue, Svelte, Vanilla JS, etc.) and use this data to power your apps.

## Installation

```bash
npm install headless-countries
```

## 🚀 Key Features

### 🌎 Universal Country Data
Data for **247 ISO 3166-1** countries and territories, including:
- **`name`**: Full country name (e.g. `Japan`)
- **`code`**: ISO alpha-2 country code (e.g. `JP`)
- **`flag`**: Native emoji flag (e.g. 🇯🇵)
- **`continent`**: Continent abbreviation (e.g. `AS` for Asia)
- **`capital`**: Capital city (e.g. `Tokyo`)
- **`currency`**: Primary 3-letter currency code (e.g. `JPY`)
- **`languages`**: Array of spoken languages (e.g. `['ja']`)

### 📱 Phone Number Utilities
- **`dial`**: International dial code (e.g. `+81`)
- **`digits`**: Expected number of digits for local numbers
- **`format`**: Localized visual format (e.g. `## #### ####`)
- **`formatPhone()`**: Maps raw digits to a country's localized format.
- **`validatePhone()`**: Checks if a given input has the exact required digits.
- **`guessCountryByNumber()`**: Detect the country dynamically from a full phone number.
- **`formatAsE164()`**: Convert local numbers into E.164 standard format for API submissions.
- **`getMaskArray()`**: Generate regex array masks out-of-the-box (ideal for `react-text-mask`).

### 🔍 Advanced Filtering & Search
- **`searchCountries(query)`**: Search across names, ISO codes, and dial codes.
- **`getCountriesByContinent(continent)`**: Filter by continent.
- **`getCountriesByCurrency(currency)`**: Find all countries using a specific currency.
- **`getCountriesByLanguage(language)`**: Find all countries that speak a specific language.
- **`getAllCurrencies()`, `getAllLanguages()`, `getAllContinents()`**: Get unique sets for building dropdown filters.

---

## 💻 Usage & Examples

### 1. Basic Country Data
```typescript
import { COUNTRIES, getCountryByCode } from 'headless-countries';

console.log(getCountryByCode('AF'));
/*
  {
    code: 'AF',
    name: 'Afghanistan',
    dial: '+93',
    flag: '🇦🇫',
    digits: 9,
    format: '## ### ####',
    continent: 'AS',
    capital: 'Kabul',
    currency: 'AFN',
    languages: ['ps', 'uz', 'tk']
  }
*/
```

### 2. Geographical Filtering
Perfect for building contextual forms.
```typescript
import { 
  getCountriesByContinent, 
  getCountriesByCurrency,
  getCountriesByLanguage
} from 'headless-countries';

// Get all countries in Europe
const europeanCountries = getCountriesByContinent('EU');

// Find who uses the Euro
const euroZone = getCountriesByCurrency('EUR');

// Find all English speaking countries
const englishSpeaking = getCountriesByLanguage('en');
```

### 3. Phone Number Processing
Build a world-class phone input.
```typescript
import { 
  formatPhone, 
  validatePhone, 
  guessCountryByNumber,
  formatAsE164,
  getCountryByCode,
  getMaskArray
} from 'headless-countries';

const country = getCountryByCode('IN'); // India

// Format a raw string
console.log(formatPhone('9876543210', country.format)); // "98765 43210"

// Validate length
console.log(validatePhone('123', country)); // false

// Convert to E.164 for your database (e.g. +919876543210)
console.log(formatAsE164('9876543210', country)); 

// Auto-detect a country from user input
const detected = guessCountryByNumber('+12125550198');
console.log(detected.name); // "United States"

// Generate a mask for input masking libraries
console.log(getMaskArray(country.format)); 
// [/\d/, /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, /\d/]
```

### 4. Search and Dropdown Helpers
```typescript
import { 
  searchCountries, 
  getAllCurrencies, 
  getAllLanguages 
} from 'headless-countries';

// Fuzzy search (matches name, code, dial)
const searchResults = searchCountries('united'); 
// Returns: UAE, United Kingdom, United States, etc.

// Get arrays of all unique global values for your `<select>` elements
const currencies = getAllCurrencies(); // ['AED', 'AFN', 'ALL', 'AMD', ...]
const languages = getAllLanguages();   // ['aa', 'ab', 'ae', 'af', 'ak', ...]
```

## 🛡️ Types

```typescript
export interface CountryData {
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
```

## 📄 License
MIT License. Free for personal and commercial use.
