import { gql } from 'graphql-request'
import type { CountryDetailResponse } from '~/types/country'

const COUNTRY_DETAIL_QUERY = gql`
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      emoji
      capital
      currency
      languages {
        code
        name
      }
      continent {
        code
        name
        countries {
          code
          name
          emoji
        }
      }
    }
  }
`

export function useCountryDetail(code: string) {
  return useGraphql<CountryDetailResponse>(
    `country-${code}`,
    COUNTRY_DETAIL_QUERY,
    { code },
  )
}
