<template>
  <div
      grid="~ flow-col gap-4"
      place="content-center items-center"
      h="screen"
      font="mono"
  >
    <div class="min-w-[300px]">
      <select v-model="userSelect"
              class="mb-8 block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:text-gray-400 dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer">
        <option :value="null" selected>None</option>
        <option v-for="user in users" :value="user.id" :key="user.id">{{ user.name }} - media: {{ user.media?.name }}
        </option>
      </select>
      <button @click="seed"> Seed</button>
      <input type="text" v-model="text"/>
      <button @click="add"> Add</button>
      <button @click="reset"> Reset</button>
      <user-card v-if="selectedData" :user="selectedData" :todos="selectedData.todos" @removeTodo="removeTodo"/>
      <div v-else class="min-h-[350px]"></div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useRepo} from 'pinia-orm'
import User from './User.js'
import Todo from './Todo.js'
import data from './data.js'
import UserCard from './userCard.vue'
import Audio from "@/Audio";

const userRepo = useRepo(User)
const todoRepo = useRepo(Todo)
const audioRepo = useRepo(Audio);

const userSelect = ref(null)

todoRepo.save(data.todo);
const users = computed(() => userRepo.with('todos').with('media').get())

const selectedData = computed(() => users.value.find(user => user.id === userSelect.value))

const removeTodo = (id) => {
  todoRepo.destroy(id)
}
const seed = () => {
  useRepo(Audio).save(data.media.audios);
  todoRepo.save(data.todo);
}

const reset = () => {
  userRepo.flush();
  todoRepo.flush();
  audioRepo.flush();
}

const text = ref('');
const add = () => {
  userRepo.save({name: text.value});
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
