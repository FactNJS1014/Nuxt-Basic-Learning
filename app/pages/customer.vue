<script setup>
const route = useRoute();
const searchParams = route.query;
</script>

<template>
    <div>
        <h1>Blog Info {{ searchParams.search }}</h1>
    </div>
</template>