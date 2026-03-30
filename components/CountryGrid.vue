<script setup lang="ts">
import type { Country } from '~/types/country'

defineProps<{
  countries: Pick<Country, 'code' | 'name' | 'emoji' | 'continent'>[]
}>()
</script>

<template>
  <div v-if="countries.length" class="country-grid">
    <CountryCard
      v-for="country in countries"
      :key="country.code"
      :country="country"
    />
  </div>
  <div v-else class="country-grid__empty">
    <UIcon name="i-heroicons-magnifying-glass" size="48" />
    <p>Aucun pays ne correspond à votre recherche.</p>
  </div>
</template>

<style scoped>
.country-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}

.country-grid__empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 4rem 1rem;
  opacity: 0.5;
  text-align: center;
}
</style>
