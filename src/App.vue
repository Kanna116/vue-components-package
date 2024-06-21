<template>
  <!-- <KTable :columns="columns" :data="data" :fields="fields" /> -->
  <KTable :columns="columns" :data="data" :fields="fields" rounded />
  <!-- <KTable :columns="columns" :data="data" :fields="fields" noBorder /> -->
  <!-- <KTable :columns="columns" :data="data" :fields="fields" rounded/> -->
  <!-- <KTable :columns="columns" :data="data" :fields="fields" rounded  striped /> -->
  <!-- <KTable :columns="columns" :data="data" :fields="fields" rounded  striped expand/> -->
</template>

<script setup>
import { ref } from "vue";
import KTable from "./components/KTable.vue";
const columns = ["Order Id", "Customer Name", "Product Name"];
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
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;
  padding: 20px;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
</style>
