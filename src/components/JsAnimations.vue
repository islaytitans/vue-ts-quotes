<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>JS Animations</h1>
        <hr />
        <button class="btn btn-primary" @click="load = !load">
          Load / Remove Element
        </button>
        <br />
        <br />
        <transition
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @enter-cancelled="enterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @leave-cancelled="leaveCancelled"
          :css="false"
        >
          <div
            style="width: 300px; height: 100px; background-color: lightgreen"
            v-if="load"
          ></div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      show: false,
      load: true,
      elementWidth: 100
    };
  },
  methods: {
    beforeEnter(el: HTMLElement) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el: HTMLElement, done: any) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth + round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterEnter(el: HTMLElement) {
      console.log("afterEnter");
    },
    enterCancelled(el: HTMLElement) {
      console.log("enterCancelled");
    },
    beforeLeave(el: HTMLElement) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el: HTMLElement, done: any) {
      console.log("leave");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = this.elementWidth - round * 10 + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 20);
    },
    afterLeave(el: HTMLElement) {
      console.log("afterLeave");
    },
    leaveCancelled(el: HTMLElement) {
      console.log("leaveCancelled");
    }
  }
});
</script>

<style></style>
