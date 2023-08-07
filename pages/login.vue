<template>
  <div class="flex h-screen items-center justify-center">
    <form class="flex w-full max-w-md flex-col gap-5 rounded-md bg-slate-50 p-10 outline outline-slate-100">
      <h1 class="mb-4 text-center text-3xl font-bold text-slate-700">
        Welcome back
      </h1>

      <div v-if="errors['detail']" class="text-red-600 bg-red-100 text-center p-3 rounded-md outline outline-red-300">
        {{ errors['detail'] }}
      </div>

      <FormInput
        type="email"
        :state="useEmail"
        :errors="errors['email']"
        required
      >
        Email address
      </FormInput>
      <FormInput
        type="password"
        :state="usePassword"
        :errors="errors['password']"
        required
      >
        Password
      </FormInput>

      <div class="mt-6 flex flex-col gap-4">
        <input
          type="submit"
          value="Continue"
          class="cursor-pointer rounded-md bg-green-500 py-3 font-semibold text-white duration-150 hover:bg-green-400 hover:shadow-md"
          @click="login"
        >
      </div>

      <div class="mt-3">
        <p class="text-center text-slate-500">
          Don't have an account?
          <RegisterLink to="/register">
            Create an account
          </RegisterLink>.
        </p>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
interface UserResponse {
  token: string
}

const useEmail = () => useState<string>()
const usePassword = () => useState<string>()

const errors = useState<{ [key: string]: string[] }>(() => Object())

const login = async (event: MouseEvent) => {
  event.preventDefault()

  const config = useRuntimeConfig()
  const apiBase = config.public.apiBase

  const email = useEmail().value
  const password = usePassword().value

  const payload = { email, password }

  await useFetch<UserResponse>(`${apiBase}/auth/login`, {
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
    }
  })
}
</script>
