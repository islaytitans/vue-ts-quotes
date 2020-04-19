<template>
  <div class="container">
    <app-new-quote @quoteAdded="addQuote"></app-new-quote>
    <app-quote-grid
      :quotes="quotes"
      @quoteDeleted="deleteQuote"
    ></app-quote-grid>
    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          Info: Click on a quote to delete it
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Quote from "./interfaces/Quote";

export default Vue.extend({
  name: "App",
  data() {
    return {
      maxQuotes: 10,
      quotes: new Array<Quote>(),
    };
  },
  methods: {
    addQuote(newQuote: Quote) {
      this.quotes.push(newQuote);
    },
    deleteQuote(index: number) {
      this.quotes.splice(index, 1);
    },
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
  },
});
</script>

<style></style>
