<template>
  <div>
    <v-img
      src="/polka/header3D.jfif"
    >
      <div class="area">
        <div class="drop"></div>
      </div>
    </v-img>
    <v-btn @click="reAnimation">再生</v-btn>
  </div>
</template>

<script>
import {gsap} from 'gsap'

export default {
  mounted() {
    this.animation()
  },
  methods: {
    animation: () => {
      let timeline = gsap.timeline({repeat: -1, repeatDelay: 0})
      timeline.to('.drop', {
        duration: 0.6,
        startAt: {
          scale: 0.4,
          alpha: 1,
        },
        scale: 1,
        alpha: 0,
        // ease: 'power2.out',
        boxShadow: '0 0 5px inset blue',
      })
    },
    reAnimation() {
      this.animation()
    }
  }
}
</script>

<style scoped>
.area {
  width: 150px;
  height: 150px;
  margin: 0;
  padding: 0;
}

.drop {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #303030;
}
</style>
