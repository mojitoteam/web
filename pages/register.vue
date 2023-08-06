<template>
  <div class="flex h-screen items-center justify-center">
    <form
      class="flex w-full max-w-md flex-col gap-5 rounded-md bg-slate-50 p-10 outline outline-slate-100"
    >
      <h1 class="mb-4 text-center text-3xl font-bold text-slate-700">
        Create your account
      </h1>

      <RegisterInput
        type="email"
        :state="useEmail"
        :errors="errors['email']"
        required
      >
        Email address
      </RegisterInput>
      <RegisterInput
        id="username"
        type="text"
        :state="useUsername"
        :errors="errors['username']"
        required
      >
        Username
      </RegisterInput>
      <RegisterInput
        type="password"
        :state="usePassword"
        :errors="errors['password']"
        required
      >
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
          <RegisterLink to="/terms">Terms of Service</RegisterLink> and
          <RegisterLink to="/privacy">Privacy Police</RegisterLink>.
        </span>
      </div>

      <div class="mt-3">
        <p class="text-center text-slate-500">
          Already have an account?
          <RegisterLink to="/login"> Login instead </RegisterLink>.
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
interface UsersResponse {
  token: string
}

const useEmail = () => useState<string>()
const useUsername = () => useState<string>()
const usePassword = () => useState<string>()

const errors = useState<{ [key: string]: string[] }>(() => Object())

const register = async (event: MouseEvent) => {
  event.preventDefault()

  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase

  const email = useEmail().value
  const username = useUsername().value
  const password = usePassword().value

  const payload = { email, username, password }

  await useFetch<UsersResponse>(`${apiBase}/users`, {
    method: 'POST',
    body: payload,

    onResponse({ response }) {
      if (!response.ok) {
        return
      }

      localStorage.setItem('token', response._data.token)
      navigateTo('/app')
    },

    onResponseError({ response }) {
      errors.value = response._data
    },
  })
}
</script>
