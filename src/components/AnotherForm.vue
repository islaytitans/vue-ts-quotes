<template>
  <div class="container">
    <form>
      <div class="row" v-if="!isSubmitted">
        <div
          class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
        >
          <!-- Exercise 1 -->
          <!-- Create a Signup Form where you retrieve the following Information -->
          <!-- Full Name (First Name + Last Name) -->
          <!-- Mail -->
          <!-- Password -->
          <!-- Store Data? Yes/No -->
          <app-full-name v-model="fullName"></app-full-name>
          <label for="mail">Mail</label>
          <input type="text" id="mail" v-model="mail" class="form-control" />
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            class="form-control"
          />
          <label for="store-data">Store data?</label>
          <input type="checkbox" id="store-data" v-model="storeData" />
          <hr />
          <button
            type="submit"
            @click.prevent="submitForm"
            class="btn btn-primary"
          >
            Submit
          </button>

          <!-- Exercise 2 -->
          <!-- Only display the Form if it has NOT been submitted -->
          <!-- Display the Data Summary ONCE the Form HAS been submitted -->

          <!-- Exercise 3 -->
          <!-- Edit the Example from above and create a custom "Full Name" Control -->
          <!-- which still holds the First Name and Last Name Input Field -->
        </div>
      </div>
    </form>
    <hr />
    <div class="row" v-if="isSubmitted">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h4>Your Data</h4>
          </div>
          <div class="panel-body">
            <p>Full Name: {{ fullName }}</p>
            <p>Mail: {{ mail }}</p>
            <p>Password: {{ password }}</p>
            <p>Store in Database?: {{ storeData }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FullName from "@/components/FullName.vue";

export default Vue.extend({
  data() {
    return {
      fullName: "",
      mail: "",
      password: "",
      storeData: false,
      isSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      this.isSubmitted = true;
    },
  },
  components: {
    appFullName: FullName,
  },
});
</script>

<style></style>
