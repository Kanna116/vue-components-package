<template>
  <button
    class="custom-btn medium default"
    :class="[type, size, edges, customClass, disabled ? 'disabled' : '']"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot name="icon-first" class="icon"></slot>
    <slot></slot>
    <slot name="icon-last"></slot>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  type: String,
  size: String,
  edges: String,
  customClass: String,
  disabled: Boolean,
});
// customClass will only work with style scoped classes because global fonts might cause a trouble with client code
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
.custom-btn {
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  width: fit-content;
  height: fit-content;
  line-height: 100%;
  border-radius: 5px;
  text-transform: capitalize;
  border: 0px;
  color: white;
  gap: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.default {
  background-color: white;
  color: black;
  border: 1px solid #5a6268;
}

.success,
.primary,
.danger,
.secondary,
.info {
  color: white;
  border: 0px;
}
.success {
  background-color: #218838;
}
.primary {
  background-color: #0069d9;
}
.secondary {
  background-color: #5a6268;
  border: 0px;
}
.danger {
  background-color: #c82333;
}
.warning {
  background-color: #e0a800;
  color: black;
}
.info {
  background-color: #138496;
}
.link {
  background-color: white;
  color: #0069d9;
}

.medium {
  padding: 10px 24px;
  font-size: 14px;
}
.small {
  padding: 8px 18px;
  font-size: 14px;
}
.large {
  padding: 12px 32px;
  font-size: 20px;
}
.rounded {
  border-radius: 1000px;
}
.sharp {
  border-radius: 0px;
}
.normal {
  border-radius: 5px;
}
.icon {
  font-size: 10px;
  width: 10px;
  height: 100%;
}
.disabled {
  /* color: black; */
  opacity: 60%;
  cursor: not-allowed;
}
</style>
