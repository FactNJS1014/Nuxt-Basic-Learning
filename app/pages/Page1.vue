<script setup>
const { data } = await useFetch('/api/hello');
const customer = reactive({
    name: '',
    email: ''
})

const search = async () => {
    const { data } = await useFetch('/api/customers?name=fact&email=fact@email.com')
    customer.name = data.value.name,
    customer.email = data.value.email


};
</script>

<template>
    <p>Page 1 {{ data }}</p>
    <h2>Search Customer</h2>
    <button @click="search">Search</button>
    <p>Name: {{ customer.name }}</p>
    <p>Email: {{ customer.email }}</p>
</template>
