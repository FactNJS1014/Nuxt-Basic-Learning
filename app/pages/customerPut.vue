<script setup>
const customer = reactive({
    name: '',
    email: ''
})
const updateCustomer = async () => {
    const { data } = await useFetch('/api/customers', {
        method: 'PUT',
        body: customer
    });
   
};

</script>

<template>
    <div>Customer Update</div>
    <h2>Update Customer</h2>
    <form @submit.prevent="updateCustomer">
        <div>
            <label for="name">Name:</label>
            <input v-model="customer.name" id="name" type="text" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input v-model="customer.email" id="email" type="email" required />
        </div>
        <button type="submit">Update Customer</button>
    </form>
</template>