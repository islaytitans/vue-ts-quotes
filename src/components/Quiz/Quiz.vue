<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1 class="text-center">The Super Quiz</h1>
      </div>
    </div>
    <hr />
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <component :is="mode" @answered="answered($event)" @confirmed="mode = 'app-question'"></component>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Answer from "./Answer.vue";
import Question from "./Question.vue";
export default Vue.extend({
  data() {
    return {
      mode: "app-question"
    };
  },
  methods: {
    answered(isCorrect: boolean) {
      if (isCorrect) {
        this.mode = "app-answer";
      } else {
        this.mode = "app-question";
        alert("Wrong answer - try again");
      }
    }
  },
  components: {
    appAnswer: Answer,
    appQuestion: Question
  }
});
</script>

<style></style>
