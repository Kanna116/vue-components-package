<script setup>
import { defineEmits, defineProps, ref } from "vue";
import KButton from "./KButton.vue";
import KConfirmModal from "./KConfirmModal.vue";
import KModal from "./KModal.vue";

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
  toConfirm: {
    type: Boolean,
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
  <KButton :type="type" @click="isModalOpen = true">
    <slot>{{ toConfirm ? 'Open Confirmaton':'Open Modal' }}</slot>
  </KButton>
  <KModal
    :title="title"
    :description="description"
    v-if="isModalOpen && !toConfirm"
    @closeModal="closeModal"
  >
    <template #modalContinueBtn>
      <slot name="modalContinueBtn"></slot>
    </template>
  </KModal>
  <KConfirmModal
    :contentType="contentType"
    :type="type"
    :title="title"
    :description="description"
    v-if="isModalOpen && toConfirm"
    @closeModal="closeModal"
  >
    <template #cancelBtn>
      <slot name="cancelBtn"></slot>
    </template>
    <template #acceptBtn>
      <slot name="acceptBtn"></slot>
    </template>
  </KConfirmModal>
</template>
