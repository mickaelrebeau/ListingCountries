<template>
  <UApp>
    <header>
      <UContainer>
        <USeparator />
        <div class="app-header">
          <NuxtLink to="/countries" class="app-logo">
            <UIcon name="i-heroicons-globe-alt" size="24" />
            <span>CountryListing</span>
          </NuxtLink>
        </div>
        <USeparator />
      </UContainer>
    </header>

    <main class="app-main">
      <UContainer>
        <slot />
      </UContainer>
    </main>

    <footer>
      <UContainer>
        <USeparator />
        <p class="app-footer">
          © {{ new Date().getFullYear() }} CountryListing
        </p>
      </UContainer>
    </footer>
  </UApp>
</template>

<style scoped>
.app-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
}

.app-logo {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.125rem;
  font-weight: 700;
  text-decoration: none;
  color: inherit;
}

.app-main {
  min-height: calc(100vh - 10rem);
  padding: 2rem 0;
}

.app-footer {
  padding: 1rem 0;
  text-align: center;
  font-size: 0.875rem;
  opacity: 0.6;
}
</style>