<script setup>
import { ref } from "vue";
import { useDate } from "../composables/useDate";
import KButton from "./KButton.vue";

const { getCurrentDate, formattedDate } = useDate();
const toasts = ref([]);
const handleClick = () => {
  toasts.value.push({
    id: toasts.value.length + 1,
    text: "The toast is created",
    date: getCurrentDate,
  });
//   console.log("working");
};
console.log(formattedDate(new Date()));
const removeToast = (id) => {
  toasts.value = toasts.value.filter((item) => item.id !== id);
};
</script>

<template>
  <KButton @click="handleClick" type="outline">Show Toast</KButton>
  <ul class="toasts-container">
    <li
      v-for="(toast, index) in toasts"
      :key="index"
      class="toast-item"
      :style="{ zIndex: index }"
    >
      <div class="left">
        <p class="toast-title">{{ toast.text }}</p>
        <p class="toast-description">{{ formattedDate(toast.date) }}</p>
      </div>
      <div class="right">
        <KButton type="default" @click="removeToast(toast.id)" size="small"
          >Undo</KButton
        >
      </div>
    </li>
  </ul>
</template>
<style scoped>
.toasts-container {
  position: fixed;
  bottom: 0px;
  right: 0px;
  width: fit-content;
  height: fit-content;
  /* background-color: red; */
  list-style-type: none;
  display: flex;
  padding: 10px 30px;
  align-items: center;
  flex-direction: column;
  justify-content: flex-end;
  gap: 10px;
}
.toast-item {
  width: 300px;
  min-height: 50px;
  padding: 15px 10px;
  background-color: #fff;
  border: 1px solid #e4e4e7;
  border-radius: 6px;
  box-shadow: 0px 0px 10px #00000010;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.toast-item .left {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  gap: 5px;
}
.toast-title {
  font-size: 14px;
  font-weight: 600;
}
.toast-description {
  font-size: 12px;
  font-weight: 400;
  color: #000000;
}
</style>
