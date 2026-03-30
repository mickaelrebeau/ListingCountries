<script setup lang="ts">
import type { Country } from '~/types/country'

defineProps<{
  country: Pick<Country, 'code' | 'name' | 'emoji' | 'continent'>
}>()
</script>

<template>
  <NuxtLink :to="`/countries/${country.code}`" class="country-card">
    <UCard>
      <div class="country-card__emoji">
        {{ country.emoji }}
      </div>
      <div class="country-card__info">
        <p class="country-card__name">
          {{ country.name }}
        </p>
        <div class="country-card__meta">
          <UBadge variant="subtle" size="sm">
            {{ country.code }}
          </UBadge>
          <span class="country-card__continent">
            {{ country.continent.name }}
          </span>
        </div>
      </div>
    </UCard>
  </NuxtLink>
</template>

<style scoped>
.country-card {
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e0e0e0;
  border-radius: 0.5rem;
  padding: .5rem 1rem;
  background-color: #fff;
  color: #333;
}

.country-card:hover {
  transform: translateY(-2px);
}

.country-card__emoji {
  font-size: 2.5rem;
  line-height: 1;
  margin-bottom: 0.75rem;
}

.country-card__info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.country-card__name {
  font-weight: 600;
  font-size: 1rem;
  margin: 0;
}

.country-card__meta {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.country-card__continent {
  font-size: 0.8rem;
  opacity: 0.6;
}
</style>
