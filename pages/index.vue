<template>
  <v-app style="background-color: #ffe">
    <!-- トップ大きい画像 -->
    <imageLayer/>
    <!--
    関連コンテンツ
    -->
    <v-container class="center">
      <v-item-group>
        <v-row
          v-for="(items, i) in getContentList()"
          :key="i"
          class="mb-6"
        >
          <v-col
            class="d-flex justify-space-around">
            <v-sheet
              v-for="(item, j) in items"
              :key="j"
              class="rounded-lg"
              color="white"
              elevation="4"
              height="240"
              width="240"
            >
              <v-hover v-slot="{ hover }">
                <v-card>
                  <v-img
                    :src="item.img.length ? item.img : '/polka/blankIcon.png'"
                  >
                    <v-card-text
                      v-if="hover && item.img.length"
                      style="text-align: center;color: #000;background-color: gray;opacity: 0.8;height: 240px;"
                      v-on:click="urlOpen(item.src)"
                    >
                      <div class="font-weight-light title mb-2">
                        {{ item.img.length ? item.text : '' }}
                      </div>
                    </v-card-text>
                  </v-img>
                </v-card>
              </v-hover>
            </v-sheet>
          </v-col>
        </v-row>
      </v-item-group>
    </v-container>
  </v-app>
</template>

<script>
import imageLayer from '~/components/imageLayer'

export default {
  components: {
    imageLayer
  },
  data() {
    return {
      contentList: [
        {
          text: 'youtubeへのリンク',
          img: '/polka/faceIcon.png',
          src: 'https://www.youtube.com/channel/UCK9V2B22uJYu3N7eR_BT9QA'
        },
        {
          text: 'twitterへのリンク',
          img: '/polka/twitterIcon.png',
          src: 'https://twitter.com/omarupolka'
        },
        {
          text: 'boothへのリンク',
          img: '/polka/boothIcon.png',
          src: 'https://hololive.booth.pm/'
        },
        {
          text: '公式へのリンク',
          img: '',
          src: ''
        }
      ]
    }
  },
  methods: {
    getContentList() {
      let i = 0, ret = [];
      // 3つずつ取り出す
      while (1) {
        const tmp = this.contentList.slice(i, i + 3)
        i += 3
        ret.push(tmp)
        if (tmp.length < 3) break
      }
      // 最後の要素が3つに足りなかったらblankで穴埋め
      while (ret[ret.length - 1].length < 3) {
        ret[ret.length - 1].push({text: '', img: ''})
      }
      return ret
    },
    urlOpen(url) {
      if (url.length > 0) {
        window.open(url, '_blank')
      }
    }
  }
}
</script>

<style scoped>
.center {
  width: 60%;
  margin: 0 auto;
}
</style>
