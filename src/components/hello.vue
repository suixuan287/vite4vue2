<template>
  <div>
    hello {{ txt }}
  </div>
</template>

<script>
export default {
  name: 'my-hello',
  data() {
    return {
      txt: import.meta.env.VITE_APP_ENV_CN
    }
  }
}
</script>