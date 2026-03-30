export interface Language {
  code: string
  name: string
}

export interface Country {
  code: string
  name: string
  emoji: string
  capital: string
  currency: string
  languages: Language[]
  continent: Continent
}

export interface Continent {
  code: string
  name: string
  countries?: Pick<Country, 'code' | 'name' | 'emoji'>[]
}

export interface CountriesResponse {
  countries: Country[]
}

export interface ContinentsResponse {
  continents: Continent[]
}

export interface CountryDetailResponse {
  country: Country & {
    continent: Continent & {
      countries: Pick<Country, 'code' | 'name' | 'emoji'>[]
    }
  }
}
