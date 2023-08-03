<template>
  <div class="flex h-screen items-center justify-center">
    <form
      class="flex w-full max-w-md flex-col gap-5 rounded-md bg-slate-50 p-10 outline outline-slate-100"
    >
      <h1 class="mb-4 text-center text-3xl font-bold">Create your account</h1>

      <RegisterInput type="email" :state="useEmail" required>
        E-mail address
      </RegisterInput>
      <RegisterInput id="username" type="text" :state="useUsername" required>
        Username
      </RegisterInput>
      <RegisterInput type="password" :state="usePassword" required>
        Password
      </RegisterInput>

      <div class="mt-6 flex flex-col gap-4">
        <input
          type="submit"
          value="Continue"
          class="cursor-pointer rounded-md bg-green-500 py-3 font-semibold text-white duration-150 hover:bg-green-400 hover:shadow-md"
          @click="register"
        />
        <span class="text-sm text-slate-500">
          By registering, you agree with Mojito's
          <RegisterLink to="/">Terms of Service</RegisterLink> and
          <RegisterLink to="/">Privacy Police</RegisterLink>.
        </span>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
const useEmail = () => useState<string>();
const useUsername = () => useState<string>();
const usePassword = () => useState<string>();

const register = (event: MouseEvent) => {
  event.preventDefault();

  const email = useEmail().value;
  const username = useUsername().value;
  const password = usePassword().value;

  const payload = { email, username, password };
  console.log(payload);

  // useFetch('...', { method: 'POST', body: JSON.stringify(payload) });
};
</script>
