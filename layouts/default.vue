<template>
    <header>
        <h1>Country Listing</h1>
        <nav>
            <NuxtLink to="/">Home</NuxtLink>
            <NuxtLink to="/countries">Countries</NuxtLink>
            <NuxtLink to="/about">About</NuxtLink>
            <NuxtLink to="/contact">Contact</NuxtLink>
            <NuxtLink to="/login">Login</NuxtLink>
            <NuxtLink to="/register">Register</NuxtLink>
            <NuxtLink to="/profile">Profile</NuxtLink>
            <NuxtLink to="/settings">Settings</NuxtLink>
            <NuxtLink to="/logout">Logout</NuxtLink>
        </nav>
    </header>

    <main>
        <slot />
    </main>

    <footer>
        <p>© 2026 Country Listing</p>
    </footer>
</template>