<template>
    <div>
        <p>我是第一个子组件</p>
        <!-- <button @click='getName'>获取共享数据</button> -->
    </div>
</template>
<script>
export default {
    name:'One',
    methods:{
      getName(){
          alert(this.$store.state.name)
      }
  }
}
</script>
<style scoped>
    /* 默认情况下载style中设置的样式是全局样式 */
    /* 如果要设置局部样式，就要在style 中增加 scoped */
    p{
        background-color: pink;
    }
</style>