<template>
  <div class="row">
    <app-quote v-for="(quote, index) in quotes" :key="index">{{
      quote
    }}</app-quote>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Quote from "@/components/Quote.vue";

export default Vue.extend({
  props: ["quotes"],
  components: {
    appQuote: Quote
  }
});
</script>

<style></style>
