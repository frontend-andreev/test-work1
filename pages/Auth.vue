<template>
  <section class="bg-gray-50">
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                  Войдите в свой аккаунт
              </h1>
              <form class="space-y-4 md:space-y-6">
                  <div>
                      <label for="username" class="block mb-2 text-sm font-medium text-gray-900">Username</label>
                      <input v-model="form.username" type="text" name="text" id="username" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" placeholder="name@company.com">
                    </div>
                  <div>
                      <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                      <input v-model="form.password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5">
                  </div>
                  <p v-if="error" class="text-red-600 text-xs font-[600] my-[10px]">{{ error }}</p>
                  <button @click.prevent="sendForm" class="w-full text-white bg-black hover:opacity-75 transition-opacity focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Войти</button>
              </form>
          </div>
      </div>
  </div>
</section>
</template>
<script setup lang="ts">
import { useUserStore } from "~/store/user";
const store = useUserStore()
const form = <authForm>reactive({
  username: '',
  password: ''
})
let error = ref<error>(undefined)
const sendForm = ():void => {
  store.auth(form)
    .then((res:error | true) => {
      if (typeof res == 'string') {
        error.value = res
      }
    })
}

</script>