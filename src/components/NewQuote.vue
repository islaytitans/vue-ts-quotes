<template>
  <div class="row">
    <div
      class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"
    >
      <label>Quote</label>
      <textarea class="form-control" row="3" v-model="quote"></textarea>
    </div>
    <div
      class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group"
    >
      <button class="btn btn-primary" @click.prevent="createNew">
        Add Quote
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      quote: ""
    };
  },
  methods: {
    createNew(): void {
      this.$emit("quoteAdded", this.quote);
      this.quote = "";
    }
  }
});
</script>

<style></style>
