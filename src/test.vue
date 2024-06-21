<template>
  <!-- <h1>Hi</h1>

  <KButton
    type="primary"
    @click="console.log('working')"
    size="medium"
    edges="rounded"
  >
    <template #icon-first>
      +
    </template>
    Primary
    <template #icon-last>
      <i>+</i>
    </template>
  </KButton>
  
  <KButton type="success" size="small"  >Success</KButton>
  <KButton>Default</KButton>
  <KButton type="danger" size="large" edges="rounded" >Danger</KButton>
  <KButton type="secondary">secondary</KButton>
  <KButton type="warning">warning</KButton>
  <KButton type="link">link</KButton> -->

  <!-- <div class="btns-container-table">
    <h1>Sizes and edges</h1>
    <p>small</p>
    <p>medium</p>
    <p>large</p>

    <p>sharp</p>
    <KButton customClass="bg-red-300" size="small" edges="sharp" @click="console.log('working')">label</KButton>
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
    <KButton type="primary" disabled>Primary</KButton>
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
  </div> -->

  <!-- <div class="btns-container">
    <KButton type="default">default</KButton>
    <KButton type="primary">Primary</KButton>
    <KButton type="secondary">secondary</KButton>
    <KButton type="success">success</KButton>
    <KButton type="danger">danger</KButton>
    <KButton type="info">info</KButton>
    <KButton type="link">link</KButton>

    <KButton type="default" size="small">default</KButton>
    <KButton type="primary" size="small">Primary</KButton>
    <KButton type="secondary" size="small">secondary</KButton>
    <KButton type="success" size="small">success</KButton>
    <KButton type="danger" size="small">danger</KButton>
    <KButton type="info" size="small">info</KButton>
    <KButton type="link" size="small">link</KButton>

    <KButton type="default" size="medium">default</KButton>
    <KButton type="primary" size="medium">Primary</KButton>
    <KButton type="secondary" size="medium">secondary</KButton>
    <KButton type="success" size="medium">success</KButton>
    <KButton type="danger" size="medium">danger</KButton>
    <KButton type="info" size="medium">info</KButton>
    <KButton type="link" size="medium">link</KButton>

    <KButton type="default" size="large">default</KButton>
    <KButton type="primary" size="large">Primary</KButton>
    <KButton type="secondary" size="large">secondary</KButton>
    <KButton type="success" size="large">success</KButton>
    <KButton type="danger" size="large">danger</KButton>
    <KButton type="info" size="large">info</KButton>
    <KButton type="link" size="large">link</KButton>

    <KButton type="default" edges="sharp">default</KButton>
    <KButton type="primary" edges="sharp">Primary</KButton>
    <KButton type="secondary" edges="sharp">secondary</KButton>
    <KButton type="success" edges="sharp">success</KButton>
    <KButton type="danger" edges="sharp">danger</KButton>
    <KButton type="info" edges="sharp">info</KButton>
    <KButton type="link" edges="sharp">link</KButton>

    <KButton type="default" edges="normal">default</KButton>
    <KButton type="primary" edges="normal">Primary</KButton>
    <KButton type="secondary" edges="normal">secondary</KButton>
    <KButton type="success" edges="normal">success</KButton>
    <KButton type="danger" edges="normal">danger</KButton>
    <KButton type="info" edges="normal">info</KButton>
    <KButton type="link" edges="normal">link</KButton>

    <KButton type="default" edges="rounded">default</KButton>
    <KButton type="primary" edges="rounded">Primary</KButton>
    <KButton type="secondary" edges="rounded">secondary</KButton>
    <KButton type="success" edges="rounded">success</KButton>
    <KButton type="danger" edges="rounded">danger</KButton>
    <KButton type="info" edges="rounded">info</KButton>
    <KButton type="link" edges="rounded">link</KButton>

    <KButton type="default">default</KButton>
    <KButton type="primary">Primary</KButton>
    <KButton type="secondary">secondary</KButton>
    <KButton type="success">success</KButton>
    <KButton type="danger">danger</KButton>
    <KButton type="info">info</KButton>
    <KButton type="link">link</KButton>
  </div> -->

  <!-- <FieldInput
    type="username"
    label="User Name"
    placeholder="Please enter your user name"
    @input="handleInput"
    required
    expand
  /> -->

</template>

<script>
// import FieldInput from "./components/FieldInput.vue";
// import KButton from "./components/KButton.vue";

/**
 * const columns = ["Id", "Name", "Age", "Gender","Role"];
const data = ref([
  {
    id: 1,
    name: "klaxe",
    age: 20,
    gender: "male",
    role: "SDE",
    department: "Engineering",
    location: "New York",
    experience: 2,
    education: "Bachelor's",
    salary: 80000,
  },
  {
    id: 2,
    name: "talia",
    age: 25,
    gender: "female",
    role: "Product Manager",
    department: "Product",
    location: "San Francisco",
    experience: 5,
    education: "Master's",
    salary: 120000,
  },
  {
    id: 3,
    name: "jordan",
    age: 30,
    gender: "male",
    role: "Designer",
    department: "Design",
    location: "Austin",
    experience: 7,
    education: "Bachelor's",
    salary: 95000,
  },
  {
    id: 4,
    name: "alex",
    age: 28,
    gender: "male",
    role: "Data Scientist",
    department: "Data",
    location: "Seattle",
    experience: 6,
    education: "PhD",
    salary: 130000,
  },
  {
    id: 5,
    name: "morgan",
    age: 35,
    gender: "female",
    role: "HR Manager",
    department: "Human Resources",
    location: "Chicago",
    experience: 10,
    education: "Master's",
    salary: 110000,
  },
]);
const fields = ["id", "name", "age", "gender",'role'];
 * 
 * 
 */



</script>

<style>
.btns-container {
  width: 100%;
  height: fit-content;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  place-items: center;
}
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
