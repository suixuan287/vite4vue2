<template>
  <div>
        <my-hello />
        <h1 class="h1">欢迎使用微应用 -- 当前是Vue2版本微应用</h1>
        <el-button type="primary">我是按钮</el-button>
        <router-link to="Property">点击路由</router-link>
        <div class="bg"></div>
        <img class="img" src="@/images/logo.png" />

        <el-calendar
          v-model="calendarData"
        >
        <template
          slot="dateCell"
          slot-scope="{date, data}">
          <p :class="data.isSelected ? 'is-selected' : ''">
            {{ data.day.split('-').slice(1).join('-') }} {{ data.isSelected ? '✔️' : ''}}
          </p>
          <el-input v-model="dataInput[data.day]" />
        </template>
        </el-calendar>
        <el-button @click="setVal">设置价格</el-button>
        <el-button @click="submit">提交一下</el-button>
  </div>
</template>
<script>
import MyHello from '@/components/hello.vue'
import dayjs from 'dayjs'

export default {
    name: "welcome",
    data() {
      return {
        calendarData: new Date(),
        dataInput: {},
        defaultPrice: 5
      }
    },
    components: {
      MyHello
    },
    mounted() {
      this.initCom()
    },
    watch: {
      calendarData () {
        // for(let k in this.dataInput){
        //   this.$delete(this.dataInput, k)
        // }
        this.initCom()
      }
    },
    methods: {
      initCom() {
        const thisDate = this.calendarData
        const allDays = dayjs(thisDate).daysInMonth()
        const year = dayjs(thisDate).year()
        const month = dayjs(thisDate).month() + 1

        for (let i = 1; i <= allDays; i++) {
          const key = dayjs(`${year}-${month}-${i}`).format('YYYY-MM-DD')
          !this.dataInput[key] && this.$set(this.dataInput, key, '')
        }
      },
      setVal () {
        for (const x in this.dataInput) {
          this.$set(this.dataInput, x, this.defaultPrice)
        }
      },
      submit() {
        console.log(this.dataInput)
      }
    }
}
</script>

<style scoped lang="less">
@import './welcome.less';
</style>
