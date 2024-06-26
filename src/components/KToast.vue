<script setup>
import { ref, watch } from "vue";
import { useNotification } from "../composables/useNotification";
import KButton from "./KButton.vue";
import KToastItem from "./KToastItem.vue";

const { newNotification, allNotifications, removeNotification } =
  useNotification();
const toasts = ref(allNotifications);
const handleClick = () => {
  newNotification("Toast has been created", "");
};
watch(allNotifications, (newVal) => {
  toasts.value = newVal;
});
</script>

<template>
  <KButton @click="handleClick" type="outline">Show Toast</KButton>
  <ul v-if="toasts.length > 0" class="toasts-container">
    <KToastItem
      v-for="(toast, index) in toasts"
      :key="index"
      :toastItem="toast"
      @remove="removeNotification"
    />
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
  z-index: 100;
}
</style>
