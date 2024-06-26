<script setup>
import { defineProps, defineEmits } from "vue";
import KButton from "./KButton.vue";
import { useDate } from "../composables/useDate";
defineProps({
  toastItem: {
    type: Object,
  },
});
const { formattedDate } = useDate();
const emit = defineEmits(["remove"]);
const removeToast = (id) => {
  emit("remove", id);
};
</script>
<template>
  <li class="toast-item">
    <div class="left">
      <p class="toast-title">{{ toastItem.title }}</p>
      <p class="toast-description">{{ formattedDate(toastItem.date) }}</p>
    </div>
    <div class="right">
      <KButton type="default" @click="removeToast(toastItem.id)" size="small">
        Undo
      </KButton>
    </div>
  </li>
</template>
<style scoped>
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
  cursor: pointer;
  transition: all 400ms ease;
  animation: animateToast 500ms ease 0s forwards;
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
@keyframes animateToast {
  0% {
    /* transform: scale(0.9) */
    transform: translateY(50px);
  }
  100% {
    /* transform: scale(1) */
    transform: translateY(0px);
  }
}
</style>
