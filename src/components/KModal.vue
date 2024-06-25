<script setup>
import KButton from "./KButton.vue";
</script>

<template>
  <div class="modal-container">
    <div class="modal">
      <h1>Title</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo, in.</p>
      <div class="btn-container">
        <slot name="btns">
          <KButton type="outline" @click="$emit('closeModal')">Continue</KButton>
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
}
.modal {
  width: 30vw;
  height: fit-content;
  min-height: 100px;
  background-color: #fff;
  box-shadow: 0px 0px 10px #00000070;
  padding: 20px;
  border-radius: 0.5rem;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 1rem;
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
</style>
