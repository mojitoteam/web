<template>
  <NuxtLink :to="to" class="cursor-pointer text-blue-600 hover:underline">
    <slot />
  </NuxtLink>
</template>

<script lang="ts">
export default {
  props: {
    to: { type: String, required: true },
  },
};
</script>
