<template>
  <button
    class="custom-btn medium default"
    :class="[type, size, edges, ...[customClass], disabled ? 'disabled' : '']"
    :disabled="disabled"
    @click="$emit('click')"
  >
    <slot v-if="iconed === 'left'" name="icon" class="icon">
      <RightArrowIcon />
    </slot>
    <slot v-if="type != 'iconBtn'">button</slot>
    <slot v-if="iconed === 'right'" name="icon" class="icon">
      <RightArrowIcon />
    </slot>
  </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";
import RightArrowIcon from "../assets/icons/rightArrowIcon.vue";

defineProps({
  type: String,
  size: String,
  edges: String,
  customClass: [String, Array],
  disabled: Boolean,
  iconed: String,
});
defineEmits(["click"]);
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
  border: 1px;
  color: white;
  gap: 8px;
  align-items: center;
  justify-content: center;
  display: inline-flex;
  text-wrap: nowrap;
  cursor: pointer;
  transition: all 100ms;
}
.default {
  background-color: #18181b;
  color: white;
  border: 1px solid #e4e4e7;
}
.default:hover {
  background-color: #18181be6;
}

.success,
.primary,
.danger,
.info,
.link {
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
  background-color: #f6f6f7;
  border: 0px;
  color: #18181be6;
}
.danger {
  background-color: #df3b3b;
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
.ghost {
  background-color: transparent;
  color: #18181b;
  border: 0px;
}
.ghost:hover {
  background-color: #f4f4f5;
}
.outline {
  color: #18181b;
  background-color: white;
}
.outline:hover {
  background-color: #f4f4f5;
}

.medium {
  /* padding: 10px 24px; */
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 500;
}
.small {
  /* padding: 8px 18px; */
  padding: 0.5rem 0.75rem;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 500;
  border-radius: 6px;
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
  height: 100%;
  aspect-ratio: 1;
}
.disabled {
  opacity: 60%;
  cursor: not-allowed;
}
.success:hover {
  background-color: #218838dd;
}
.primary:hover {
  background-color: #0069d9dd;
}
.secondary:hover {
  background-color: #18181b70;
}
.danger:hover {
  background-color: #df3b3bdd;
}
.warning:hover {
  background-color: #e0a800dd;
}
.info:hover {
  background-color: #138496dd;
}
.link:hover {
  background-color: white;
  text-decoration: underline;
}
.iconBtn {
  color: #18181b;
  background-color: white;
  padding: 0.5rem;
}
.iconBtn:hover {
  background-color: #f4f4f5;
}
</style>
