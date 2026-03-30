import { GraphQLClient } from 'graphql-request'
import type { RequestDocument, Variables } from 'graphql-request'

const GRAPHQL_ENDPOINT = 'https://countries.trevorblades.com/graphql'

const client = new GraphQLClient(GRAPHQL_ENDPOINT)

export function useGraphql<T>(document: RequestDocument, variables?: Variables) {
  return useAsyncData<T>(
    JSON.stringify({ document, variables }),
    () => client.request<T>(document, variables),
  )
}
