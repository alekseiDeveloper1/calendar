<script setup lang="ts">
const daysWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const days = Array(24).fill(0)
</script>

<template>
  <div class="calendar">
    <div class="header">
      <button class="header-btn">&#9668;</button>
      <div class="month"> Jul 2018 </div>
      <button class="header-btn">&#9658;</button>
    </div>
    <div class="days">
      <div class="day-week"
           v-for="dayWeek in daysWeek"
           :key="dayWeek"
      >{{dayWeek}}</div>
      <div class="day"
           v-for="(_, index) in days"
           :key="index"
      >{{index}}</div>
    </div>
  </div>
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
</style>
