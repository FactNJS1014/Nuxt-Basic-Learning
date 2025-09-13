<script setup>
const customer = reactive({
    name: ''
   
})

const deleteCustomer = async () => {
    const { data } = await useFetch('/api/customers', {
        method: 'DELETE',
        body: customer
    });
   
};      
</script>

<template>
    <div>Customer Delete</div>
    <h2>Delete Customer</h2>
    <form @submit.prevent="deleteCustomer">
        <div>
            <label for="name">Name:</label>
            <input v-model="customer.name" id="name" type="text" required />
        </div>
        
        <button type="submit">Delete Customer</button>
    </form> 
</template> 