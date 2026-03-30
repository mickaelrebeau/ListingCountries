<template>
  <div class="skeleton-grid">
    <UCard v-for="i in 12" :key="i">
      <USkeleton class="skeleton-emoji" />
      <div class="skeleton-info">
        <USkeleton class="skeleton-name" />
        <USkeleton class="skeleton-meta" />
      </div>
    </UCard>
  </div>
</template>

<style scoped>
.skeleton-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
}

.skeleton-emoji {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 0.5rem;
  margin-bottom: 0.75rem;
}

.skeleton-info {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.skeleton-name {
  height: 1rem;
  width: 70%;
  border-radius: 0.25rem;
}

.skeleton-meta {
  height: 0.75rem;
  width: 50%;
  border-radius: 0.25rem;
}
</style>
