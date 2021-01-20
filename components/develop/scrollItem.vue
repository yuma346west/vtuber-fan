<template>
  <v-row>
    <v-col>
      <v-card>
        <v-img
          src="/top/top1.jpeg"
          class="scrollItem1"
          max-height="400px"
        />
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import {gsap} from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


if (process.client) {
  gsap.registerPlugin(ScrollTrigger)
}
export default {
  mounted() {
    this.scrollItem()
  },
  methods: {
    scrollItem () {
      gsap.to('.scrollItem1', {
        x: 500,
        duration: 1,
        alpha: 1,
        scrollTrigger: {
          trigger: '.scrollItem1',
          start: 'center center',
          markers: false
        }
      })
    }
  }
}
</script>

<style scoped>

.scrollItem1 {
  opacity: 0;
  position: relative; right: 500px; 
}
</style>