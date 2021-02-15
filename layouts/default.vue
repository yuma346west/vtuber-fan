<template>
  <v-app>
    <v-app-bar
      fixed
      app
    >
      <v-tabs>
        <v-tab
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          class="tab-items"
        >
          <v-icon>{{ item.icon }}</v-icon>
          <span>{{item.title}}</span>
        </v-tab>
      </v-tabs>

<!--        <v-hover-->
<!--          v-for="(item, i) in items"-->
<!--          :key="i"-->
<!--          :to="item.to"-->
<!--          router-->
<!--          exact>-->
<!--          <v-card class="d-flex flex-row pa-2" outlined tile>{{item.title}}</v-card>-->
<!--        </v-hover>-->
    </v-app-bar>
    <v-main>
      <nuxt />
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      fixed: false,
      items: [
        {
          icon: 'mdi-alert-outline',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '開発中',
          to: '/develop'
        },
        {
          icon: 'mdi-chart-bubble',
          title: '水滴アニメ',
          to: '/development/dropWater'
        }
      ],
    }
  },
  methods: {
  }
}
</script>

<style scoped>
/*.tab-items {*/
/*  color: #111;*/
/*}*/
/*.tab-items:hover {*/
/*  background-color: #ffa07a;*/
/*  color: #fff;*/
/*}*/
</style>
