<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import axios, { AxiosRequestConfig } from 'axios';
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, email } from '@vuelidate/validators';

const toast = useToast();

interface FormInterface {
  name: string;
  email: string;
  message: string;
}

const defaultForm: FormInterface = {
  name: '',
  email: '',
  message: '',
};

const form = ref<FormInterface>({ ...defaultForm });

/**
 * The required validation rules.
 */
const rules = {
  name: { required, minLength: minLength(3) },
  email: { required, email },
  message: { required, minLength: minLength(10) },
};

/**
 * vuelidate
 */
const v$ = useVuelidate(rules, form);

/**
 * error for form submit
 */
const error = ref<boolean>(false);

/**
 * handle submit. dont need a service layer for now
 */
const handleSubmit = async (e: Event) => {
  try {
    error.value = false;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...form.value }),
    })
      .then(() => {
        if (!error.value) doToast();
      })
      .catch((error) => {
        error.value = true;
        doToast();
      });
  } catch (e) {
    console.log(e);
  }
  e.preventDefault();

  // const axiosConfig: AxiosRequestConfig = {
  //   headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  // };

  // error.value = false;
  // await axios
  //   .post('/', form.value, axiosConfig)
  //   .then((response) => {
  //     console.log(response);
  //     if (!error.value) doToast();
  //   })
  //   .catch((e: Error) => {
  //     error.value = true;
  //     doToast();
  //   });
};

/**
 *
 * @param data
 * encode the query params
 */
const encode = (data: FormInterface) => {
  const d = Object.keys(data)
    .map((key) => `${key}=${data[key as keyof FormInterface]}`)
    .join('&');

  console.log(d);
  return d;
};

/**
 * Display the toast message.
 */
const doToast = () => {
  toast.add({
    severity: error.value ? 'error' : 'success',
    summary: error.value ? 'Error' : 'Sent',
    detail: error.value ? 'There was an error. Please try again' : 'Thank you! Your info has been sent over ',
    life: 300000,
  });
};
</script>

<template>
  <form name="contact" netlify class="flex flex-wrap w-full">
    <div class="flex w-full">
      <h3>Contact Us</h3>
    </div>
    <div class="w-full">
      <div class="field flex flex-column">
        <label for="name" class="required">Name</label>
        <!-- <Skeleton v-if="tenantStore.loading" height="2.3rem" class="w-full" /> -->
        <InputText id="name" v-model="v$.name.$model" class="w-6" />
        <div v-for="error of v$.name.$errors" :key="error.$uid" class="input-errors">
          <div class="p-error">{{ error.$message }}</div>
        </div>
      </div>

      <div class="field flex flex-column">
        <label for="email" class="required">Email</label>
        <InputText id="email" v-model="v$.email.$model" class="w-6" />
        <div v-for="error of v$.email.$errors" :key="error.$uid" class="input-errors">
          <div class="p-error">{{ error.$message }}</div>
        </div>
      </div>
      <div class="field flex flex-column">
        <label for="message" class="required">message</label>
        <textarea id="message" v-model="v$.message.$model" name="message" class="w-6"></textarea>
        <div v-for="error of v$.message.$errors" :key="error.$uid" class="input-errors">
          <div class="p-error">{{ error.$message }}</div>
        </div>
      </div>
      <Button id="save_btn" type="button" label="Send" :disabled="v$.$invalid" class="button" @click="handleSubmit" />
    </div>
  </form>
</template>

<style scoped lang="scss"></style>
