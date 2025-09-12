<script setup>
const { data } = await useFetch('/api/customers');
</script>

<template>
    <div>Page 2: Customer list</div>
    <ul>
        <li v-for="cust in data.customers" :key="cust.id">
            {{ cust.id }} - {{ cust.name }}
        </li>
    </ul>
</template>