<template>
  <v-row>
    <v-col>
      <v-card>
        <v-img
          src="/top/top2.jpeg"
          class="scaleItem1"
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
      gsap.to('.scaleItem1', {
        duration: 0.5,
        scale: [1, 1],
        scrollTrigger: {
          trigger: '.scaleItem1',
          start: 'center center',
          markers: false
        }
      })
    }
  }
}
</script>

<style scoped>

.scaleItem1 {
  opacity: 1;
  transform: scale(0,0)
}
</style>