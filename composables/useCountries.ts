import { gql } from 'graphql-request'
import type { CountriesResponse } from '~/types/country'

const COUNTRIES_QUERY = gql`
  query GetCountries {
    countries {
      code
      name
      emoji
      continent {
        code
        name
      }
    }
  }
`

export function useCountries() {
  return useGraphql<CountriesResponse>('countries', COUNTRIES_QUERY)
}
