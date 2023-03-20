<template>
  <div>
    <div>当前环境是：{{ envCn }}环境</div>
    <el-button >按钮</el-button>
    <router-view />
  </div>
</template>
<script>
export default {
    name: "App",
    data () {
      return {
        env: import.meta.env.VITE_APP_ENV,
        envCn: import.meta.env.VITE_APP_ENV_CN,
      }
    },
    async mounted() {
      console.log('2222')
    },
};
</script>
<style lang="less">
@import "./styles/index.less";
</style>