<template>
  <div class="container">
    <app-quiz></app-quiz>
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
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
    <hr />
    <app-form></app-form>
    <hr />
    <app-another-form></app-another-form>
    <hr />
    <app-directive></app-directive>
    <hr />
    <app-filters-mixins></app-filters-mixins>
    <hr />
    <app-animations></app-animations>
    <hr />
    <app-js-animations></app-js-animations>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import QuoteGrid from "./components/QuoteGrid.vue";
import NewQuote from "./components/NewQuote.vue";
import Quote from "./interfaces/Quote";
import Header from "./components/Header.vue";
import Form from "./components/Form.vue";
import AnotherForm from "./components/AnotherForm.vue";
import Directive from "./components/Directive.vue";
import FiltersMixins from "./components/FiltersMixins.vue";
import Animations from "./components/Animations.vue";
import JsAnimations from "./components/JsAnimations.vue";
import Quiz from "./components/Quiz/Quiz.vue";

export default Vue.extend({
  name: "App",
  data() {
    return {
      maxQuotes: 10,
      quotes: new Array<Quote>()
    };
  },
  methods: {
    addQuote(newQuote: Quote) {
      if (this.quotes.length >= this.maxQuotes) {
        return alert("Please delete a quote first");
      }
      this.quotes.push(newQuote);
    },
    deleteQuote(index: number) {
      this.quotes.splice(index, 1);
    }
  },
  components: {
    appQuoteGrid: QuoteGrid,
    appNewQuote: NewQuote,
    appHeader: Header,
    appForm: Form,
    appAnotherForm: AnotherForm,
    appDirective: Directive,
    appFiltersMixins: FiltersMixins,
    appAnimations: Animations,
    appJsAnimations: JsAnimations,
    appQuiz: Quiz
  }
});
</script>

<style></style>
