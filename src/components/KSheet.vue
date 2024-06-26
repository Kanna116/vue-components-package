<script setup>
import { defineEmits } from "vue";
import KCloseButton from "./KCloseButton.vue";

const emit = defineEmits(["closeSheet"]);
const handleClose = () => {
  emit("closeSheet");
};
</script>

<template>
  <div class="sheet-container">
    <div class="sheet-item">
      <KCloseButton @click="handleClose" />
      <slot name="sheet-content">Enter your sheet content inside </slot>
    </div>
  </div>
</template>

<style scoped>
.sheet-container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 100;
  animation: animateSheetBackground 500ms ease 0s forwards;
}
.sheet-item {
  height: 100%;
  width: fit-content;
  min-width: 350px;
  max-width: 700px;
  background-color: white;
  position: absolute;
  transition: all 300ms ease;
  top: 0px;
  right: 0px;
  padding: 3rem 1.5rem;
  animation: animateSheet 500ms ease 0s forwards;
}

@keyframes animateSheet {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0%);
  }
}
@keyframes animateSheetBackground {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: #000000aa;
  }
}
</style>
