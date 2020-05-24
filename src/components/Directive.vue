<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>Directives Exercise</h1>
        <!-- Exercise -->
        <!-- Build a Custom Directive which works like v-on (Listen for Events) -->
        <button v-customOn:click="clicked" class="btn btn-primary">
          Click me
        </button>
        <hr />
        <div
          style="width: 100px; height: 100px; background-color: lightgreen;"
          v-customOn:mouseenter="mouseEnter"
          v-customOn:mouseleave="mouseLeave"
        ></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { DirectiveBinding } from "vue/types/options";
export default Vue.extend({
  directives: {
    customOn: {
      bind(el: HTMLElement, bindings: DirectiveBinding) {
        //   el.onclick = function() {
        //       bindings.value();
        //   }
        const type = bindings.arg;
        const fn = bindings.value;
        el.addEventListener(type, fn);
      },
    },
  },
  methods: {
    clicked() {
      alert("I was clicked");
    },
    mouseEnter() {
      console.log("Mouse entered");
    },
    mouseLeave() {
      console.log("Mouse leave");
    },
  },
});
</script>

<style></style>
