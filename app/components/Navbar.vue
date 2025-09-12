<script setup>
import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<style>
.navbar ul li {
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>

<template>
    <div class="navbar">
        <ul>
            <li>
                <NuxtLink to="/">Home</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/page1">Page 1</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/page2">Page 2</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/page3">Page 3</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/about">About</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/usingNavigateTo">Using Navigate To</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/customer?search=Nuxt 4">Customer</NuxtLink>
            </li>
        </ul>
        <p>Current Route: {{ $route.path }}</p>
    </div>
</template>