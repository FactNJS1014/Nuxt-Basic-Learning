<script setup>
const customer = reactive({
    name: '',
    email: ''
})

const createCustomer = async () => {
    const { data, error } = await useFetch('/api/customers', {
        method: 'POST',
        body: customer
    });
    if (error.value) {
        console.error('Error creating customer:', error.value);
    } else {
        console.log('Customer created:', data.value);
        // Reset form
        customer.name = '';
        customer.email = '';
    }
};

</script>

<template>
    <div>Page 3</div>
    <h2>Create Customer</h2>
    <form @submit.prevent="createCustomer">
        <div>
            <label for="name">Name:</label>
            <input v-model="customer.name" id="name" type="text" required />
        </div>
        <div>
            <label for="email">Email:</label>
            <input v-model="customer.email" id="email" type="email" required />
        </div>
        <button type="submit">Create Customer</button>
    </form>
</template>