<template>
  <div class="grid min-h-screen place-items-center">
    <form
      class="grid w-full max-w-xl gap-5 rounded-md bg-slate-50 p-10 outline-dashed outline-slate-200"
    >
      <h1 class="text-center text-3xl font-bold">Create an account</h1>

      <div class="grid gap-5">
        <FormInput type="email"> Email address </FormInput>
        <FormInput type="text"> Username </FormInput>
        <FormInput type="password"> Password </FormInput>
        <FormInput type="password"> Confirm your password </FormInput>
      </div>

      <div class="grid gap-3">
        <button
          type="submit"
          class="mt-4 rounded-md bg-green-400 py-3 font-semibold duration-200 hover:bg-green-300"
          @click="createAccount"
        >
          Continue
        </button>
        <span class="text-center text-sm text-slate-500">
          By registering, you agree with our
          <NuxtLink
            to="/"
            class="text-blue-600 duration-200 hover:text-blue-400"
            >Terms of Service</NuxtLink
          >
          and
          <NuxtLink
            to="/"
            class="text-blue-600 duration-200 hover:text-blue-400"
            >Privacy Police</NuxtLink
          >.
        </span>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
function createAccount(event: MouseEvent) {
  event.preventDefault();
  console.debug('Creating account...');
}
</script>
