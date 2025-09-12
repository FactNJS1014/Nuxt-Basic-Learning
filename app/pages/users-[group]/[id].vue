<script setup>
const route = useRoute();
</script>

<template>
    <p>{{ $route.params.group }}</p>
    <p>{{ $route.params.id }}</p>
</template>