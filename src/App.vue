<template>
  <div class="app">
    <router-view/>
    <div class="tab-bar">
      <!-- <div class="tab-item active" @click="toPath('/home')">
      <img :src="path === '/home' ? require('./assets/images/home-active.svg') : require('./assets/images/home.svg')" alt="">
      <span>主页</span>
    </div>
    <div class="tab-item" >
      <img :src="path === '/home' ? require('./assets/images/goodlist-active.svg') : require('./assets/images/goodlist.svg')" alt="">
      <span>列表</span>
    </div>
    <div class="tab-item" >
      <img :src="path === '/home' ? require('./assets/images/car-active.svg') : require('./assets/images/car.svg')" alt="">
      <span>购物车</span>
    </div>
    <div class="tab-item" >
      <img :src="path === '/home' ? require('./assets/images/user-active.svg') : require('./assets/images/user.svg')" alt="">
      <span>用户</span>
    </div> -->
    

      <div class="tab-item" @click="toPath('/')" :class="this.$route.path === '/' ? 'active' : ''">
        <i class="el-icon-s-home"></i>
        <span>首页</span>
      </div>
      <div class="tab-item" @click="toPath('/goodlist')" :class="this.$route.path === '/goodlist' ? 'active' : ''">
        <i class="el-icon-s-fold"></i>
        <span>列表</span>
      </div>
      <div class="tab-item" @click="toPath('/car')" :class="this.$route.path === '/car' ? 'active' : ''">
        <i class="el-icon-shopping-cart-1"></i>
        <span>购物车</span>
      </div>
      <div class="tab-item" @click="toPath('/user')" :class="this.$route.path === '/user' ? 'active' : ''">
        <i class="el-icon-user-solid"></i>
        <span>我的</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  methods:{
    toPath(path){
      this.$router.replace(path)
      console.log(this.$router);
      console.log(this.$route)
    }
  }
}
</script>

<style scoped lang="css">
  *{
    margin: 0;
    padding: 0;
  }
  .tab-bar{
    
    width: 100%;
    height: 50px;
    bottom: 0;
    margin: 0;
    margin-left: -8px;
    display: flex;
    position: fixed;
    background: rgb(63, 178, 255);
  }
  .tab-item{
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  img{
    width: 20px;
    height: 20px;
  }
  .active{
    color: red;
  }
</style>
