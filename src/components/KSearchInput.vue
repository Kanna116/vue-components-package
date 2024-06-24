<template>
  <div
    class="custom-search"
    :style="{ width: expand ? '100%' : 'fit-content' }"
  >
    <FieldInput
      type="search"
      :placeholder="placeholder ? placeholder : 'Search..'"
      :label="label"
      @input="handleInput"
      v-model="searchTerm"
      :rounded="rounded"
      expand
      :iconed="iconed"
    >
    </FieldInput>
  </div>
</template>
<script setup>
import FieldInput from "./FieldInput.vue";
import { defineEmits, defineProps, watch, ref } from "vue";
const props = defineProps({
  rounded: {
    type: Boolean,
  },
  expand: {
    type: Boolean,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  iconed: {
    type: Boolean,
  },
  modelValue: {
    type: String,
    default: "",
  },
});

const searchTerm = ref(props.modelValue);
const emit = defineEmits(["input"]);
const handleInput = (res) => {
  searchTerm.value = res;
  emit("input", res);
};
watch(
  () => props.modelValue,
  (newValue) => {
    searchTerm.value = newValue;
  }
);
</script>

<style scoped>
.custom-search {
  width: fit-content;
  height: fit-content;
}
</style>
