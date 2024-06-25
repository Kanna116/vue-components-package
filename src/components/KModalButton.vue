<script setup>
import { ref } from "vue";
import KButton from "./KButton.vue";
import KModal from "./KModal.vue";
const isModalOpen = ref(false);
const closeModal = () => {
  isModalOpen.value = false;
};
</script>

<template>
  <KButton @click="isModalOpen = true">Open Modal</KButton>
  <KModal v-if="isModalOpen" @closeModal="closeModal"></KModal>
</template>
