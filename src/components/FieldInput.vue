<!-- InputComponent.vue -->
<template>
  <div class="custom-input" :style="{ width: expand ? '100%' : '200px' }">
    <label v-if="label" class="custom-label" :for="label">
      {{ label }} <span v-if="required">*</span>
    </label>
    <div
      class="custom-input-field"
      :style="{
        borderRadius: rounded ? '50px' : '5px',
        padding: rounded && !iconed ? '10px' : '',
      }"
    >
      <span v-if="iconed" class="icon-first">
        <slot name="icon">icon</slot>
      </span>
      <input
        class="regular-input"
        :class="type == 'search' && iconed ? 'search-input' : ''"
        :type="inputType"
        :name="label"
        :id="label"
        :placeholder="placeholder"
        v-model="inputVal"
        @input="validate"
        @blur="validate"
        :required="required"
        :aria-required="required"
      />
    </div>
    <p v-if="msg" aria-live="polite" class="error-msg">{{ msg }}</p>
  </div>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits } from "vue";

const msg = ref("");
const emit = defineEmits(["input"]);
const props = defineProps({
  type: {
    type: String,
    required: true,
    validator(type) {
      return ["username", "password", "email", "search"].includes(type);
    },
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  required: {
    type: Boolean,
  },
  expand: {
    type: Boolean,
  },
  rounded: {
    type: Boolean,
  },
  iconed: {
    type: Boolean,
  },
  modelValue: {
    type: String,
    default: ""
  }
});

const inputVal = ref(props.modelValue);
const inputType = computed(() => {
  return props.type === "password"
    ? "password"
    : props.type === "search"
    ? "search"
    : "text";
});

const validate = () => {
  switch (props.type) {
    case "password":
      msg.value = validatePassword(inputVal.value);
      break;
    case "username":
      msg.value = validateUsername(inputVal.value);
      break;
    case "email":
      msg.value = validateEmail(inputVal.value);
      break;
    default:
      break;
  }

  emit("input", inputVal.value);
};

const validateUsername = (value) => {
  value = value.trim();
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
  if (!value) {
    return "Please enter your username";
  }
  if (value.length < 3) {
    return "The username must be above 3 characters";
  }
  if (value.includes(" ")) {
    return "User Name is not allowed to have spaces";
  }
  if (hasSpecialChar) {
    return "Other than _ no special characters are allowed";
  }
  return "";
};

const validatePassword = (value) => {
  if (!value) {
    return "Password is required";
  }
  const minLength = 8;
  if (value.length < minLength) {
    return "Please enter at least 8 characters";
  }
  const hasUpperCase = /[A-Z]/.test(value);
  const hasLowerCase = /[a-z]/.test(value);
  const hasNumber = /[0-9]/.test(value);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);

  if (!hasUpperCase) {
    return "Enter at least 1 uppercase";
  }
  if (!hasLowerCase) {
    return "Enter at least 1 lowercase";
  }
  if (!hasNumber) {
    return "Enter at least 1 number";
  }
  if (!hasSpecialChar) {
    return "Enter at least 1 special character";
  }
  return "";
};

const validateEmail = (value) => {
  const regexPattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

  if (!value) {
    return "Please enter your email";
  }
  if (!regexPattern.test(value)) {
    return "Please enter a valid email ex: klaxe7@gmail.com";
  }
  return "";
};

watch(() => props.modelValue, (newValue) => {
  inputVal.value = newValue;
});
</script>

<style scoped>
.custom-input {
  width: 100%;
  height: fit-content;
  min-width: 200px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  gap: 5px;
}
.custom-label {
  text-transform: capitalize;
  font-size: 14px;
  font-weight: 500;
}
.custom-input-field {
  background: white;
  height: 40px;
  width: 100%;
  min-width: 250px;
  border-radius: 5px;
  border: 0.5px solid #d2d6db;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
}
.custom-input-field .regular-input {
  width: 100%;
  padding: 10px;
  border: 0;
  outline: 0;
}

.custom-input-field:focus-within {
  border: 2px solid #424242;
  outline: 0px;
}
.icon-first {
  height: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
}
.icon-first > * {
  scale: 0.4;
}
.custom-input-field .search-input {
  padding: 10px 10px 10px 0px;
}
.error-msg {
  font-size: 12px;
  font-weight: 600;
  color: red;
}
</style>
