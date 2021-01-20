<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <div class="text-center">
          <topHeader />
        </div>
      </v-col>
    </v-row>
    <v-container class="space200">
    </v-container>
    <scroll-item />
    <v-container class="space200">
    </v-container>
    <scale />
    <v-container class="footer">
    </v-container>
  </v-container>
</template>

<script>
import ScrollItem from '~/components/develop/scrollItem.vue'
import topHeader from '~/components/develop/topHeader.vue'
import Scale from '~/components/develop/scale.vue'

export default {
  components: {
    topHeader,
    ScrollItem,
    Scale
  }
}
</script>

<style scoped>
.space200 {
  height: 200px;
}
.footer {
  height: 20px;
}
</style>
