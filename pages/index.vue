<template>
  <div>
    <p>Почта пользователя: {{ currentUser?.email }}</p>
    <p>Токен пользователя: {{ currentUser?.token }}</p>
    <p>ID пользователя: {{ currentUser?.user_id }}</p>
    <p>username пользователя: {{ currentUser?.username }}</p>
    <button @click="logout" type="submit" class="mt-[12px] text-white bg-black hover:opacity-75 transition-opacity focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Выход</button>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from "~/store/user";
const store = useUserStore()
const currentUser = <user>store.currentUser
const logout = ():void => {
  store.logout()
}
definePageMeta({
  middleware: [
    function() {
      if (!useUserStore().currentUser) {
        return navigateTo('/auth');
      }
    },
  ]
});

</script>