<script setup>
const name = ref('')
const type = ref(1)

function navigate(){
    return navigateTo({
        path: '/blogs',
        query: {
            name: name.value,
            type: type.value
        }
    })
}

</script>

<template>
    <div>
        <input v-model="name" placeholder="Enter name" type="text" />
        <input v-model="type" placeholder="Enter type" type="number"/>
        <button @click="navigate">Go to Blog</button>
    </div>
</template>