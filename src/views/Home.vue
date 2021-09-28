<template>
  <div class="home">home</div>
  <div>{{ count }}</div>
  <button @click="click">click</button>
</template>
<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default defineComponent({
  setup() {
    const store = useStore()
    const count = ref<number>(0)
    const click = async () => {
      // store.commit('increment')
      await store.dispatch('increment')
      count.value = store.getters.double
      console.log('好麻烦')
      // console.log(import.meta.env.MODE)
      // console.log(import.meta.env.BASE_URL)
      // console.log(import.meta.env.PROD)
      // console.log(import.meta.env.DEV)
    }
    return { count, click }
  }
})
</script>
<style lang="less">
.home {
  font-size: 30px;
  color: blue;
}
</style>
