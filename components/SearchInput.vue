<script setup lang="ts">
const model = defineModel<string>({ default: '' })

let timeout: ReturnType<typeof setTimeout> | null = null
const internal = ref(model.value)

watch(model, (val) => {
  if (val !== internal.value) {
    internal.value = val
  }
})

function onInput(value: string) {
  internal.value = value
  if (timeout) clearTimeout(timeout)
  timeout = setTimeout(() => {
    model.value = value
  }, 300)
}

onUnmounted(() => {
  if (timeout) clearTimeout(timeout)
})
</script>

<template>
  <div class="search-input">
    <UInput
      :model-value="internal"
      placeholder="Rechercher un pays…"
      aria-label="Rechercher un pays"
      icon="i-heroicons-magnifying-glass"
      variant="outline"
      size="lg"
      @update:model-value="onInput"
    />
  </div>
</template>

<style scoped>
.search-input :deep(input) {
  padding: 0.625rem 0.875rem;
  font-size: 0.9375rem;
}
</style>
