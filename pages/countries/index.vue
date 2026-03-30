<script setup lang="ts">
useHead({ title: 'Pays - CountryListing' })

const route = useRoute()
const router = useRouter()

const search = ref((route.query.q as string) || '')
const continent = ref((route.query.continent as string) || '')

const { data: countriesData, status: countriesStatus, error: countriesError, refresh: refreshCountries } = useCountries()
const { data: continentsData } = useContinents()

const countries = computed(() => countriesData.value?.countries ?? [])
const continents = computed(() => continentsData.value?.continents ?? [])

const filteredCountries = computed(() => {
  let result = countries.value

  if (search.value) {
    const query = search.value.toLowerCase()
    result = result.filter(c => c.name.toLowerCase().includes(query))
  }

  if (continent.value) {
    result = result.filter(c => c.continent.code === continent.value)
  }

  return result
})

watch([search, continent], ([q, c]) => {
  const query: Record<string, string> = {}
  if (q) query.q = q
  if (c) query.continent = c
  router.replace({ query })
})
</script>

<template>
  <div>
    <h1 class="page-title">
      Pays
    </h1>

    <div class="filters">
      <div class="filters__search">
        <SearchInput v-model="search" />
      </div>
      <div class="filters__continent">
        <ContinentFilter v-model="continent" :continents="continents" />
      </div>
    </div>

    <div v-if="filteredCountries.length || !countriesStatus || countriesStatus === 'success'" class="results-count">
      {{ filteredCountries.length }} pays trouvé{{ filteredCountries.length > 1 ? 's' : '' }}
    </div>

    <LoadingSkeleton v-if="countriesStatus === 'pending'" />

    <ErrorState
      v-else-if="countriesError"
      :message="countriesError.message"
      @retry="refreshCountries()"
    />

    <CountryGrid v-else :countries="filteredCountries" />
  </div>
</template>

<style scoped>
.page-title {
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.filters {
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
  align-items: stretch;
  padding: 1rem;
  border-radius: 0.75rem;
  background: var(--ui-bg-elevated);
}

.filters__search {
  flex: 1;
  min-width: 220px;
}

.filters__continent {
  min-width: 220px;
}

.results-count {
  font-size: 0.875rem;
  opacity: 0.6;
  margin-bottom: 1rem;
}
</style>
