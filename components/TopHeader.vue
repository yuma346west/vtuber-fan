<template>
  <div class='top-header'>
    <v-img
        class="vtuber-header"
        :src="getImagePath()"
        max-height="480px"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      imgPath: '/top/top',
      extention: '.jpeg'
    }
  },
  computed: {
    ...mapGetters({
      imgCounter:'topHeader/getImgCounter'
    })
  },
  methods: {
    getImagePath () {
      return this.imgPath + this.imgCounter + this.extention
    }
  }
}
</script>

<style scoped>
div {
  margin: 0 auto;
}
</style>