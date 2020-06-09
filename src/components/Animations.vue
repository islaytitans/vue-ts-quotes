<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
        <h1>CSS Animations</h1>
        <hr />
        <button class="btn btn-primary" @click="show = !show">
          Show alert
        </button>
        <br />
        <br />
        <select v-model="alertAnimation" class="form-control">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option>
        </select>
        <br />
        <br />
        <transition :name="alertAnimation">
          <div class="alert alert-info" v-if="show">1 This is some info</div>
        </transition>
        <transition name="slide" type="transition">
          <div class="alert alert-danger" v-if="show">2 This is some info</div>
        </transition>
        <transition name="fade" appear>
          <div class="alert alert-light" v-if="!show">3 This is some info</div>
        </transition>
        <transition
          enter-active-class="animate__animated animate__bounce"
          leave-active-class="animate__animated animate__shakeX"
        >
          <div class="alert alert-success" v-if="!show">
            4 This is some info
          </div>
        </transition>
        <transition :name="alertAnimation" mode="out-in">
          <div class="alert alert-danger" v-if="show" key="info">
            5 This is some info
          </div>
          <div class="alert alert-warning" v-if="!show" key="warning">
            6 This is some info
          </div>
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
      alertAnimation: "fade",
    };
  },
});
</script>

<style>
.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s;
}

.fade-leave {
  /* Not required but adding for info
  opacity: 1; */
}

.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
  /* Not required but adding for info
    transform: translateY(20px); */
}

.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}

.slide-leave {
}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
}

@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes slide-out {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
