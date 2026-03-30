import { gql } from 'graphql-request'
import type { ContinentsResponse } from '~/types/country'

const CONTINENTS_QUERY = gql`
  query GetContinents {
    continents {
      code
      name
    }
  }
`

export function useContinents() {
  return useGraphql<ContinentsResponse>('continents', CONTINENTS_QUERY)
}
