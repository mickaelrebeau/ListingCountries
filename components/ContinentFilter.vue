<script setup lang="ts">
import type { Continent } from '~/types/country'

const ALL = 'all'

const model = defineModel<string>({ default: '' })

const props = defineProps<{
  continents: Continent[]
}>()

const items = computed(() => [
  { label: 'Tous les continents', value: ALL },
  ...props.continents.map(c => ({ label: c.name, value: c.code })),
])

const selected = computed({
  get: () => model.value || ALL,
  set: (val: string) => { model.value = val === ALL ? '' : val },
})
</script>

<template>
  <div class="continent-filter">
    <USelectMenu
      v-model="selected"
      :items="items"
      value-key="value"
      icon="i-heroicons-globe-alt"
      aria-label="Filtrer par continent"
    >
      <template #item="{ item }">
        <span class="continent-filter__item">
          {{ item.label }}
        </span>
      </template>
    </USelectMenu>
  </div>
</template>

<style scoped>
.continent-filter :deep(button) {
  min-width: 220px;
  padding: 0.625rem 0.875rem;
  font-size: 0.9375rem;
}

.continent-filter :deep([role="listbox"]) {
  padding: 0.375rem;
  border-radius: 0.625rem;
}

.continent-filter :deep([role="option"]) {
  padding: 0.5rem 0.75rem;
  border-radius: 0.375rem;
  font-size: 0.9375rem;
  transition: background-color 0.1s ease;
}

.continent-filter__item {
  font-weight: 500;
}
</style>
