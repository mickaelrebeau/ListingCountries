<script setup lang="ts">
import type { Country } from '~/types/country'

const props = defineProps<{
  countries: Pick<Country, 'code' | 'name' | 'emoji'>[]
  currentCode: string
}>()

const neighbors = computed(() =>
  props.countries
    .filter(c => c.code !== props.currentCode)
    .slice(0, 5),
)
</script>

<template>
  <section v-if="neighbors.length" class="neighbors">
    <h2 class="neighbors__title">5 pays du même continent</h2>
    <div class="neighbors__list">
      <NuxtLink
        v-for="country in neighbors"
        :key="country.code"
        :to="`/countries/${country.code}`"
        class="neighbors__card"
      >
        <UCard>
          <div class="neighbors__card-content">
            <span class="neighbors__emoji">{{ country.emoji }}</span>
            <div>
              <p class="neighbors__name">{{ country.name }}</p>
              <UBadge variant="subtle" size="xs">{{ country.code }}</UBadge>
            </div>
          </div>
        </UCard>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
.neighbors {
  margin-top: 2.5rem;
}

.neighbors__title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0 0 1rem;
}

.neighbors__list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 0.75rem;
}

.neighbors__card {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: transform 0.15s ease;
}

.neighbors__card:hover {
  transform: translateY(-2px);
}

.neighbors__card-content {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.neighbors__emoji {
  font-size: 1.75rem;
  line-height: 1;
}

.neighbors__name {
  font-weight: 600;
  font-size: 0.9375rem;
  margin: 0 0 0.25rem;
}
</style>
