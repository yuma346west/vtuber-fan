<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <div class="text-center">
        <TopHeader />
      </div>
      <v-card>
        <v-card-actions>
          <v-spacer />
          <!-- <v-btn
            nuxt
            to="/top"
          >
            トップへ
          </v-btn> -->
          <v-btn
            @click="imgChange"
          >
            画像更新
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    Logo,
    VuetifyLogo
  },
  methods: {
    imgChange () {
      this.$store.dispatch('topHeader/count')
    }
  }
}
</script>
