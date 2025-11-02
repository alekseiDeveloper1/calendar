<script setup lang="ts">
import Calendar from "@/components/Calendar.vue";
import SelectLang from "@/components/SelectLang.vue";
import {ref} from "vue";
const language = ref('')
const setLang = (upLang: string) => {
  language.value = upLang
}
</script>
<template>
  <div class="app">
    <select-lang @setLang="setLang"/>
    <calendar :language="language" />
  </div>
</template>

<style>
  @import "./assets/main.css";
  .app {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
</style>
