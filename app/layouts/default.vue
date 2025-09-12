<script setup>
import Navbar from '@/components/Navbar.vue';
</script>

<template>
    <div>
        <div>
            <div>Default Page</div>
            <Navbar />

            <slot></slot>
        </div>
    </div>
</template>