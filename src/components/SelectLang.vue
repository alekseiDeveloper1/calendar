<script setup lang="ts">
  import {ref} from "vue";

  const langs = [
      {text: 'en', value: 'en-US'},
      {text: 'ru', value: 'ru-RU'}
  ]
  const emit = defineEmits<{
    (e: 'setLang', value: string): void
  }>()
  const language = ref('ru-RU')
</script>
<template>
  <select class="select-lang" v-model="language" @change="() => emit('setLang', language)">
    <option v-for="language in langs" :value="language.value">
      {{ language.text }}
    </option>
  </select>
</template>

<style scoped>
.select-lang {
  width: 100px;
}
</style>
