<script setup>
import { defineProps, defineEmits } from "vue";
import KButton from "./KButton.vue";
import KCloseButton from "./KCloseButton.vue";
defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});
const emit = defineEmits(["closeModal"]);
const closeModal = () => {
  emit("closeModal");
};
</script>

<template>
  <div class="modal-container">
    <div class="modal">
      <KCloseButton @click="closeModal" />
      <h1>{{ title }}</h1>
      <p>{{ description }}</p>
      <div class="btn-container">
        <slot name="modalBtns">
          <KButton type="outline" @click="closeModal">
            <slot name="modalContinueBtn">Continue</slot>
          </KButton>
        </slot>
      </div>
    </div>
  </div>
</template>

<style scoped>
.modal-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00000070;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  animation: animateModalBackground 200ms ease 0s forwards;
}
.modal {
  width: 30vw;
  height: fit-content;
  min-height: 100px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #000000aa;
  padding: 20px;
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
  transition: all 300ms ease;
  animation: animateModal 200ms ease 0s forwards;
}
.modal h1 {
  font-size: 1.125rem;
  font-weight: 600;
}
.modal p {
  color: #71717a;
  font-size: 0.875rem;
}
.btn-container {
  width: 100%;
  height: fit-content;
  padding-top: 10px;
  /* border-top: 0.5px solid #d2d6db; */
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
}

@keyframes animateModal {
  0% {
    transform: scale(0.9)
    /* transform: translateY(50px); */
  }
  100% {
    transform: scale(1)
    /* transform: translateY(0px); */
  }
}
@keyframes animateModalBackground {
  0% {
    background-color: transparent;
  }
  100% {
    background-color: #000000aa;
  }
}
</style>
