<template>
  <div class='top-header'>
    <v-img
        class="vtuber-header vtop1"
        src="/top/top1.jpeg"
        max-height="400px"
    />
    <v-img
        class="vtuber-header vtop2"
        src="/top/top2.jpeg"
        max-height="400px"
    />
    <v-img
        class="vtuber-header vtop3"
        src="/top/top3.jpeg"
        max-height="400px"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import {gsap} from 'gsap'

export default {
  data () {
    return {
      imgPath: '/top/top',
      extension: '.jpeg'
    }
  },
  computed: {
    ...mapGetters({
      imgCounter:'topHeader/getImgCounter'
    }),
  },
  mounted () {
    this.$store.commit('topHeader/reset')
    this.fadeInImg('vtop'+this.imgCounter)
  },
  methods: {
    getImagePath () {
      return this.imgPath + this.imgCounter + this.extension
    },
    // 画像フェードイン/アウトアニメーション演出
    // TODO ホットリロードでアニメーションが崩壊するのであとで調べる
    fadeInImg(className) {
      const classTag = '.'+className
      gsap.timeline({
        onComplete: () => {
          this.fadeOutImg('vtop'+this.imgCounter)
          this.$store.dispatch('topHeader/count')
          this.fadeInImg('vtop'+this.imgCounter)
        }})
        .add(gsap.to(classTag,{opacity: 1, duration: 2}))
        .add(gsap.to(classTag,{opacity: 1, duration: 4})) // もっとスマートに待ち時間を実装したい
    },
    fadeOutImg(className) {
      const classTag = '.'+className
      gsap.timeline()
        .add(gsap.to(classTag,{opacity: 0, duration: 2}))
    }
  }
}
</script>

<style scoped>
.top-header {
  height: 400px;
  position: relative;
}
.vtuber-header {
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  opacity: 0;
}
.vtop1 {
  z-index: 1;
}
.vtop2 {
  z-index: 2;
}
.vtop3 {
  z-index: 3;
}
</style>
