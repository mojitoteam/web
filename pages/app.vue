<template>
  <h1>Welcome to the /app page!</h1>
</template>

<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
</script>
