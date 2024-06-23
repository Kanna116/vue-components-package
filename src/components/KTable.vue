<template>
  <table
    :style="{ width: expand ? '100%' : 'fit-content' }"
    :class="[rounded ? 'rounded' : '', noBorder ? 'no-border' : '']"
  >
    <thead>
      <tr class="heading-row">
        <th v-for="(column, index) in columns" :key="index">{{ column }}</th>
      </tr>
    </thead>
    <tbody :class="[striped ? 'striped' : '']">
      <tr v-for="(value, index) in newData" :key="index">
        <td v-for="(item, index) in value" :key="index">{{ item }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { defineProps, computed } from "vue";
const props = defineProps({
  columns: {
    type: Array,
    required: true,
  },
  data: {
    type: Array,
    required: true,
  },
  fields: {
    type: Array,
    required: true,
  },
  striped: {
    type: Boolean,
  },
  rounded: {
    type: Boolean,
  },
  expand: {
    type: Boolean,
  },
  noBorder: {
    type: Boolean,
  },
});

// you can use this for column names console.log(Object.keys(yourValuesObject));
const newData = computed(() => {
  if (!props.fields) return props.data;

  return props.data.map((item) =>
    props.fields.reduce((newItem, field) => {
      if (field in item) {
        newItem[field] = item[field];
      }
      return newItem;
    }, {})
  );
});
</script>

<style scoped>
table {
  font-family: inherit;
  border-collapse: collapse;
  width: fit-content;
  border: 1px solid #e7e9eb;
  /* min-width: 360px; */
  cursor: default;
}
th {
  text-align: start;
  text-transform: capitalize;
}
td,th
{
  padding: 10px 20px;
  border-bottom: 1px solid #d1d5db;

}
/* add this to tbody element to have striped rows */
.striped tr:nth-child(even) {
  background-color: #f2f2f2;
}

/* add this class to table element to have rounded table  */
.rounded {
  border-radius: 10px;
  border-style: hidden;
  box-shadow: 0 0 0 1px #d1d5db;
}
tr:not(.heading-row):hover {
  transition: 100ms ease;
  background-color: #e7e9eb;
}
.no-border {
  border: 0px;
}
.no-border td{
  border: 0px;
}
</style>
