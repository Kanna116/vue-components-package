<script setup>
import { ref } from "vue";
import KButton from "./KButton.vue";
import KSheet from "./KSheet.vue";
const isSheetOpen = ref(false);

const handleCloseSheet = () => {
  isSheetOpen.value = false;
};
</script>

<template>
  <KButton @click="isSheetOpen = true"><slot>Open Sheet</slot></KButton>
  <KSheet v-if="isSheetOpen" @closeSheet="handleCloseSheet">
    <template #sheet-content>
      <slot name="sheet-content"></slot>
    </template>
  </KSheet>
</template>
