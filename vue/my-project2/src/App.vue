<!--组件结构代码-->
<template>
  <div id="app">
      <router-link to='/one' tag="button">go to one</router-link>
      <router-link to='/two' tag="button">go to two</router-link>
      <!-- <One></One> -->
      <!-- <button @click='getName'>获取共享数据</button> -->
      <!-- <Two></Two> -->
      <router-view></router-view>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
  </div>
</template>

<script>
// import One from './components/One.vue';
// import Two from './components/Two.vue'

export default {
  name: "App",
  components:{
    //   One:One,
    //   Two:Two
  },
  methods:{
      getName(){
          alert(this.$store.state.name)
      }
  }
};
</script>


<style >
</style>