<script setup>
import CloseIcon from "@/assets/icons/closeIcon.vue";
import KButton from "./KButton.vue";
import { defineEmits } from "vue";

const emit = defineEmits(["click"]);
const handleClose = () => {
  emit("click");
};
</script>

<template>
  <KButton
    size="large"
    type="iconBtn"
    @click="handleClose"
    customClass="close-btn"
    iconed="left"
  >
    <template #icon>
      <CloseIcon />
    </template>
  </KButton>
</template>
<style scoped>
.close-btn {
  position: absolute;
  top: 10px;
  right: 30px;
  border: 0px;
}
</style>
