<template>
  <div
    class="data-list-container"
    :style="{ width: expand ? '100%' : 'fit-content' }"
  >
    <KSearchInput
      list="items"
      expand
      :rounded="rounded"
      :iconed="iconed"
      @input="handleSeach"
      v-model="inputVal"
      :label="label"
    />
    <div v-if="searchedItems.length > 0" class="items-container">
      <p
        v-for="(item, index) in searchedItems"
        :key="index"
        @click="handleItemClick(item)"
      >
        {{ item }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps, defineEmits } from "vue";
import KSearchInput from "./KSearchInput.vue";
const props = defineProps({
  items: {
    type: Array,
    required: true,
  },
  label: {
    type: String,
  },
  iconed: {
    type: Boolean,
  },
  expand: {
    type: Boolean,
  },
  rounded: {
    type: Boolean,
  },
});
const emit = defineEmits(["input"]);
const searchedItems = ref(props.items);
const inputVal = ref("");

const handleSeach = (res) => {
  inputVal.value = res;
  searchedItems.value = props.items.filter((item) =>
    item
      .toString()
      .toLowerCase()
      .includes(inputVal.value.toString().toLowerCase())
  );
  emit("input", inputVal.value);
};
const handleItemClick = (res) => {
  handleSeach(res);
  inputVal.value = res;
  emit("input", inputVal.value);
};
</script>

<style scoped>
.data-list-container {
  width: 100%;
  /* width: 500px; */
  height: fit-content;
  position: relative;
  padding-bottom: 10px;
}
.data-list-container:hover .items-container {
  display: block;
}
.data-list-container:focus-within .items-container{
  display: block;
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
