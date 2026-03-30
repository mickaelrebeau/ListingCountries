<script setup lang="ts">
const route = useRoute()
const code = route.params.code as string

const { data, status, error, refresh } = useCountryDetail(code)

const country = computed(() => data.value?.country)

useHead({
  title: computed(() =>
    country.value ? `${country.value.name} - CountryListing` : 'CountryListing',
  ),
})

const backQuery = computed(() => {
  const q: Record<string, string> = {}
  if (route.query.q) q.q = route.query.q as string
  if (route.query.continent) q.continent = route.query.continent as string
  return q
})
</script>

<template>
  <div>
    <div class="back-nav">
      <UButton
        :to="{ path: '/countries', query: backQuery }"
        variant="ghost"
        icon="i-heroicons-arrow-left"
        label="Retour à la liste"
      />
    </div>

    <div v-if="status === 'pending'" class="detail-skeleton">
      <div class="detail-skeleton__header">
        <USkeleton class="detail-skeleton__emoji" />
        <div>
          <USkeleton class="detail-skeleton__name" />
          <USkeleton class="detail-skeleton__badge" />
        </div>
      </div>
      <USeparator class="detail-skeleton__sep" />
      <div class="detail-skeleton__grid">
        <UCard v-for="i in 4" :key="i">
          <USkeleton class="detail-skeleton__label" />
          <USkeleton class="detail-skeleton__value" />
        </UCard>
      </div>
    </div>

    <ErrorState
      v-else-if="error"
      :message="error.message"
      @retry="refresh()"
    />

    <template v-else-if="country">
      <CountryDetail :country="country" />
      <CountryNeighbors
        :countries="country.continent.countries"
        :current-code="country.code"
      />
    </template>
  </div>
</template>

<style scoped>
.back-nav {
  margin-bottom: 1.5rem;
}

.detail-skeleton__header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.detail-skeleton__emoji {
  width: 4rem;
  height: 4rem;
  border-radius: 0.75rem;
}

.detail-skeleton__name {
  height: 2rem;
  width: 200px;
  border-radius: 0.375rem;
  margin-bottom: 0.5rem;
}

.detail-skeleton__badge {
  height: 1.25rem;
  width: 60px;
  border-radius: 0.375rem;
}

.detail-skeleton__sep {
  margin: 1.5rem 0;
}

.detail-skeleton__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.detail-skeleton__label {
  height: 0.75rem;
  width: 60%;
  border-radius: 0.25rem;
  margin-bottom: 0.5rem;
}

.detail-skeleton__value {
  height: 1rem;
  width: 80%;
  border-radius: 0.25rem;
}
</style>
