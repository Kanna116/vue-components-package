<script setup>
import { ref, defineEmits, defineProps } from "vue";
import KButton from "./KButton.vue";
import KModal from "./KModal.vue";
import KConfirmModal from "./KConfirmModal.vue";

defineProps({
  type: {
    type: String,
  },
  contentType: {
    type: String,
  },
  title: {
    type: String,
  },
  description: {
    type: String,
  },
});

const emit = defineEmits(["isConfirmed"]);
const isModalOpen = ref(false);
const closeModal = (isConfirmed) => {
  if (isConfirmed !== undefined) {
    emit("isConfirmed", isConfirmed);
  }
  isModalOpen.value = false;
};
</script>

<template>
  <KButton @click="isModalOpen = true"><slot /></KButton>
  <KModal
    :title="title"
    :description="description"
    v-if="isModalOpen && type !== 'confirmation'"
    @closeModal="closeModal"
  ></KModal>
  <KConfirmModal
    :contentType="contentType"
    :type="type"
    :title="title"
    :description="description"
    v-if="isModalOpen && type === 'confirmation'"
    @closeModal="closeModal"
  ></KConfirmModal>
</template>
