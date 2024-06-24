<script setup>
import { ref, defineProps, defineEmits } from "vue";
import DownArrowIcon from "../assets/icons/downArrowIcon.vue";
defineProps({
  items: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
  },
  expand: {
    type: Boolean,
  },
  rounded: {
    type: Boolean,
  },
});
const emit = defineEmits(["input"]);
const inputVal = ref("");

const handleItemClick = (res) => {
  inputVal.value = res;
  emit("input", inputVal.value);
};
</script>

<template>
  <div
    class="data-list-container"
    :style="{ width: expand ? '100%' : 'fit-content' }"
  >
    <p class="select-label">{{ label }}</p>
    <div
      :style="{
        borderRadius: rounded ? '100px' : '6px',
      }"
      class="selected-item-container"
    >
      <div class="selected-item">
        {{ inputVal ? inputVal : "Select option" }}
      </div>
      <span>
        <DownArrowIcon />
      </span>
    </div>
    <div v-if="items.length > 0" class="items-container">
      <p
        v-for="(item, index) in items"
        :key="index"
        @click="handleItemClick(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.data-list-container {
  width: 100%;
  /* width: 500px; */
  height: fit-content;
  position: relative;
  padding-bottom: 10px;
}
.selected-item-container {
  background: white;
  height: 40px;
  width: 100%;
  min-width: 20rem;
  border-radius: 5px;
  border: 0.5px solid #d2d6db;
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  cursor: pointer
}
.selected-item-container span{
    height: 100%;
    aspect-ratio: 1.5/1;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
}
.selected-item-container .selected-item{
    width: 100%;
    height: 100%;
    padding: 10px 20px;
}
.data-list-container:hover .items-container {
  display: block;
}
.data-list-container:focus-within .items-container {
  display: block;
}
.select-label {
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 5px;
}
.items-container {
  display: none;
  position: absolute;
  top: 100%;
  background-color: white;
  z-index: 100;
  width: 100%;
  height: fit-content;
  border: 0.5px solid #d2d6db;
  border-radius: 7px;
  overflow: hidden;
}
.items-container p {
  padding: 10px 20px;
  cursor: pointer;
  transition: all 100ms;
  text-transform: capitalize;
}
.items-container p:hover {
  background-color: #d2d6db;
}
</style>
