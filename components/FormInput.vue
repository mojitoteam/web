<template>
  <div class="grid gap-1">
    <label class="text-slate-700"><slot /></label>
    <input
      :type="type"
      class="block w-full rounded-md border-2 bg-slate-100 px-4 py-2 focus:outline-blue-500"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    type: { type: String },
  },
};
</script>
