<template>
<v-container>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div class="text-center">
        <TopHeader />
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
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mapActions } from 'vuex'
import ScrollItem from '~/components/scrollItem.vue'
import Scale from '~/components/scale.vue'

export default {
  components: {
    Logo,
    VuetifyLogo,
    ScrollItem,
    Scale
  }
}
</script>

<style scoped>
.space200 {
  height: 200px;
}
.space480 {
  height: 480px;
}
.footer {
  height: 20px;
}
</style>