<script setup lang="ts">
import type { Country, Continent } from '~/types/country'

defineProps<{
  country: Country & {
    continent: Continent & {
      countries: Pick<Country, 'code' | 'name' | 'emoji'>[]
    }
  }
}>()
</script>

<template>
  <div class="detail">
    <div class="detail__header">
      <span class="detail__emoji">{{ country.emoji }}</span>
      <div>
        <h1 class="detail__name">{{ country.name }}</h1>
        <UBadge variant="subtle" size="lg">{{ country.code }}</UBadge>
      </div>
    </div>

    <USeparator class="detail__separator" />

    <div class="detail__grid">
      <UCard class="detail__card">
        <div class="detail__card-label">
          <UIcon name="i-heroicons-globe-alt" size="18" />
          Continent
        </div>
        <p class="detail__card-value">{{ country.continent.name }}</p>
      </UCard>

      <UCard v-if="country.capital" class="detail__card">
        <div class="detail__card-label">
          <UIcon name="i-heroicons-building-library" size="18" />
          Capitale
        </div>
        <p class="detail__card-value">{{ country.capital }}</p>
      </UCard>

      <UCard v-if="country.currency" class="detail__card">
        <div class="detail__card-label">
          <UIcon name="i-heroicons-banknotes" size="18" />
          Devise
        </div>
        <p class="detail__card-value">{{ country.currency }}</p>
      </UCard>

      <UCard v-if="country.languages.length" class="detail__card">
        <div class="detail__card-label">
          <UIcon name="i-heroicons-language" size="18" />
          Langue{{ country.languages.length > 1 ? 's' : '' }}
        </div>
        <p class="detail__card-value">
          {{ country.languages.map(l => l.name).join(', ') }}
        </p>
      </UCard>
    </div>
  </div>
</template>

<style scoped>
.detail__header {
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.detail__emoji {
  font-size: 4rem;
  line-height: 1;
}

.detail__name {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 0.5rem;
}

.detail__separator {
  margin: 1.5rem 0;
}

.detail__grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 1rem;
}

.detail__card-label {
  display: flex;
  align-items: center;
  gap: 0.375rem;
  font-size: 0.8125rem;
  opacity: 0.6;
  margin-bottom: 0.375rem;
}

.detail__card-value {
  font-size: 1.0625rem;
  font-weight: 600;
  margin: 0;
}
</style>
