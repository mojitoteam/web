<template>
  <div class="flex flex-col gap-1">
    <label :for="inputId" class="text-sm text-slate-700">
      <slot />
      <span v-if="required" class="text-red-500"> *</span>
    </label>
    <input
      :id="inputId"
      v-model="model"
      class="rounded-md border-2 border-slate-200 bg-slate-100 px-3 py-2 text-slate-700 focus:outline-green-500"
      :type="type"
      :required="required"
    />
  </div>
</template>

<script lang="ts">
export default {
  props: {
    state: { type: Function, required: true },
    type: { type: String, required: true },
    id: { type: String, default: null },
    required: Boolean,
  },
  setup(props) {
    return {
      // For some reason, ESLint doesn't like when we use `props.state()`
      // directly. So we have to wrap it in an IIFE, unfortunately.
      model: (() => props.state())(),
      inputId: props.id || props.type,
    };
  },
};
</script>
