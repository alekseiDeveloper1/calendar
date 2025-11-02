<script setup lang="ts">
import { useCalendar } from '../scripts/useCalendar';
import {computed, watch} from "vue";
const props = defineProps<{
  language: string
}>()
const {today, year, monthName, setLang, daysWeek, days, prevMonth, nextMonth, selectDate } = useCalendar();
const lg = computed(() => props.language)
watch(lg,() => {
  if (!lg.value) return
  setLang(lg.value)
})
</script>

<template>
  <div class="calendar">
    <div class="header">
      <button class="header-btn" @click="prevMonth">&#9668;</button>
      <div class="month"> {{monthName}} {{year}} </div>
      <button class="header-btn" @click="nextMonth">&#9658;</button>
    </div>
    <div class="days">
      <div class="day-week"
           v-for="dayWeek in daysWeek"
           :key="dayWeek"
      >{{dayWeek}}</div>
      <div class="day"
           v-for="(day, index) in days"
           :key="index"
      >
        <div v-if="day" @click="selectDate(day)">
          {{day}}
        </div>
      </div>
    </div>
  </div>
  <h3>{{today}}</h3>
</template>

<style scoped>
.calendar {
  display: flex;
  width: 300px;
  padding: 10px;
  background: white;
  margin: auto;
  border: 2px solid gray;
  flex-direction: column;
}
.header {
  display: flex;
  justify-content: space-around;
  line-height: 1.7;
}
.header-btn {
  background: white;
  border: none;
  border-radius: 15px;
  width: 30px;
  height: 30px;
  padding: 0;
}

.header-btn:first-child {
  padding-right: 3px;
}
.header-btn:last-child {
  padding-left: 3px;
}

.header-btn:hover {
  background: #d4d4d4;
}
.days {
  display: grid;
  text-align: center;
  line-height: 2;
  grid-template-columns: repeat(7, 1fr);
  gap: 8px;
}
.day {
  cursor: pointer;
  border-radius: 20px;
}
.day:hover {
  background: #bdbdbd;
}
</style>
