<template>
  <div>
    <h1 class="h1">404</h1>
    <my-hello />
  </div>
</template>
<script>
import MyHello from '@/components/hello.vue'
export default {
  name: 'NotFound',
  components: {
    MyHello
  }
}
</script>
<style scoped lang="less">
  .h1{
      text-align: center;
  }
</style>
