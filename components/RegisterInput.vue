<template>
  <div class="flex flex-col gap-1">
    <ul
      v-for="[idx, error] in errors.entries()"
      :key="idx"
      class="ml-4 list-disc text-sm"
    >
      <li class="text-red-500">
        {{ error }}
      </li>
    </ul>

    <label :for="inputId" class="indent-1 text-sm text-slate-700">
      <slot />
      <span v-if="required" class="text-red-500"> *</span>
    </label>
    <input
      :id="inputId"
      v-model="model"
      class="rounded-md border-2 px-3 py-2 text-slate-700"
      :class="errorClasses"
      :type="type"
      :required="required"
    />
  </div>
</template>
<!-- :class="{'bg-red-50 border-red-300 focus:outline-red-400': errors && errors.length > 0}" -->

<script lang="ts">
export default {
  props: {
    state: { type: Function, required: true },
    type: { type: String, required: true },
    id: { type: String, default: null },
    errors: { type: Array<string>, default: [], readonly: false },
    required: Boolean,
  },
  setup(props) {
    const errorClasses =
      props.errors.length > 0
        ? 'bg-red-50 border-red-200 focus:outline-red-400'
        : 'bg-slate-100 border-slate-200 focus:outline-green-500';

    return {
      // For some reason, ESLint doesn't like when we use `props.state()`
      // directly. So we have to wrap it in an IIFE, unfortunately.
      model: (() => props.state())(),
      inputId: props.id || props.type,
      errorClasses,
    };
  },
};
</script>
