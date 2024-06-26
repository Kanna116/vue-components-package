<script setup>
import { computed, defineProps } from "vue";
import KModal from "./KModal.vue";
import KButton from "./KButton.vue";
const props = defineProps({
  title: {
    type: String,
  },
  description: {
    type: String,
  },
  contentType: {
    type: String,
  },
});
const btnVariant = computed(() => {
  switch (props.contentType) {
    case "confirm":
      return {
        label: "Confirm",
        btnType: "success",
      };
    case "warning":
      return {
        label: "Continue",
        btnType: "warning",
      };
    case "danger":
      return {
        label: "Delete",
        btnType: "danger",
      };
    default:
      return {
        label: "Confirm",
        btnType: "success",
      };
  }
});
</script>

<template>
  <KModal :title="title" :description="description">
    <template #modalBtns>
      <KButton type="outline" @click="$emit('closeModal', false)"
        >
        <slot name="cancelBtn">Cancel</slot>
        </KButton
        >
        <KButton :type="btnVariant.btnType" @click="$emit('closeModal', true)">
        <slot name="acceptBtn">{{btnVariant.label}}</slot>

      </KButton>
    </template>
  </KModal>
</template>
