<template>
  <!-- <h1>Test</h1> -->
  <KDataList :items="cities" @input="handleInput" iconed rounded label="Country"/>

  <KSearchInput
    placeholder="Seach employee by id"
    label="Employee search"
    @input="handleSearch"
    rounded
    iconed
    :expand="false"
  />
  <!-- {{ inputVal }} -->
  <!-- fieldinput icon test -->
  <FieldInput
    type="username"
    @input="handleInput"
    label="Username"
    rounded
    iconed
  />
  <FieldInput type="password" label="Password" rounded iconed />
  <FieldInput type="email" label="Email" rounded iconed />

  values is {{ inputVal }}
  <div class="btns-container-table">
    <h1>Sizes and edges</h1>
    <p>small</p>
    <p>medium</p>
    <p>large</p>

    <p>sharp</p>
    <KButton
      customClass="bg-red-300"
      size="small"
      edges="sharp"
      @click="console.log('working')"
      >label</KButton
    >
    <KButton edges="sharp" size="medium">label</KButton>
    <KButton edges="sharp" size="large">label</KButton>

    <p>normal</p>
    <KButton size="small" edges="normal">label</KButton>
    <KButton size="medium" edges="normal">label</KButton>
    <KButton size="large" edges="normal">label</KButton>

    <p>rounded</p>
    <KButton size="small" edges="rounded">label</KButton>
    <KButton size="medium" edges="rounded">label</KButton>
    <KButton size="large" edges="rounded">label</KButton>

    <p>types</p>
    <KButton type="default">default</KButton>
    <KButton type="primary">Primary</KButton>
    <KButton type="secondary">secondary</KButton>
    <p></p>
    <KButton type="success">success</KButton>
    <KButton type="danger">danger</KButton>
    <KButton type="info">info</KButton>
    <p></p>
    <KButton type="link">link</KButton>
    <p></p>
    <p></p>

    <p>iconed</p>
    <KButton type="primary">
      <template #icon-first>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z"
            fill="#ffffff"
          />
        </svg>
      </template>
      Front-icon</KButton
    >
    <KButton type="primary">
      Last-icon
      <template #icon-last>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="#ffffff"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 6.75H6.75V12H5.25V6.75H0V5.25H5.25V0H6.75V5.25H12V6.75Z"
            fill="#ffffff"
          />
        </svg>
      </template>
    </KButton>
    <p></p>
    <p>Disabled</p>
    <KButton disabled> disabled </KButton>
  </div>

  <KTable
    :columns="columns"
    :data="data"
    :fields="fields"
    rounded
    striped
    expand
    noBorder
  />
</template>

<script setup>
import { ref } from "vue";
import KSearchInput from "./KSearchInput.vue";
import FieldInput from "./FieldInput.vue";
import KButton from "./KButton.vue";
import KTable from "./KTable.vue";
const columns = ["Order Id", "Customer Name", "Product Name"];

import KDataList from "./KDataList.vue";
const cities = ref(["India", "USA", "Africa", "Korea", "Japan"]);
// const inputVal = ref('')

const data = ref([
  {
    order_id: "SO123456",
    customer_name: "John Doe",
    product_name: "Laptop",
    quantity: 1,
    price_per_unit: 1200.0,
    order_date: "2024-06-01",
    shipping_address: "123 Elm Street, Springfield, IL",
  },
  {
    order_id: "SO123457",
    customer_name: "Jane Smith",
    product_name: "Smartphone",
    quantity: 2,
    price_per_unit: 699.99,
    order_date: "2024-06-02",
    shipping_address: "456 Oak Avenue, Metropolis, NY",
  },
  {
    order_id: "SO123458",
    customer_name: "Alice Johnson",
    product_name: "Tablet",
    quantity: 3,
    price_per_unit: 329.99,
    order_date: "2024-06-03",
    shipping_address: "789 Pine Lane, Gotham, CA",
  },
  {
    order_id: "SO123459",
    customer_name: "Bob Brown",
    product_name: "Headphones",
    quantity: 4,
    price_per_unit: 89.99,
    order_date: "2024-06-04",
    shipping_address: "101 Maple Drive, Star City, TX",
  },
  {
    order_id: "SO123460",
    customer_name: "Charlie Davis",
    product_name: "Smartwatch",
    quantity: 1,
    price_per_unit: 199.99,
    order_date: "2024-06-05",
    shipping_address: "202 Birch Boulevard, Central City, FL",
  },
  {
    order_id: "SO123461",
    customer_name: "Dana White",
    product_name: "Camera",
    quantity: 2,
    price_per_unit: 499.99,
    order_date: "2024-06-06",
    shipping_address: "303 Cedar Street, Coast City, NJ",
  },
  {
    order_id: "SO123462",
    customer_name: "Eve Green",
    product_name: "Monitor",
    quantity: 1,
    price_per_unit: 299.99,
    order_date: "2024-06-07",
    shipping_address: "404 Willow Way, Keystone City, OH",
  },
  {
    order_id: "SO123463",
    customer_name: "Frank Black",
    product_name: "Keyboard",
    quantity: 3,
    price_per_unit: 49.99,
    order_date: "2024-06-08",
    shipping_address: "505 Chestnut Court, Smallville, KS",
  },
  {
    order_id: "SO123464",
    customer_name: "Grace Brown",
    product_name: "Mouse",
    quantity: 5,
    price_per_unit: 19.99,
    order_date: "2024-06-09",
    shipping_address: "606 Spruce Road, Fawcett City, GA",
  },
  {
    order_id: "SO123465",
    customer_name: "Hank Green",
    product_name: "Printer",
    quantity: 2,
    price_per_unit: 159.99,
    order_date: "2024-06-10",
    shipping_address: "707 Cypress Lane, Blüdhaven, MI",
  },
]);
const fields = ["order_id", "customer_name", "product_name"];

const inputVal = ref("");
const handleSearch = (res) => {
  inputVal.value = res;
};
const handleInput = (res) => {
  inputVal.value = res;
  // console.log(res);
};
</script>

<style scoped>
.btns-container-table {
  width: 80%;
  margin-inline: auto;
  height: fit-content;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 0px;
  place-items: center;
  /* align-items: center; */
}
.bg-red-300 {
  background-color: red;
}
.btns-container-table p {
  text-transform: capitalize;
}
</style>
