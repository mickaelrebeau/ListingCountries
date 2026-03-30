<script setup lang="ts">
defineProps<{
  message?: string
}>()

const emit = defineEmits<{
  retry: []
}>()
</script>

<template>
  <UCard class="error-state">
    <div class="error-state__content">
      <UIcon name="i-heroicons-exclamation-triangle" size="48" class="error-state__icon" />
      <p class="error-state__message">
        {{ message || 'Une erreur est survenue lors du chargement des données.' }}
      </p>
      <UButton
        label="Réessayer"
        icon="i-heroicons-arrow-path"
        variant="soft"
        @click="emit('retry')"
      />
    </div>
  </UCard>
</template>

<style scoped>
.error-state__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  text-align: center;
}

.error-state__icon {
  color: var(--ui-error);
}

.error-state__message {
  margin: 0;
  opacity: 0.8;
}
</style>
